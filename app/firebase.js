import firebase from 'firebase';
import admin from 'firebase';
export var user;
import { store, addMovie } from './store';
import data from './init/init';

const config = {
    apiKey: data.apiKey,
    authDomain: data.authDomain,
    databaseURL: data.databaseURL,
    projectId: data.projectId,
    storageBucket: data.storageBucket,
    messagingSenderId: data.messagingSenderId
};

firebase.initializeApp(config);

var database = firebase.database();

var movie = {
    title: 'deadpool',
    release: '2015'
}
//database.ref('movies').push(movie);


export function addMovieToDB (movie) {
    console.log(movie)
    var moviesRef = database.ref( user.uid + 'movies');
    moviesRef.push(movie);
    moviesRef.off();
}

var moviesRef;

export function signIn () {
    var provider = new firebase.auth.GoogleAuthProvider();
    return new Promise(function (resolve, reject) {
        firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                user = result.user;
                console.log(user)
                resolve(true);
            }).catch(function(error) {
                console.log(error);
                reject(false);
            });
    })

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
       moviesRef = firebase.database().ref(user.uid + 'movies');

        moviesRef.on('child_added', function(data) {
            console.log(data)
            store.dispatch(addMovie(data.val()));
        });

    } else {
        
    }
});