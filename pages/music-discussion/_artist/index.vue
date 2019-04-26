<template>
  <div>
    <div class="header-bg">
      <div class="header">
        <h1>
          music
          <br>
          <span>discussion</span>
        </h1>
      </div>
    </div>
    <div class="artist-bg">
      <div class="artist-con">
        <div class="artist-row" :key="isFollow">
          <img v-bind:src="artistInfo.cover">
          <div class="artist-in">
            <p class="name">{{artistInfo.name}}</p>
            <button
              @click="follow(artist)"
              v-if="!$store.state.newauth || !$store.state.newauth.followingArtist || $store.state.newauth.followingArtist[artist] != 1"
              class="mini-out follow"
            >
              <div class="mini-in">
                <p>follow</p>
              </div>
            </button>
            <button @click="unfollow(artist)" v-else class="mini-out">
              <div class="mini-in">
                <p>following</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="topic-bg">
      <div class="topic-con">
        <p>topics of {{artistInfo.name}}</p>
      </div>
    </div>
    <div class="data-bg">
      <div class="data-con">
        <div class="discussion">
          <div v-for="(item,id) in artistInfo.discussion" :key="id">
            <MDTab
              :song="item"
              :artistCover="artistInfo.cover"
              :artistName="artistInfo.name"
              :songId="id"
              :artistId="artist"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="dummy-bg">
      <div class="dummy-con"></div>
    </div>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import MDTab from "~/components/MDTab";
export default {
  components: {
    MDTab
  },
  async asyncData({ params, store }) {
    // Get quizSlug
    const artist = params.artist;
    const artistInfo = store.state.musicDiscussion[artist];
    return {
      artist,
      artistInfo
    };
  },
  data: () => ({
    isFollow: 0
  }),
  methods: {
    async follow(i) {
      if (!this.$store.state.newauth) {
        return this.$router.push({
          path: "/login",
          query: {
            redirect: `/music-discussion/${this.$route.params.artist}`
          }
        });
      }
      this.isFollow = 1;
      this.$store.commit("SET_FOLLOWING_ARTIST", i);
      let database = firebase.database();
      let updates = {};
      updates[
        "/user/" + this.$store.state.newauth.id + "/followingArtist/" + i
      ] = 1;
      await firebase
        .database()
        .ref()
        .update(updates);
      this.isFollow = 0;
      return;
    },
    async unfollow(i) {
      if (!this.$store.state.newauth) {
        return this.$router.push({
          path: "/login",
          query: {
            redirect: "/music-discussion"
          }
        });
      }
      this.isFollow = 1;
      this.$store.commit("UNFOLLOW_ARTIST", i);
      let database = firebase.database();
      let updates = {};
      updates[
        "/user/" + this.$store.state.newauth.id + "/followingArtist/" + i
      ] = 0;
      await firebase
        .database()
        .ref()
        .update(updates);
      this.isFollow = 0;
      return;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.header-bg {
  width: 100%;
  background-color: $ci-white;
  .header {
    background-color: $home-blue;
    padding: 20px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    h1 {
      font-family: "RunWild";
      text-align: center;
      color: white;
      font-size: 64px;
      line-height: 0.6;
      margin-left: -40px;

      span {
        font-size: 48px;
        padding-left: 120px;
      }
    }
  }
}

.artist-bg {
  background: linear-gradient(
    to right,
    $md-color 0%,
    $md-color 50%,
    $home-blue 50%,
    $home-blue 100%
  );
  .artist-con {
    background: $ci-white;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px 0;
    .artist-row {
      display: flex;
      flex-flow: row;
      align-items: center;

      .artist-in {
        display: flex;
        flex-flow: row;
        align-items: center;
        @media (max-width: $screen-xs-max) {
          flex-flow: column;
        }
      }

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0 12px;
      }

      .name {
        font-family: "Sukhumvit-SemiBold";
        color: $font-black-blue-4;
        margin: 0 12px;
        font-size: 24px;
      }
    }
  }
}

.topic-bg {
  background-color: $ci-white;

  .topic-con {
    background-color: $md-color;
    padding: 20px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;

    p {
      text-align: center;
      font-family: "Chonburi";
      color: $line-red;
      font-size: 28px;
    }
  }
}

.data-bg {
  background-color: $md-color;

  .data-con {
    background-color: $ci-white;
    padding: 20px 0;
    border-top-right-radius: 40px;

    .discussion {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }
}

.mini-out {
  cursor: pointer;
  padding: 3px;
  width: 110px;
  height: 30px;
  background-color: $dark-blue;
  border-radius: 40px;
  border: none;
  transition-duration: 0.3s;
  margin: 0 12px;
  &.follow {
    opacity: 0.5;
  }
  &:hover {
    background-color: $line-red;
    opacity: 1;
    transition-duration: 0.3s;

    .mini-in {
      background-color: $line-red;
      opacity: 1;
      transition-duration: 0.3s;
    }
  }
  .mini-in {
    border: 1px solid white;
    background-color: $dark-blue;
    height: 24px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.3s;
    p {
      font-family: "Chonburi";
      color: white;
      font-size: 14px;
      line-height: 1;
    }
  }
}

.dummy-bg {
  background-color: $ci-white;

  .dummy-con {
    background-color: $md-color;
    padding: 30px 0;
    border-top-right-radius: 40px;
  }
}
</style>
