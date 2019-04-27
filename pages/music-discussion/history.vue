<template>
  <div v-if="$store.state.newauth">
    <div class="header-bg">
      <div class="header">
        <h1>
          music
          <br>
          <span>discussion</span>
        </h1>
      </div>
    </div>
    <div class="artist-header-bg following">
      <div class="artist-header-con">
        <div class="artist-header no-img">
          <h4>following</h4>
        </div>
      </div>
    </div>
    <div class="artist-bg">
      <div class="artist-con">
        <div class="artist-row" :key="isFollow">
          <div class="artist-col" v-for="(item, i) in followingList" :key="i">
            <img @click="changePage(i)" v-bind:src="item.cover">
            <p @click="changePage(i)" class="name">{{item.name}}</p>
            <button
              @click="follow(i)"
              v-if="!$store.state.newauth || !$store.state.newauth.followingArtist || $store.state.newauth.followingArtist[i] != 1"
              class="mini-out follow"
            >
              <div class="mini-in">
                <p>follow</p>
              </div>
            </button>
            <button @click="unfollow(i)" v-else class="mini-out">
              <div class="mini-in">
                <p>following</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="artist-header-bg">
      <div class="artist-header-con">
        <div class="amp-con">
          <img
            v-if="$store.state.windowWidth > 576"
            src="~/assets/images/decoration/md/amp-from-left-desktop.svg"
            alt
          >
          <img v-else src="~/assets/images/decoration/md/amp-from-left-mobile.svg" alt>
        </div>
        <div class="artist-header">
          <h4>voted</h4>
        </div>
      </div>
    </div>
    <div class="data-bg">
      <div class="data-con">
        <div class="discussion">
          <div v-for="(item,id) in votedList" :key="id">
            <MDTab
              :song="item.song"
              :artistCover="item.cover"
              :artistName="item.name"
              :songId="item.songId"
              :artistId="item.artistId"
              :seeResult="true"
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
  data: () => ({
    followingList: {},
    isFollow: 0,
    votedList: []
  }),
  mounted() {
    // if (!this.$store.state.newauth) {
    //   return this.$router.push({
    //     path: "/"
    //   });
    // }
    this.getFollowingList();
    this.getVotedList();
  },
  watch: {
    "$store.state.newauth"() {
      this.getFollowingList();
      this.getVotedList();
    }
  },
  methods: {
    getFollowingList() {
      let followingList = [];
      if (
        !this.$store.state.newauth ||
        !this.$store.state.newauth["followingArtist"]
      ) {
        return [];
      }
      for (let key in this.$store.state.newauth.followingArtist) {
        if (this.$store.state.newauth.followingArtist[key] == 1)
          followingList[key] = this.$store.state.musicDiscussion[key];
      }
      this.followingList = followingList;
    },
    getVotedList() {
      let votedList = [];
      if (
        !this.$store.state.newauth ||
        !this.$store.state.newauth["musicDiscussion"]
      ) {
        return [];
        }
        for(let key in this.$store.state.newauth.musicDiscussion) {
          let artist = this.$store.state.musicDiscussion[key];
          for(let key2 in this.$store.state.newauth.musicDiscussion[key]) {
            let song = artist.discussion[key2];
            votedList.push({
              songId: Number(key2),
              artistId: key,
              song: song,
              name: artist.name,
              cover: artist.cover
            })
          }
        }
        this.votedList = votedList;
    },
    async follow(i) {
      if (!this.$store.state.newauth) {
        return this.$router.push({
          path: "/login",
          query: {
            redirect: "/music-discussion"
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
    },
    changePage(i) {
      return this.$router.push({
        path: `/music-discussion/${i}`
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
    $md-color 50%,
    $md-color 100%
  );
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
      margin-left: -20px;

      span {
        font-size: 48px;
        padding-left: 120px;
      }
    }
  }
}

.artist-header-bg {
  background-color: $ci-white;
  &.following {
    background: linear-gradient(
    to right,
    $ci-white 0%,
    $ci-white 50%,
    $home-blue 50%,
    $home-blue 100%
  );
  }
  .artist-header-con {
    padding: 20px 0;
    background-color: $md-color;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .amp-con {
      align-self: flex-end;
      display: flex;
      flex-flow: column;
      align-items: center;
      img {
        align-self: flex-start;
        margin-left: -2px;
      }
    }

    .artist-header {
      margin-top: -40px;
      &.no-img {
        margin: 0px;
      }
      margin-bottom: 10px;
      h4 {
        text-align: center;
        font-family: "Chonburi";
        color: $line-red;
        font-size: 40px;
      }
    }
  }
}

.artist-bg {
  background-color: $md-color;
  .artist-con {
    background-color: $ci-white;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    padding: 20px 0;
    .artist-row {
      padding: 0 50px;
      @media (max-width: $screen-xs-max) {
        padding: 0 20px;
      }
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;

      .artist-col {
        width: 25%;
        @media (max-width: $screen-xs-max) {
          width: 50%;
        }
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 10px 0;

        .name {
          font-family: "Sukhumvit-SemiBold";
          color: $font-black-blue-4;
          cursor: pointer;
        }

        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
}

.amp-con {
  position: relative;
  width: 100vw;

  img {
    width: 90%;
  }
}

.mini-out {
  cursor: pointer;
  padding: 3px;
  width: 100px;
  height: 30px;
  background-color: $dark-blue;
  border-radius: 40px;
  border: none;
  transition-duration: 0.3s;
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

.dummy-bg {
  background-color: $ci-white;

  .dummy-con {
    background-color: $md-color;
    padding: 30px 0;
    border-top-right-radius: 40px;
  }
}
</style>
