// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu9m0awtf36swHt2RKjNQVgAhfPBZcPnQ",
  authDomain: "groups-atg.firebaseapp.com",
  projectId: "groups-atg",
  storageBucket: "groups-atg.appspot.com",
  messagingSenderId: "1069367557170",
  appId: "1:1069367557170:web:d6ee6e9feca9dd6281902b",
  measurementId: "G-7ELCF67QMD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const firestore = getFirestore();
export default app;
