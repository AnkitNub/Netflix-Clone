import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDnSLX7JS1St3Co8vpgUBPRhh74c4PwwsM",
  authDomain: "netflix-clone-668d8.firebaseapp.com",
  projectId: "netflix-clone-668d8",
  storageBucket: "netflix-clone-668d8.appspot.com",
  messagingSenderId: "765435228032",
  appId: "1:765435228032:web:e8b1803007e05f617c5b65",
  measurementId: "G-T8RVHV5BWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);