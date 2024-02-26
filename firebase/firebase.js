// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnkRtc2J2gSRZoW0TkMlCuO5WFj4Wiljo",
  authDomain: "lethalcooking.firebaseapp.com",
  projectId: "lethalcooking",
  storageBucket: "lethalcooking.appspot.com",
  messagingSenderId: "682046049855",
  appId: "1:682046049855:web:de4375ab0c411b6edc328a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};