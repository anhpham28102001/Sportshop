// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-1FrBeDH-bMEmv00qrXS9NEnUY7AsX_M",
    authDomain: "sportshop-e14f7.firebaseapp.com",
    projectId: "sportshop-e14f7",
    storageBucket: "sportshop-e14f7.appspot.com",
    messagingSenderId: "730957250162",
    appId: "1:730957250162:web:43d0578d5d4f20ce2b0ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)