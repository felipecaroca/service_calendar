import firebase from "firebase/app";
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: "AIzaSyDxrjTVOoMa0ep7ZPANCRCg6doTBaIwFWM",
  authDomain: "service-calendar-715dd.firebaseapp.com",
  databaseURL: "https://service-calendar-715dd.firebaseio.com",
  projectId: "service-calendar-715dd",
  storageBucket: "service-calendar-715dd.appspot.com",
  messagingSenderId: "401187501",
  appId: "1:401187501:web:acdad237d03af9ff125c24",
  measurementId: "G-Z2SE8NSSNN"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

}

export {firebase}