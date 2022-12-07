// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6inHpEQqqZXI8RgFJhG9e8UxUWZfqSMk",
  authDomain: "comision-34800.firebaseapp.com",
  projectId: "comision-34800",
  storageBucket: "comision-34800.appspot.com",
  messagingSenderId: "470712598235",
  appId: "1:470712598235:web:9ae1fbd768effc1a96d6fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirestore = () => app