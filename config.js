import * as firebase from 'firebase';
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyA49L8IhBtoabGSlhyd9bA1d3jZqXEuGTI",
    authDomain: "wily-app-eb261.firebaseapp.com",
    projectId: "wily-app-eb261",
    storageBucket: "wily-app-eb261.appspot.com",
    messagingSenderId: "322461477126",
    appId: "1:322461477126:web:4067b5a0e3604c23811687"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();