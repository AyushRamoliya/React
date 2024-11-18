import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpOiEs-3nTVBTJn2zc2oftPAf-xMOOaNU",
  authDomain: "fir-project1-5e4e4.firebaseapp.com",
  projectId: "fir-project1-5e4e4",
  storageBucket: "fir-project1-5e4e4.firebasestorage.app",
  messagingSenderId: "50961145574",
  appId: "1:50961145574:web:db472787b1c8f27ac46527"
};

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {db , auth}