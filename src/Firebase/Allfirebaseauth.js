// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW-_WgIzhPB4YHXK2LLT7vURlJppU8-CM",
  authDomain: "djiauth.firebaseapp.com",
  projectId: "djiauth",
  storageBucket: "djiauth.firebasestorage.app",
  messagingSenderId: "763982276618",
  appId: "1:763982276618:web:2a6a26260f421544b0d7f3",
  measurementId: "G-17YRTBRG31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
