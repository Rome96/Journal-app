import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDeasAbgw62WbkVtnThYwJPFW03SJBGa8s",
  authDomain: "journal-18972.firebaseapp.com",
  databaseURL: "https://journal-18972.firebaseio.com",
  projectId: "journal-18972",
  storageBucket: "journal-18972.appspot.com",
  messagingSenderId: "766135163919",
  appId: "1:766135163919:web:f42660592f7ba0da5e577a",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  firebase,
  googleAuthProvider
}