import firebase from 'firebase';
import admin from 'firebase';

import { store, addMovie } from './store';
import { firebaseData } from './config/init';

let currentUser;

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

var moviesRef = firebase.database().ref(currentUser.uid + 'movies');

moviesRef.on('child_added', function(data) {
    store.dispatch(addMovie(data.val()));
});

export function addMovieToDB (movie) {
    var moviesRef = database.ref( currentUser.uid + 'movies');
    moviesRef.push(movie);
    moviesRef.off();
}

export function signIn () {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            user = result.user;
            console.log(user)
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
    if (user) {
        currentUser = user;
    } else {
    }
});