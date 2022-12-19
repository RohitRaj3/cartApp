import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {} from 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB5x3GxP0C79W3FIpoxgFuLo6Qm2xcnbZ8",
  authDomain: "cart-21281.firebaseapp.com",
  projectId: "cart-21281",
  storageBucket: "cart-21281.appspot.com",
  messagingSenderId: "733397031813",
  appId: "1:733397031813:web:925474866842bd5add82ec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App />
  </React.StrictMode>
);


// reportWebVitals();