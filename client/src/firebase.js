// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5QO_uHfVFFlQ6aenWpdvGIGIno-whxy4",
  authDomain: "amicizia-e622a.firebaseapp.com",
  projectId: "amicizia-e622a",
  storageBucket: "amicizia-e622a.appspot.com",
  messagingSenderId: "579577843757",
  appId: "1:579577843757:web:2cd59357609aaad83668a4",
  measurementId: "G-N7SZYSW4C7"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);