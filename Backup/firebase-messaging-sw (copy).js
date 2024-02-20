// Import and configure the Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js';
import { getMessaging } from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-messaging-sw.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyA0BUNKN7lb2_4c2g3kMewLqfrP89LJZ7Y",
    authDomain: "tmitech.firebaseapp.com",
    databaseURL: "https://tmitech-default-rtdb.firebaseio.com",
    projectId: "tmitech",
    storageBucket: "tmitech.appspot.com",
    messagingSenderId: "5644570217",
    appId: "1:5644570217:web:2a4e62775fed984b791cf8",
    measurementId: "G-48MTK5PHZV"
});
getMessaging(firebaseApp);
console.info('Firebase messaging service worker is set up');
