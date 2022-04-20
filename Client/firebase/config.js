import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {

  apiKey: "AIzaSyDtX_mMAXTbqViust4trUHxbhZl00pQ11o",
  authDomain: "pm-source.firebaseapp.com",
  projectId: "pm-source",
  storageBucket: "pm-source.appspot.com",
  messagingSenderId: "710113673470",
  appId: "1:710113673470:web:9b0d42aa9fee56a4cb65af"
};



// Initialize App
firebase.initializeApp(firebaseConfig);

// Firestore service
const db = firebase.firestore();

//Authentication service
const auth = firebase.auth();

// Storage Service
const storage = firebase.storage();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

//Export the needed stuff
export {db, auth, storage, timestamp};