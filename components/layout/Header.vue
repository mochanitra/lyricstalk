<template>
  <header>
    <div class="header-row row _alit-ct">
      <div v-show="$store.state.windowWidth <= 576" class="col-2 burger-con">
        <img
          @click="show_mobile_menu = !show_mobile_menu"
          src="~/assets/images/header/menu.svg"
          alt
        >
      </div>
      <div class="col-3 offset-sm-1 logo">
        <nuxt-link to="/">
          <img class="_h-64px _cs-pt" src="~/assets/images/logo.svg">
        </nuxt-link>
      </div>

      <div v-show="$store.state.windowWidth > 576" class="col-6 nav">
        <div class="row">
          <div class="col-4">
            <nuxt-link class="header-link s-o-y" to="/soundtrack-of-you">
              Soundtrack
              <br>of you
            </nuxt-link>
          </div>

          <div class="col-4">
            <nuxt-link class="header-link md" to="/">
              music
              <br>discussion
            </nuxt-link>
          </div>

          <div class="col-4">
            <nuxt-link class="header-link gf" to="/group-feat">
              group
              <br>feat.
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="!$store.state.auth" class="col-2 profile-con">
        <nuxt-link to="/login">
          <img class="user-icon" src="~/assets/images/brand/user-icon.svg">
        </nuxt-link>
      </div>
      <div v-else class="col-2 profile-con">
        <nuxt-link to="/profile">
          <img class="profile-img" v-show="$store.state.auth" v-bind:src="user.photoURL">
        </nuxt-link>
      </div>
    </div>
    <div v-show="show_mobile_menu" class="mobile-menu">
      <div @click="show_mobile_menu = !show_mobile_menu" class="one">
        <nuxt-link class="mobile header-link s-o-y" to="/soundtrack-of-you">Soundtrack of you</nuxt-link>
      </div>

      <div @click="show_mobile_menu = !show_mobile_menu" class="two">
        <nuxt-link class="mobile header-link md" to="/">music discussion</nuxt-link>
      </div>

      <div @click="show_mobile_menu = !show_mobile_menu" class="three">
        <nuxt-link class="mobile header-link gf" to="/group-feat">group feat.</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import FavoriteButton from "~/components/FavoriteButton";
import Hamburger from "~/components/defaults/Hamburger";
import SearchModal from "~/components/modals/Search";
import * as FBSE from "~/services/auth";
import * as firebase from "firebase/app";
export default {
  components: {
    FavoriteButton,
    Hamburger,
    SearchModal
  },
  data: () => ({
    user: { photoURL: null },
    show_mobile_menu: false
  }),
  mounted() {
    const fb = FBSE.getUser();
    fb.onAuthStateChanged(async user => {
      if (user) {
        this.user = user.providerData[0];
        const res = await this.$axios.get(
          `https://lyricstalk-1fb09.firebaseio.com/user/${this.user.uid}.json`
        );
        this.$store.commit("SET_NEWAUTH", res.data);
        this.$store.commit("SET_AUTH", user.providerData[0]);
      }
    });
  },
  watch: {
    "$store.state.isSearchModalActive"(val) {
      if (val) {
        this.$modal.show("search");
      } else {
        this.$modal.hide("search");
      }
    }
  },
  methods: {
    changeLang(locale) {
      return (window.location.href = this.switchLocalePath(locale));
    },
    // login() {
    //   let fb = FBSE.facebookSignIn();
    //   fb.then(result => {
    //     if (result.credential) {
    //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //       let token = result.credential.accessToken;
    //       // ...
    //     }
    //     // The signed-in user info.
    //     let user = result.user;
    //     console.log(result);
    //     this.user = user.providerData[0];
    //   })
    //     .then(() => {
    //       this.$store.commit("SET_AUTH", this.user);
    //       let database = firebase.database();
    //       database
    //         .ref("user")
    //         .equalTo(this.user.uid)
    //         .once("value", snapshot => {
    //           if (snapshot.exists()) {
    //             console.log("exist!");
    //           } else {
    //             let uid = this.user.uid;
    //             database.ref("user/" + uid).set({
    //               displayName: this.user.displayName,
    //               email: this.user.email,
    //               uid: this.user.uid,
    //               photoURL: this.user.photoURL,
    //               quizesList: {}
    //             });
    //           }
    //         });
    //     })
    //     .catch(function(error) {
    //       // Handle Errors here.
    //       let errorCode = error.code;
    //       let errorMessage = error.message;
    //       // The email of the user's account used.
    //       let email = error.email;
    //       // The firebase.auth.AuthCredential type that was used.
    //       let credential = error.credential;
    //       // ...
    //     });
    // },
    signOut() {
      let fb = FBSE.facebookSignOut();
      fb.then(() => {
        // Sign-out successful.
        this.$store.commit("SET_AUTH", null);
        this.user = { photoURL: null };
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~assets/styles/variables";

#lang-switcher {
  > span {
    margin-right: 4px;
    margin-left: 4px;
  }
}

header {
  @media (max-width: $sm) {
    padding: 16px 0px;
  }
  padding: 18px 0px;
}

#extra-bar {
  text-align: right;
  > div {
    display: inline-block;
    margin: 0px 8px;
    &:last-child {
      margin: 0px;
    }
  }
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  #hamburger {
    display: none;
  }
  /* Menu Mobile */
  @media (max-width: $md - 1px) {
    /* Show hamburger */
    #hamburger {
      display: block;
    }
    /* Make nav a modal */
    nav {
      user-select: none !important;
      transition: opacity 0.5s ease-out;
      opacity: 0;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      position: absolute;
      width: 100%;
      min-height: calc(90vh - 90px);
      top: 90px;
      left: 0;
      right: 0;
      padding: 12px;
      background: #fff;
      z-index: 1;
      box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.1);
      &.-show-mobile {
        visibility: visible;
        opacity: 1;
        height: auto;
      }
    }
  }
}

ul.nav {
  li.list-title {
    @media (min-width: $md) {
      display: inline-block;
      padding: 0px 16px;
      .title {
        font-size: 120%;
      }
      &:last-child {
        padding-right: 0px;
      }
    }
    @media (max-width: $md - 1px) {
      .title {
        font-size: 175%;
      }
    }
  }
}

.dropdown {
  user-select: none !important;
  outline: none !important;
  visibility: hidden;
  opacity: 0;
  transition: height 0.5s, visibility 0s,
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  height: 0;
  overflow: hidden;
  min-width: 240px;
  z-index: 9;
  position: relative;
  @media (max-width: $md - 1px) {
    &::before {
      content: "";
    }
    transition-delay: 0.2s;
  }
  @media (min-width: $md) {
    padding-top: 24px;
    left: calc(50% - 100px);
    ul {
      padding: 12px 16px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      position: relative;
      z-index: 9;
      background: $red-400;
      &::before {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent $red-400 transparent;
        content: "";
        position: absolute;
        top: -10px;
        left: calc(50% - 5px);
      }
    }
  }
  li {
    margin: 12px 0px 12px 0px;
  }
}

.list-title {
  &:hover {
    .dropdown {
      visibility: visible;
      opacity: 1;
      height: auto;
      user-select: none !important;
      outline: none !important;
    }
  }
}

.profile-img {
  border-radius: 50%;
}

.logo {
  @media (max-width: 769px) {
    margin-left: 8.3333%;
  }
  @media (max-width: $screen-xs-max) {
    margin-left: 0;
    max-width: 50%;
  }
}

.header-link {
  font-family: "Chonburi";
  text-align: center;
  display: block;
  &.s-o-y {
    color: $dark-red;
  }

  &.md {
    color: $ci-sapphire;
  }

  &.gf {
    color: $header-red;
  }

  @media (max-width: $screen-sm-max) {
    font-size: 14px;
  }

  @media (max-width: $screen-xs-max) {
    font-size: 16px;
  }
}

.header-row {
  justify-content: space-between;
  @media (max-width: $screen-xs-max) {
    padding: 0 20px;
  }
}

.user-icon {
  height: 50px;
  cursor: pointer;
}

.burger-con {
  display: flex;
  flex-flow: column;
  align-items: center;
  img {
    height: 40px;
    cursor: pointer;
  }
  @media (max-width: $screen-xs-max) {
    max-width: 25%;
  }
}

.mobile-menu {
  position: absolute;
  padding-top: 16px;
  z-index: 100;
  width: 100vw;
  background-color: $ci-white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  .one {
    background-color: $light-red;
    border-top-right-radius: 20px;
  }

  .three {
    background-color: $light-red;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .mobile {
    padding: 10px 0;
  }
}

.profile-con {
  max-width: 25%;
}
</style>
