import firebase from 'firebase/app'
import 'firebase/firebase-messaging'
import {CometChat} from "@cometchat-pro/chat"



export default async function firebaseInitialize (){
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
 const messaging = firebase.messaging()

    
messaging.getToken({ vapidKey: 'BCXBaoiGbYv0LJAahgVrc9NGkz_XgaMu413DR4TIfiiVflsIsiZGIvWCRjdFAOTBHlq6WzeZA0IdQJECv0QLO6Q' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
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

