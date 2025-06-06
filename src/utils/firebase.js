// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL3Nn_XaL8OWRw785NFQwJtBN2rlx6fAY",
  authDomain: "netflix-gpt-fedc2.firebaseapp.com",
  projectId: "netflix-gpt-fedc2",
  storageBucket: "netflix-gpt-fedc2.firebasestorage.app",
  messagingSenderId: "959633286689",
  appId: "1:959633286689:web:231bbf121d0f31c05a2560",
  measurementId: "G-JK8RNGBBT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
