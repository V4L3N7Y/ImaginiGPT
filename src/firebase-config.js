// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG8ALEpv0FKxSquNyqKoe6O5T4DumPxLY",
  authDomain: "imaginigpt.firebaseapp.com",
  projectId: "imaginigpt",
  storageBucket: "imaginigpt.appspot.com",
  messagingSenderId: "504778475448",
  appId: "1:504778475448:web:b825b884d5f0d2075ff14d",
  measurementId: "G-3PZR3C4MBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const Auth = getAuth(app);
export const Provider = new GoogleAuthProvider();
export const storage = getStorage(app);