import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAITFToH10WEEi0gyFgQOgH1aP53zpFV8c",
  authDomain: "chat-app-ded19.firebaseapp.com",
  projectId: "chat-app-ded19",
  storageBucket: "chat-app-ded19.appspot.com",
  messagingSenderId: "1082856044032",
  appId: "1:1082856044032:web:5f38f68ae4e6f55fdc4ae5",
  measurementId: "G-C3380T9L9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore()

auth.useEmulator('http://localhost:9099');
if(window.location.hostname === 'localhost'){
  db.useEmulator('localhost','8080')
}


export default firebase