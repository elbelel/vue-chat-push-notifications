import firebase from 'firebase/app'
import 'firebase/firebase-messaging'
import {CometChat} from "@cometchat-pro/chat"



export default async function firebaseInitialize (){
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
 const messaging = firebase.messaging()

    
messaging.getToken({ vapidKey: 'BCXBaoiGbYv0LJAahgVrc9NGkz_XgaMu413DR4TIfiiVflsIsiZGIvWCRjdFAOTBHlq6WzeZA0IdQJECv0QLO6Q' }).then((currentToken) => {
  if (currentToken) {
    CometChat.registerTokenForPushNotification(currentToken).then((payload)=>{
        console.log("from comet",payload)
        
    }).catch((err)=>{
        console.log(err)
    });

  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});




messaging.onMessage(function(payload) {
    console.log('Receiving foreground message');
    console.log(payload)
      var notificationTitle = 'vue-cometchat-firebase';
    var notificationOptions = {
      body: payload.data.alert,
      icon: '',
    };
  
    var notification = new Notification(notificationTitle, notificationOptions);
    notification.onclick = function(event) {
      notification.close();
      console.log(event);
    };
   });

}

