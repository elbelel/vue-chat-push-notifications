<template>
<div>
  <CometChatUserListWithMessages/>
    <button v-on:click="logout" class="btn btn-sm bt-primary">Logout</button>

</div>
</template>

<script>
// @ is an alias to /src
import { CometChat } from "@cometchat-pro/chat";
import {CometChatUserListWithMessages} from '../cometchat-ui'
import firebase from 'firebase/app'
import 'firebase/firebase-messaging'
// import { COMETCHAT_CONSTANTS } from '../cometchat-ui/resources/constants';
// import Spinner from "../components/Spinner.vue";
// import { updateFirebaseLoggedInUser } from './../pushNotification';
export default {
  components:{
CometChatUserListWithMessages
  },
  methods:{
     async logout(){
  
  try {
    console.log("checking logout")
               const messaging = firebase.messaging()

    // Delete the token
    await messaging.deleteToken();
    
    // Logout the user
    await CometChat.logout();
    console.log('5. Logged out');

    // Refresh the page.
     window.localStorage.removeItem('FCM_TOKEN');
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}
  }
  }
</script>