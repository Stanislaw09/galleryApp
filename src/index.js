import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

const firebase=require('firebase')
require('firebase/firestore')

firebase.initializeApp({
    apiKey: "AIzaSyAC5w4Kd0c0HVXguR0OBY-5VBcjYoNNKB0",
    authDomain: "gallery-app-97f74.firebaseapp.com",
    databaseURL: "https://gallery-app-97f74.firebaseio.com",
    projectId: "gallery-app-97f74",
    storageBucket: "gallery-app-97f74.appspot.com",
    messagingSenderId: "660501488949",
    appId: "1:660501488949:web:36d10cf25022f4e489187c"
})

ReactDOM.render(
    <BrowserRouter basename={window.location.pathname || ''}>
        <App />
    </BrowserRouter>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
