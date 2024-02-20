/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyA0BUNKN7lb2_4c2g3kMewLqfrP89LJZ7Y",
    authDomain: "tmitech.firebaseapp.com",
    databaseURL: "https://tmitech-default-rtdb.firebaseio.com",
    projectId: "tmitech",
    storageBucket: "tmitech.appspot.com",
    messagingSenderId: "5644570217",
    appId: "1:5644570217:web:2a4e62775fed984b791cf8",
    measurementId: "G-48MTK5PHZV"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}