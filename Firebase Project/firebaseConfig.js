import { initializeApp } from "firebase/app";
import { getAuth} from  "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfzirYfcn5ey9QK3OB78e0VVJ2zZHn11o",
  authDomain: "fbproject-3c9e8.firebaseapp.com",
  projectId: "fbproject-3c9e8",
  storageBucket: "fbproject-3c9e8.firebasestorage.app",
  messagingSenderId: "973810705605",
  appId: "1:973810705605:web:8d00a6cf04f1d5803bbcac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export {auth , db}