import firebase from 'firebase';
import admin from 'firebase';

import { store, addMovie, resetStateOnSignOut } from './store';
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
    var moviesRef = firebase.database().ref(currentUser.uid + 'movies').limitToLast(5);

    moviesRef.on('value', function(data) {
        var movies = data.val();
        resetStateOnSignOut();
        for (let movie in movies) {
            store.dispatch(addMovie(movies[movie]))
        }
        console.log(data.val());
    });

    // moviesRef.off();
}

export function addMovieToDB (movie) {
    var moviesRef = database.ref( currentUser.uid + 'movies');
    moviesRef.push(movie);
    // moviesRef.off();
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
    }
});