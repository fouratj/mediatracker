import firebase from 'firebase';
import admin from 'firebase';
import https from 'https';

import { store,
        addMovie, 
        delMovie,
        addTVShow,
        delTVShow,
        addBook,
        delBook,
        resetStateOnSignOut,
        updateStats } from './store';

import { firebaseData } from './config/init';

// let currentUser;
let myListener;
const config = {
    apiKey: firebaseData.apiKey,
    authDomain: firebaseData.authDomain,
    databaseURL: firebaseData.databaseURL,
    projectId: firebaseData.projectId,
    storageBucket: firebaseData.storageBucket,
    messagingSenderId: firebaseData.messagingSenderId
};

firebase.initializeApp(config);

var database = firebase.database();
var auth = firebase.auth();

function mediaTracker () {    
    let user = auth.currentUser;

    let moviesRef = database.ref(user.uid + 'movies');
    let tvshowsRef = database.ref(user.uid + 'tvshows');
    let booksRef = database.ref(user.uid + 'books');

    //moviesRef.on('value', function(data) {
        //     var movies = data.val();
        //     resetStateOnSignOut();
        //     for (let movie in movies) {
        //         store.dispatch(addMovie(movies[movie]))
        //     }
        //     // console.log(data.val());
        // });

        // moviesRef.once('value', function(snapshot) {
        //     let cache = {};
        //     resetStateOnSignOut();
        //     snapshot.forEach(function(childSnapshot) {
                
        //         var childKey = childSnapshot.key;
        //         var childData = childSnapshot.val();
        //         var nameKey = childData.title;
        //         cache[nameKey] = nameKey;
        //         store.dispatch(addMovie(childData));
    //});

    moviesRef.on('child_added', function (data) {
        let current = data.val();

        let movie = {
            key: data.key,
            count: current.count,
            id: current.id,
            poster: current.poster,
            released: new Date(current.released).getFullYear(),
            runtime: current.runtime,
            synopsis: current.synopsis,
            title: current.title
        };

        store.dispatch(addMovie(movie));
    });

    moviesRef.on('child_removed', function (data) {
        store.dispatch(delMovie(data.val()));
    });

    tvshowsRef.on('child_added', function (data) {      
        let curr = data.val();

        let tvshow = {
            key: data.key,
            title: curr.title,
            count: curr.count,
            id: curr.id,
            episodes: curr.episodes,
            runtime: curr.length,
            released: curr.released,
            poster: curr.poster
        };

        store.dispatch(addTVShow(tvshow));
    });

    tvshowsRef.on('child_removed', function (data) {
        store.dispatch(delTVShow(data.val()));
    });

    booksRef.on('child_added', function (data) {  
        let curr = data.val();

        let book = {
            key: data.key,
            title: curr.title,
            poster: curr.poster,
            createdBy: curr.createdBy,
            count: curr.count,
            id: curr.id,
            runtime: curr.pages,
            released: curr.released,
            dateAdded: curr.dateAdded
        };   

        store.dispatch(addBook(book));
    });

    booksRef.on('child_removed', function (data) {
        store.dispatch(delBook(data.val()));
    });

    // GET STATS
    user.getToken().then(function(idToken) {
        let movieURI = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/getMovieStats';
        let showURI = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/getShowStats';
        let bookURI = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/getBookStats';

        $.get(bookURI, { 'target': idToken }, function (data) {

            let stats = {
                books: { count: data.books.count, total: data.books.total }
            }

            store.dispatch(updateBookStats(stats));
        });

        $.get(showURI, { 'target': idToken }, function (data) {

            let stats = {
                tvshows: { count: data.tvshows.count, total: data.tvshows.total }
            }

            store.dispatch(updateShowStats(stats));
        });

        $.get(movieURI, { 'target': idToken }, function (data) {

            let stats = {
                movies: { count: data.movies.count, total: data.movies.total }
            }

            store.dispatch(updateMovieStats(stats));
        });
    });


}

export function addMovieToDB (movie) {
    let user = auth.currentUser;
    var moviesRef = database.ref( user.uid + 'movies');
    moviesRef.push(movie);
}

export function delMovieFromDB (movie) {
    let user = auth.currentUser;
    var movieRef = database.ref( user.uid + 'movies/' + movie.key)
    movieRef.remove();
}

export function addTVShowToDB (tvshow) {
    let user = auth.currentUser;
    var tvshowsRef = database.ref( user.uid + 'tvshows');
    tvshowsRef.push(tvshow);
}

export function delTVShowFromDB (tvshow) {
    let user = auth.currentUser;
    var tvshowRef = database.ref( user.uid + 'tvshows/' + tvshow.key);
    tvshowRef.remove();
}

export function addBookToDB (book) {
    let user = auth.currentUser;
    var booksRef = database.ref( user.uid + 'books');
    booksRef.push(book);
}

export function delBookFromDB (book) {
    let user = auth.currentUser;
    var bookRef = database.ref(user.uid + 'books/' + book.key);
    bookRef.remove();
}

export function signIn () {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .catch(function(error) {
            console.log(error);
        });
}

export function signOut () {
    firebase.auth().signOut().then(function() {
        console.log("Signout Successful")
    }, function(error) {
        console.log(error);
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    resetStateOnSignOut();
    
    if (user) {
        myListener = new mediaTracker();
    }
});