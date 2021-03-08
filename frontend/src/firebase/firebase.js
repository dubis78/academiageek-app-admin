import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCYY_gEf0bMTrNNVPxqZMF_fEnYF66lZGA",
  authDomain: "academia-geek-app.firebaseapp.com",
  projectId: "academia-geek-app",
  storageBucket: "academia-geek-app.appspot.com",
  messagingSenderId: "658443980590",
  appId: "1:658443980590:web:404e39c8c7a6c040f334bf",
  measurementId: "G-MWNG9ZZMV2"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const firestore = firebase.firestore();
const database = firebase.database();

export {
  firestore, 
  database,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
