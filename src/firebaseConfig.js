// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDccaiyDgEp-DnCAlpsedi7imFulbzVFCw",
  authDomain: "e-commerce-website-62d0e.firebaseapp.com",
  projectId: "e-commerce-website-62d0e",
  storageBucket: "e-commerce-website-62d0e.appspot.com",
  messagingSenderId: "725357570668",
  appId: "1:725357570668:web:531c8369328dda87fe4649",
  measurementId: "G-LF76X2TYB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});