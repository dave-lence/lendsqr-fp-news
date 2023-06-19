import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVp1DHeq3XDQjG9WbA8CslltxRJFc9mRM",
  authDomain: "lendsqr-news.firebaseapp.com",
  projectId: "lendsqr-news",
  storageBucket: "lendsqr-news.appspot.com",
  messagingSenderId: "752738580774",
  appId: "1:752738580774:web:c0e92447d00253c96629e7",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db}