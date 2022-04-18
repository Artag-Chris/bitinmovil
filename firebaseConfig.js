// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZjHsBgjzv9Mm6tt8GlKLbcQb6NPxd-d8",
  authDomain: "bitin-d572d.firebaseapp.com",
  projectId: "bitin-d572d",
  storageBucket: "bitin-d572d.appspot.com",
  messagingSenderId: "620776331658",
  appId: "1:620776331658:web:e2f3ac773a3d1bad041073"
};

// Initialize Firebase
{/*let app;
if (firebase.apps.length===0) {
  app = initializeApp(firebaseConfig);
} else {
  app=firebase.initializeApp(firebaseConfig);
}*/}
const app= initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export {app, db, auth };