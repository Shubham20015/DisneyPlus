import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB2hCbFDE3p9TXLlWCwfcEWqd6yvydPnck",
  authDomain: "disney-clone-d7818.firebaseapp.com",
  projectId: "disney-clone-d7818",
  storageBucket: "disney-clone-d7818.appspot.com",
  messagingSenderId: "448541978975",
  appId: "1:448541978975:web:81138d2c35a1d713bd46ea",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;
