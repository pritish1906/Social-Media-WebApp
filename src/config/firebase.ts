// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuIEtR_VI5FB-3WKo0tpbPlnnt8sTKOv0",
    authDomain: "social-media-app-3ba44.firebaseapp.com",
    projectId: "social-media-app-3ba44",
    storageBucket: "social-media-app-3ba44.appspot.com",
    messagingSenderId: "703307326944",
    appId: "1:703307326944:web:17d75a938acb995d327785"
};

// Initialize Firebase   
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);