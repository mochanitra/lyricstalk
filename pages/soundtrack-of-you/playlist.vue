<template>
  <div class="playlist-page">
    <div class="header-bg">
      <div class="header">
        <h1>soundtrack of you</h1>
      </div>
    </div>
    <div class="playlist-bg">
      <div class="playlist-con">
        <div class="share-con">
          <p class="name">{{$store.state.newauth.name}}</p>
          <div class="pic-con">
            <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
            <div class="pic">
              <img v-bind:src="cover" alt>
            </div>
          </div>
          <Uploader @url="onReceiveURL"/>
          <button @click="submit()" class="btn-out">
            <div class="btn-in">
              <p>next</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Uploader from "~/components/forms/Uploader";
import * as firebase from "firebase/app";
export default {
  components: {
    Uploader
  },
  data: () => ({
    cover: require("assets/images/picplaylist.png"),
    name: ""
  }),
  //   mounted() {
  //     this.cover = this.$store.state.newauth.picture.data.url;
  //   },
  methods: {
    onReceiveURL(url) {
      console.log(url);
      this.cover = url;
    },
    async submit() {
      const name = this.$store.state.newauth.name.replace(/\s/g, "");
      const slug = name + "-" + ~~(Math.random() * 1000);
      const owner = {
        name: this.$store.state.newauth.name,
        id: this.$store.state.newauth.id,
        picture: this.$store.state.newauth.picture
      };
      this.$store.commit("SET_MYQUIZ_PROFILE", {
        name: this.$store.state.newauth.name,
        cover: this.cover,
        slug,
        owner
      });
      let database = firebase.database();
      let newQuizKey = database
        .ref()
        .child("quizes")
        .push().key;
      let updates = {};
      updates["/quizes/" + newQuizKey] = this.$store.state.myQuiz;
      updates[
        "/user/" + this.$store.state.newauth.id + "/quizesList/" + newQuizKey
      ] = this.$store.state.myQuiz;
      this.$store.commit(
        "ADD_NEWAUTH_SOY",
        this.$store.state.myQuiz,
        newQuizKey
      );
      let dbupdate = firebase
        .database()
        .ref()
        .update(updates);
      dbupdate.then(() => {
        // window.alert(`Share URL: https://lyricstalk.co/quiz/${slug}`);
        return this.$router.replace("/soundtrack-of-you/share");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.header-bg {
  width: 100%;
  background: linear-gradient(
    to left,
    $ci-white 0%,
    $ci-white 50%,
    $light-red 50%,
    $light-red 100%
  );
  .header {
    background-color: $dark-red;
    padding: 20px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    h1 {
      font-family: "RunWild";
      text-align: center;
      color: white;
      font-size: 48px;

      span {
        padding-left: 120px;
      }
    }
  }
}

.playlist-bg {
  background-color: $dark-red;

  .playlist-con {
    min-height: calc(100vh - 268px);
    background-color: $light-red;
    border-top-right-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
}

.share-con {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 30px 0;
  .name {
    font-family: "Chonburi";
    font-size: 28px;
    text-align: center;
  }
}

.pic-con {
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 200px;
  margin-left: -97px;
  @media (max-width: $screen-xs-max) {
    width: auto;
    margin-bottom: 20px;
    height: 150px;
    margin-left: -72px;
  }

  .cd-left {
    height: 180px;
    width: 97px;
    margin-left: 6px;
    z-index: 0;
    @media (max-width: $screen-xs-max) {
      height: 127px;
      width: 72px;
    }
  }

  .pic {
    height: 200px;
    width: 200px;
    // background-color: $line-red;
    border-radius: 20px;
    margin-left: -6px;
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;
    @media (max-width: $screen-xs-max) {
      height: 150px;
      width: 150px;
      z-index: 1;
    }

    img {
      height: 100%;
    }
  }
}

.btn-out {
  margin-top: 20px;
  cursor: pointer;
  padding: 6px;
  width: 240px;
  height: 60px;
  background-color: $dark-blue;
  border-radius: 40px;
  border: none;
  transition-duration: 0.3s;
  &:hover {
    background-color: $line-red;
    transition-duration: 0.3s;

    .btn-in {
      background-color: $line-red;
      transition-duration: 0.3s;
    }
  }
  .btn-in {
    border: 2px solid white;
    background-color: $dark-blue;
    height: 48px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.3s;
    p {
      font-family: "Chonburi";
      color: white;
      font-size: 28px;
      line-height: 1;
    }
  }
}
</style>
