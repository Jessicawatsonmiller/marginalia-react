import * as firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAg4ELim3IfNA3oYC7tbRsO6jpFvMAlf3Y",
  authDomain: "marginalia-94238.firebaseapp.com",
  databaseURL: "https://marginalia-94238.firebaseio.com",
  projectId: "marginalia-94238",
  storageBucket: "marginalia-94238.appspot.com",
  messagingSenderId: "802074060077",
  appId: "1:802074060077:web:19b8a214fcfbf0b679dfa4",
  measurementId: "G-NTY3WV57T7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

export const database = firebase.database()