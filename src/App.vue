<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";
import firebaseInitialize from './firebase'
import './App.css'

export default {
  created(){
   this.initializeComet()
  firebaseInitialize()
  },
    methods: {
      initializeComet(){
        const appID = '32980c2ccb18ce4';
            const region = 'us';
            const appSetting = new CometChat.AppSettingsBuilder()
              .subscribePresenceForAllUsers()
              .setRegion(region)
              .build();

            CometChat.init(appID, appSetting).then(
              () => {
                console.log('Initialization completed successfully');
                // You can now call login function.
              },
              (error) => {
                console.log('Initialization failed with error:', error);
                // Check the reason for error and take appropriate action.
              }
        );

      }
    }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
