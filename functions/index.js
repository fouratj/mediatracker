var functions = require('firebase-functions');
const cors = require('cors')({origin: true});
var https = require('https');


function sendViaCors (request, response, uri) {

    return new Promise((resolve, reject) => {
        cors(request, response, () => {
            var onFinish = function (res) {
                    var body = '';
                    res.on('data', (d) => {
                        body += d
                    });

                    res.on('end', () => {
                        console.log(body)
                        resolve(body)
                        //response.send(body);
                    });         
            }

            https.get(uri, onFinish);

        }); // /CORS

    }); // /PROMISE
}


// var tvID = "http://api.themoviedb.org/3/tv/"
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
    });

});
