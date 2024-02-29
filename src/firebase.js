// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg1btcE0gC4p2ehe0H0oZRZblDDUw00TQ",
  authDomain: "buzz-chat-app-11b8b.firebaseapp.com",
  projectId: "buzz-chat-app-11b8b",
  storageBucket: "buzz-chat-app-11b8b.appspot.com",
  messagingSenderId: "999153667284",
  appId: "1:999153667284:web:5df383435bd55efa93ff41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)