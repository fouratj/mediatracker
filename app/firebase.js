import firebase from 'firebase';
import admin from 'firebase';

const config = {
    apiKey: "AIzaSyB5nvbafjMCL9eFZVgpvaBr25O5l167kOA",
    authDomain: "mylifetracker-b6177.firebaseapp.com",
    databaseURL: "https://mylifetracker-b6177.firebaseio.com",
    projectId: "mylifetracker-b6177",
    storageBucket: "mylifetracker-b6177.appspot.com",
    messagingSenderId: "298747593275"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;