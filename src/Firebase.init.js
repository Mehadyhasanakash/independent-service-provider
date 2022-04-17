// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwgTGYAlq0-dFAsFRlWYgm0IrmDIq_lIo",
  authDomain: "assignment-10-613c2.firebaseapp.com",
  projectId: "assignment-10-613c2",
  storageBucket: "assignment-10-613c2.appspot.com",
  messagingSenderId: "670613684161",
  appId: "1:670613684161:web:3f5dc0193725389d3a7940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;