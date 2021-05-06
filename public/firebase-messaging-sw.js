//firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDxlkwvNN-PuKVIGR2CB8IzDTD-ohFVdL4",
    authDomain: "proven-citizen-250223.firebaseapp.com",
    databaseURL: 'https://proven-citizen-250223.firebaseio.com',
    projectId: "proven-citizen-250223",
    storageBucket: "proven-citizen-250223.appspot.com",
    messagingSenderId: "436543649212",
    appId: "1:436543649212:web:870a96c50603f850ca67b9",
    measurementId: "G-Y76ZVP4205"
}

firebase.initializeApp(firebaseConfig)

firebase.messaging()
const messaging  = firebase.messaging()

messaging.onBackgroundMessage(() => {
    console.log("tesing sevice worker")
    // Customize notification here
    const notificationTitle = 'vue-cometchat-firebase';
    const notificationOptions = {
      body: 'Background Message body.',
    //   icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });

  
