<template>
<div>
  <CometChatUserListWithMessages/>
    <button v-on:click="logout" class="btn btn-sm bt-primary">Logout</button>

</div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";
import {CometChatUserListWithMessages} from '../cometchat-ui'
import firebase from 'firebase/app'
import 'firebase/firebase-messaging'
export default {
  components:{
CometChatUserListWithMessages
  },
  methods:{
     async logout(){
  
  try {
      
  const messaging = firebase.messaging()
    await messaging.deleteToken();
    await CometChat.logout();
    this.$router.push({
        name: "homepage"
      });
  } catch (error) {
    console.error(error);
  }
}
  }
  }
</script>