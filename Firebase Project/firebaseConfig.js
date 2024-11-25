// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnEvcZ0eqRjd-7ErENkVmr6E0f32ihLfk",
  authDomain: "fbproject-13383.firebaseapp.com",
  projectId: "fbproject-13383",
  storageBucket: "fbproject-13383.firebasestorage.app",
  messagingSenderId: "994573240213",
  appId: "1:994573240213:web:b882bd5b43466264de189c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export {db , auth}