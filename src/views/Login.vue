<template>
  <div class="container">
  <div class="row"> 
  <div class="col-md-4"></div>
  <div class="col-md-4 top-merge">
    <form v-on:submit.prevent="Login">
        <h3>Hello!</h3>
          <p>Welcome to our little Vue demo powered by CometChat. Login with the username "superhero1" or "superhero2" and test the chat out.
            To create your own user, see <a href="https://prodocs.cometchat.com/reference#createuser">our documentation</a>   </p>
            <div class="form-wrapper">
                <label>Username</label>
                    <input type="text" name="username" id="username" v-model="username" placeholder="Enter your username" class="form-control" required>
             </div>
        <button type="submit" class="btn btn-md btn-primary">LOG IN <span v-if="showSpinner" class="fa fa-spin fa-spinner"></span> </button>
      </form>
    </div> 
    <div class="col-md-4"></div>

    </div>
</div>

</template>

<script>
import { CometChat } from "@cometchat-pro/chat";

export default {
  data() {
    return {
      username: "",
      showSpinner: false
    };
  },
  methods: {
    Login() {
      var AUTH_KEY ='AUTH_KEY';
      this.showSpinner = true;
      console.log(this.username)
      CometChat.login(this.username,AUTH_KEY).then(
            (data) => {
              
              console.log(data)

                  this.showSpinner = false;
                  this.$router.push({
                    name: "chat"
                  });
                  
            },
            error => {
                this.showSpinner = false;
                alert("Whops. Something went wrong. This commonly happens when you enter a username that doesn't exist. Check the console for more information")
                console.log("Login failed with error:", error.code);
            }
            )
    }
  }
};

</script>
<style>
.top-merge{
    margin-top:100px
}
</style>
