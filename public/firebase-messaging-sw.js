//firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

var firebaseConfig = {
      apiKey: "apiKey",
      authDomain: "authDomain",
      databaseURL: 'databaseURL',
      projectId: "projectId",
      storageBucket: "storageBucket",
      messagingSenderId: "messagingSenderId",
      appId: "appId",
      measurementId: "measurementId"
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

  
