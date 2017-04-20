var functions = require('firebase-functions');
var admin = require('firebase-admin');
var sendViaCors = require('./sendViaCors');
var serviceAccount = require("./mylifetracker-b6177-firebase-adminsdk-qboy9-40e19e2986.json");

var App = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mylifetracker-b6177.firebaseio.com"
});

var database = App.database();

exports.searchMovie = functions.https.onRequest((request, response) => {
    const movieDBURI = 'https://api.themoviedb.org/3/search/movie?api_key='; //&api_key=
    const APIKey = '83e042991949ef7ee9683a5682d8fd7e';
    let uri;

    if (!request.query.target) {
        response.send("Can't send empty string");
    }

    uri = movieDBURI + APIKey + '&query=' + encodeURIComponent(request.query.target);

    new Promise(function (resolve, reject) {
        resolve(sendViaCors(request, response, uri));
    }).then(function(body) {
        response.send(body);
    }).catch(function (error) {
        response.send(error);
    });

});

exports.getMovie = functions.https.onRequest((request, response) => {
    const movieDBURI = 'https://api.themoviedb.org/3/movie/{id}?api_key=';
    // https://api.themoviedb.org/3/movie/343611?api_key={api_key}
    const APIKey = '83e042991949ef7ee9683a5682d8fd7e';
    let uri;

    if(!request.query.target) {
        response.send("Can't send empty string");
    }

    uri = movieDBURI.replace("{id}", encodeURIComponent(request.query.target)) + APIKey;

    new Promise(function (resolve, reject) {
        resolve(sendViaCors(request, response, uri));
    }).then(function(body) {
        response.send(body);
    }).catch(function (error) {
        response.send(error);
    });

});

exports.searchShow = functions.https.onRequest((request, response) => {
    const tvSearchURI = "https://api.themoviedb.org/3/search/tv?api_key=" //query="
    const APIKey = '83e042991949ef7ee9683a5682d8fd7e';
    let uri;

    if (!request.query.target) {
        response.send("Can't send empty string");    
    }

    uri = tvSearchURI + APIKey + '&query=' + encodeURIComponent(request.query.target);

    new Promise(function (resolve, reject) {
        resolve(sendViaCors(request, response, uri));
    }).then(function(body) {
        response.send(body);
    }).catch(function (error) {
        response.send(error);
    });

});

exports.getShow = functions.https.onRequest((request, response) => {
    const tvIDURI = "https://api.themoviedb.org/3/tv/{id}?api_key=";
    const APIKey = '83e042991949ef7ee9683a5682d8fd7e';
    let uri;

    if (!request.query.target) {
        response.send("Can't send empty string");
    }

    uri = tvIDURI.replace("{id}", encodeURIComponent(request.query.target)) + APIKey;

    new Promise(function (resolve, reject) {
        resolve(sendViaCors(request, response, uri));
    }).then(function(body) {
        response.send(body);
    }).catch(function (error) {
        response.send(error);
    });
});

exports.searchBook = functions.https.onRequest((request, response) => {
    let name = request.query.target;
    let uri;
    const APIkey = 'key=AIzaSyD9o4jKfQvvCAr8glvom4llEAssu8ojmgk';

    if (!request.query.target) {
        response.send("Can't send empty string");    
    }

    uri = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(name) +  '&' + APIkey + '&country=US';

    new Promise(function (resolve, reject) {
        resolve(sendViaCors(request, response, uri));
    }).then(function(body) {
        response.send(body);
    }).catch(function (error) {
        response.send(error);
    });
});

exports.getBook = functions.https.onRequest((request, response) => {
    let id = request.query.target;
    let uri;
    const APIkey = 'key=AIzaSyD9o4jKfQvvCAr8glvom4llEAssu8ojmgk';

    if (!request.query.target) {
        response.send("Can't send empty string");
    }

    uri = 'https://www.googleapis.com/books/v1/volumes/' + encodeURIComponent(id) + '?' + APIkey + '&country=US';

    new Promise(function (resolve, reject) {
        resolve(sendViaCors(request, response, uri));
    }).then(function(body) {
        response.send(body);
    }).catch(function(error) {
        response.send(error);
    })
});

exports.getStats = functions.https.onRequest((request, response) => {
    let token = request.query.target;
    
    admin.auth()
        .verifyIdToken(token)
        .then(function(decodedToken) {
            var uid = decodedToken.uid;
            var moviesFinished = false, tvshowsFinished = false, booksFinished = false;

            var moviesRef = database.ref(uid + 'movies');
            var tvshowsRef = database.ref(uid + 'tvshows');
            var booksRef = database.ref(uid + 'books');

            var res = {
                movies: { count: 0, total: 0 },
                tvshows: { count: 0, total: 0 },
                books: { count: 0, total: 0 }
            }

            moviesRef.once('value', function(snapshot) {                
                snapshot.forEach(function(childSnapshot) {
                    var curr = childSnapshot.val();
                    res.movies.count++;
                    res.movies.total += curr.runtime;
                });
                moviesFinished = true;
                hasEverythingFinished();
            });

            tvshowsRef.once('value', function(snapshot) {                
                snapshot.forEach(function(childSnapshot) {
                    var curr = childSnapshot.val();
                    res.tvshows.count++; //total seasons
                    var seasonLength = parseInt(curr.episodes) * parseInt(curr.length);
                    res.tvshows.total += seasonLength; //total minutes of seasons watched
                });
                tvshowsFinished = true;
                hasEverythingFinished();
            });

            booksRef.once('value', function(snapshot) {                
                snapshot.forEach(function(childSnapshot) {
                    var curr = childSnapshot.val();
                    res.books.count++; //total book count
                    res.books.total += curr.pages; //total pages count
                });
                booksFinished = true;
                hasEverythingFinished();

            });



            var onFinish = function () {
                moviesRef.off();
                tvshowsRef.off();
                booksRef.off();
                new Promise(function(resolve, reject) {
                    resolve(sendViaCors(request, response, null));
                }).then(function(body) {
                    response.send(res);
                });
            }

            function hasEverythingFinished () {

                if (moviesFinished && tvshowsFinished && booksFinished) {
                    onFinish();
                }

            }


            // ...
        }).catch(function(error) {
            // Handle error
        });


});
