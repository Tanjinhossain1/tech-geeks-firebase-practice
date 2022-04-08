// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaLHr40JkJgJO04fECv2ZgqD9H96K0MuA",
  authDomain: "tech-geeks-firebase-d0a21.firebaseapp.com",
  projectId: "tech-geeks-firebase-d0a21",
  storageBucket: "tech-geeks-firebase-d0a21.appspot.com",
  messagingSenderId: "446452618",
  appId: "1:446452618:web:35b631aec1c7226ab72e73",
  measurementId: "G-8NFEEV0EP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;