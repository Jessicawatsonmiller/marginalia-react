import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app"

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
