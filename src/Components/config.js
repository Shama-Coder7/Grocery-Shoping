import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDpZ5SSMEfMI6HfZj--dLsICnFzk875U-s",
  authDomain: "shopping-cart-11424.firebaseapp.com",
  projectId: "shopping-cart-11424",
  storageBucket: "shopping-cart-11424.appspot.com",
  messagingSenderId: "446995997593",
  appId: "1:446995997593:web:a455babd8181952d5c6908",
  measurementId: "G-RNWQQLZ7FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};