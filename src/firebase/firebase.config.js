// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDrAO1L8WTsGKSqNxDsWmmm-A0U15p194",
  authDomain: "toytopia-a13b5.firebaseapp.com",
  projectId: "toytopia-a13b5",
  storageBucket: "toytopia-a13b5.firebasestorage.app",
  messagingSenderId: "200498157143",
  appId: "1:200498157143:web:44efad044311a459c17512",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
