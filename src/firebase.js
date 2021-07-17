import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPs4Eh76PNs8CHJzKlR7GQHjCP1nOWT0Y",
    authDomain: "resume-website-b81d1.firebaseapp.com",
    projectId: "resume-website-b81d1",
    storageBucket: "resume-website-b81d1.appspot.com",
    messagingSenderId: "880377914837",
    appId: "1:880377914837:web:79a089279d721d3e29895c",
    measurementId: "G-PZ4KHMDMMS"
});

var db = firebaseApp.firestore();

export { db };