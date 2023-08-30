// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0pfe-iUzxb_9X1pPNjSKNyM4EkSyPfVk",
  authDomain: "penguinlearning-48622.firebaseapp.com",
  projectId: "penguinlearning-48622",
  storageBucket: "penguinlearning-48622.appspot.com",
  messagingSenderId: "479141905113",
  appId: "1:479141905113:web:5751a4b58254196778f4c8",
  measurementId: "G-664MWPKQQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
