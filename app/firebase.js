import firebase from 'firebase';
import admin from 'firebase';

import { store, addMovie, delMovie, addTVShow, delTVShow, addBook, delBook, resetStateOnSignOut } from './store';
import { firebaseData } from './config/init';

let currentUser;
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

function mediaTracker () {
    var moviesRef = firebase.database().ref(currentUser.uid + 'movies');
    var tvshowsRef = firebase.database().ref(currentUser.uid + 'tvshows');
    var booksRef = firebase.database().ref(currentUser.uid + 'books');

    // moviesRef.on('value', function(data) {
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
    //     });

    moviesRef.on('child_added', function (data) {        
        let current = data.val();

        let movie = {
            key: data.key,
            count: current.count,
            id: current.id,
            poster: current.poster,
            released: current.release,
            runtime: current.runtime,
            synopsis: current.synopsis,
            title: current.title
        }
        store.dispatch(addMovie(movie));
    });

    moviesRef.on('child_removed', function (data) {
        store.dispatch(delMovie(data.val()));
    });

    tvshowsRef.on('child_added', function (data) {      
        console.log('tvshow child added');
        let curr = data.val();

        let tvshow = {
            key: data.key,
            title: curr.title,
            count: curr.cont,
            id: curr.id,
            episodes: curr.episodes,
            runtime: curr.length,
            released: curr.released,
            poster: curr.poster
        };

        store.dispatch(addTVShow(tvshow));
    });

    tvshowsRef.on('child_removed', function (data) {
        console.log(data.val());
        store.dispatch(delTVShow(data.val()));
    });

    booksRef.on('child_added', function (data) {        
        store.dispatch(addBook(data.val()));
    });

    booksRef.on('child_removed', function (data) {
        store.dispatch(delBook(data.val()));
    });

}

export function addMovieToDB (movie) {
    var moviesRef = database.ref( currentUser.uid + 'movies');
    moviesRef.push(movie);
}

export function delMovieFromDB (movie) {
    var movieRef = database.ref(currentUser.uid + 'movies/' + movie.key)
    movieRef.remove();
}

export function addTVShowToDB (tvshow) {
    var tvshowsRef = database.ref(currentUser.uid + 'tvshows');
    tvshowsRef.push(tvshow);
}

export function delTVShowFromDB (tvshow) {
    var tvshowRef = database.ref(currentUser.uid + 'tvshows/' + tvshow.key);
    tvshowRef.remove();
}

export function addBookToDB (book) {
    var booksRef = database.ref( currentUser.uid + 'books');
    booksRef.push(book);
}

export function delBookFromDB (book) {
    var bookRef = database.ref(currentUser.uid + 'books/' + book.key);
    bookRef.remove();
}

export function signIn () {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            currentUser = result.user;
            console.log(currentUser)
        }).catch(function(error) {
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
    console.log('authStateChanged')
    if (user) {
        currentUser = user;
        myListener = new mediaTracker();
    } else {
        currentUser = null;
    }
});