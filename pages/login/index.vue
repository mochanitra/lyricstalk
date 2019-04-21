<template>
  <div>
    <div class="dummy-bg">
      <div class="dummy-con"></div>
    </div>
    <div class="main-bg">
      <div class="main-con">
        <div class="login-con">
          <img src="~/assets/images/brand/user-icon.svg" alt>
          <button @click="login()" class="login-btn">
            <img src="~/assets/images/brand/fb-logo.svg" alt>
            <p>Continue with Facebook</p>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div></div>
    </div>
  </div>
</template>
<script>
import * as FBSE from "~/services/auth";
import * as firebase from "firebase/app";
export default {
  data: () => ({
    // user: { photoURL: null },
    token: null
  }),
  methods: {
    login() {
      let fb = FBSE.facebookSignIn();
      fb.then(result => {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          this.token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        let user = result.user;
        console.log(result);
        this.user = user.providerData[0];
      })
        .then(async () => {
          const res = await this.$axios.get(
            `https://graph.facebook.com/me?access_token=${
              this.token
            }&fields=id,name,friends{name,picture},picture`
            // {
            //   access_token: this.token,
            //   fields: "id,name,friends{name,picture},picture"
            // },
          );
          await this.$store.commit("SET_AUTH", this.user);
          let database = firebase.database();
          await database
            .ref("user")
            .equalTo(this.user.uid)
            .once("value", snapshot => {
              if (snapshot.exists()) {
                database.ref("user/" + uid).update(res.data);
              } else {
                let uid = this.user.uid;
                database.ref("user/" + uid).set(res.data);
              }
            });
          await this.$store.commit("SET_NEWAUTH", res.data);
          return this.$router.push({
            path: "/profile"
          });
        })
        .catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // ...
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/styles/variables";
.dummy-bg {
  .dummy-con {
  }
}
.main-bg {
  .main-con {
    padding: 20px 0;
    .login-con {
      display: flex;
      flex-flow: column;
      align-items: center;
      > img {
        width: 50px;
      }

      .login-btn {
        margin: 10px 0;
        background-color: $fb;
        display: flex;
        flex-flow: row;
        align-items: center;
        padding: 5px 15px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        transition-duration: 0.2s;

        &:hover {
          background-color: darken($fb, 10%);
          transition-duration: 0.2s;
        }

        img {
          height: 20px;
          margin-right: 5px;
        }

        p {
          color: white;
          font-family: "Sukhumvit-SemiBold";
        }
      }
    }
  }
}
</style>
