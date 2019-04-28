<template>
  <div :key="$route.params.artist">
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
    <div class="vote-bg" :key="$route.params.song">
      <div class="vote-con">
        <div class="vote-col">
          <div class="question-con">
            <div class="question">
              <p>{{song.question}}</p>
            </div>
            <img src="~/assets/images/decoration/md/chat-white.svg" alt>
          </div>
          <div class="vote-row">
            <div class="choice-con one" :key="vote">
              <div
                @click="voteChoice(1)"
                :class="{'voted': isVoted == 1 || vote == 1}"
                class="choice one"
              >
                <p>{{song.answer_1}}</p>
              </div>
              <p
                v-if="(isVoted != 0 || vote != 0) && $store.state.musicDiscussion[artist].discussion[songIndex].vote_1"
                class="vote haveResult"
              >{{divide($store.state.musicDiscussion[artist].discussion[songIndex].vote_1,$store.state.musicDiscussion[artist].discussion[songIndex].voters)}}%</p>
              <p v-else-if="(isVoted != 0 || vote != 0)" class="vote">0%</p>
            </div>
            <div class="song-con">
              <div class="pic-con">
                <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                <div class="pic">
                  <img v-bind:src="song.cover" alt>
                </div>
              </div>
              <p class="song">{{song.song}} - {{artistInfo.name}}</p>
              <audio :id="song.song" :src="song.mp3"></audio>
              <div class="song-play">
                <img @click="play(song.song)" src="~/assets/images/decoration/md/play-btn.svg" alt>
                <div class="progress-tab">
                  <div :style="{ width: progress + '%' }" class="progress"></div>
                </div>
              </div>
            </div>
            <div class="choice-con two" :key="vote">
              <div
                @click="voteChoice(2)"
                class="choice two"
                :class="{'voted': isVoted == 2 || vote == 2}"
              >
                <p>{{song.answer_2}}</p>
              </div>
              <p
                v-if="(isVoted != 0 || vote != 0) && $store.state.musicDiscussion[artist].discussion[songIndex].vote_2"
                class="vote haveResult"
              >{{divide($store.state.musicDiscussion[artist].discussion[songIndex].vote_2,$store.state.musicDiscussion[artist].discussion[songIndex].voters)}}%</p>
              <p v-else-if="(isVoted != 0 || vote != 0)" class="vote">0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="share-bg">
      <div class="share-con">
        <div class="share-btn-con">
          <p class="share-sub">- Share to -</p>
          <social-sharing
            v-bind:url="copymessage"
            title="มาเริ่มต้นบทสนทนากันเถอะ"
            hashtags="lyricstalk"
            inline-template
          >
            <div class="share-btn-row">
              <network network="facebook">
                <div class="share-btn fb">
                  <img src="~/assets/images/brand/fb-white.svg" alt>
                </div>
              </network>
              <network network="twitter">
                <div class="share-btn twit">
                  <img src="~/assets/images/brand/twitter.svg" alt>
                </div>
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
    </div>
    <div v-if="(isVoted != 0 || vote != 0)" class="insight-bg">
      <div class="insight-con">
        <h4>insight</h4>
        <div class="voters">
          <img src="~/assets/images/decoration/friend.svg" alt>
          <p
            class="player"
          >{{Object.keys($store.state.musicDiscussion[artist].discussion[songIndex].voters).length}}</p>
        </div>
      </div>
    </div>
    <div v-if="(isVoted != 0 || vote != 0)" class="insight-data-bg">
      <div class="insight-data-con">
        <p class="fri">friends</p>
        <div class="fri-data-row">
          <div class="fri-list one">
            <p>{{friList_1.length}} friends</p>
            <div class="fri-pic-con">
              <div v-for="(item,i) in friList_1" :key="i">
                <img v-show="i < 5" :src="item.picture">
              </div>
              <p v-if="friList_1.length > 5">+ {{friList_1.length - 5}}</p>
            </div>
          </div>
          <div class="fri-list two">
            <p>{{friList_2.length}} friends</p>
            <div class="fri-pic-con">
              <div v-for="(item,i) in friList_2" :key="i">
                <img v-show="i < 5" :src="item.picture">
              </div>
              <p v-if="friList_2.length > 5">+ {{friList_2.length - 5}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="(isVoted != 0 || vote != 0)" class="discussion-bg">
      <div class="discussion-con">
        <h4>discussion</h4>
        <div class="discuss-col">
          <div
            v-if="$store.state.newauth && !$store.state.newauth.musicDiscussion[artist][songIndex].discussion"
            class="discussion-row"
          >
            <img :src="$store.state.newauth.picture.data.url">
            <div class="name-dis">
              <p class="name">{{$store.state.newauth.name}}</p>
              <div class="dis">
                <img src="~/assets/images/decoration/md/chat-white.svg" alt>
                <input :disabled="discussProcess" @keyup.enter="enterDiscuss()" v-model="opinion">
              </div>
            </div>
          </div>
          <div class="discussion-row" v-for="(item,i) in discussion" :key="i">
            <img :src="item.picture">
            <div class="name-dis">
              <p class="name">{{item.name}}</p>
              <div class="dis">
                <img src="~/assets/images/decoration/md/chat-white.svg" alt>
                <p :class="{'one': item.vote == 1,'two': item.vote == 2}">{{item.discussion}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="artist-header-bg">
      <div class="artist-header-con">
        <div class="amp-con">
          <img
            v-if="$store.state.windowWidth > 576"
            src="~/assets/images/decoration/md/amp-from-right-desktop.svg"
            alt
          >
          <img v-else src="~/assets/images/decoration/md/amp-from-right-mobile.svg" alt>
        </div>
        <div class="artist-header">
          <h4>
            more topics of
            <br>
            {{artistInfo.name}}
          </h4>
        </div>
      </div>
    </div>
    <div class="data-bg">
      <div class="data-con">
        <div class="discussion">
          <div v-for="(item,id) in artistInfo.discussion" :key="id">
            <MDTab
              v-if="id != songIndex"
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
  data: () => ({
    isFollow: 0,
    progress: 0,
    timer: null,
    vote: 0,
    voteProcess: false,
    discussProcess: false,
    friList_1: [],
    friList_2: [],
    discussion: [],
    opinion: ""
  }),

  watch: {
    "$store.state.newauth"() {
      if (this.$store.state.newauth.musicDiscussion) {
        if (
          this.$store.state.newauth.musicDiscussion[this.$route.params.artist]
        ) {
          if (
            this.$store.state.newauth.musicDiscussion[
              this.$route.params.artist
            ][this.$route.params.song]
          ) {
            this.vote = this.$store.state.newauth.musicDiscussion[
              this.$route.params.artist
            ][this.$route.params.song].vote;
          }
        }
      }
      this.getFriendList();
      this.getDiscussion();
    }
  },
  async asyncData({ params, store }) {
    // Get quizSlug
    const artist = params.artist;
    const songIndex = params.song;
    const artistInfo = store.state.musicDiscussion[artist];
    const song = artistInfo.discussion[songIndex];
    const copymessage = `https://lyricstalk.co/music-discussion/${artist}/${songIndex}`;
    let isVoted = 0;
    if (store.state.newauth && store.state.newauth.musicDiscussion) {
      let musicDis = store.state.newauth.musicDiscussion;
      if (musicDis[artist] && musicDis[artist][songIndex]) {
        isVoted = musicDis[artist][songIndex].vote;
      }
    }
    return {
      artist,
      artistInfo,
      songIndex,
      song,
      copymessage,
      isVoted
    };
  },
  mounted() {
    this.getFriendList();
    this.getDiscussion();
  },
  head() {
    return {
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: `มาโหวตคำตอบกันเถอะ`
        },
        {
          hid: "og:image",
          property: "og:image",
          content: require("assets/images/background/music-discussion.png")
        }
      ]
    };
  },
  methods: {
    async enterDiscuss() {
      if (this.discussProcess) return;
      this.discussProcess = true;
      let database = firebase.database();
      let updates = {};
      updates[
        "/user/" +
          this.$store.state.newauth.id +
          "/musicDiscussion/" +
          this.$route.params.artist +
          "/" +
          this.$route.params.song +
          "/discussion"
      ] = this.opinion;
      updates[
        "/music-discussion/" +
          this.$route.params.artist +
          "/discussion/" +
          this.$route.params.song +
          "/" +
          `vote_${this.vote}/` +
          this.$store.state.newauth.id +
          "/discussion"
      ] = this.opinion;
      updates[
        "/music-discussion/" +
          this.$route.params.artist +
          "/discussion/" +
          this.$route.params.song +
          "/" +
          `voters/` +
          this.$store.state.newauth.id +
          "/discussion"
      ] = this.opinion;
      await firebase
        .database()
        .ref()
        .update(updates);
      const res = await this.$axios.get(
        "https://lyricstalk-1fb09.firebaseio.com/music-discussion.json"
      );
      await this.$store.commit("SET_MUSIC_DISCUSSION", res.data);
      const res2 = await this.$axios.get(
        `https://lyricstalk-1fb09.firebaseio.com/user/${
          this.$store.state.newauth.id
        }.json`
      );
      await this.$store.commit("SET_NEWAUTH", res2.data);
      await this.getDiscussion();
    },
    async getDiscussion() {
      let discussion = [];
      let song = this.$store.state.musicDiscussion[this.$route.params.artist]
        .discussion[this.$route.params.song];
      if (!this.$store.state.newauth || !song.voters) {
        return [];
      }
      const res = await this.$axios.get(
        "https://lyricstalk-1fb09.firebaseio.com/user.json"
      );
      for (let key in song.voters) {
        if (song.voters[key].discussion) {
          let data = res.data[key];
          discussion.push({
            name: data.name,
            picture: data.picture.data.url,
            vote: song.voters[key].vote,
            discussion: song.voters[key].discussion
          });
        }
      }
      // for (let i = 0; i < this.$store.state.newauth.friends.data.length; i++) {
      //   let friId = this.$store.state.newauth.friends.data[i].id;
      //   if (song.voters[friId] && song.voters[friId].discussion) {
      //     let friData = res.data[friId];
      //     discussion.push({
      //       name: friData.name,
      //       picture: friData.picture.data.url,
      //       vote: song.voters[friId].vote,
      //       discussion: song.voters[friId].discussion
      //     });
      //   }
      // }
      this.discussion = discussion;
    },
    async getFriendList() {
      let friList_1 = [];
      let friList_2 = [];
      let song = this.$store.state.musicDiscussion[this.$route.params.artist]
        .discussion[this.$route.params.song];
      if (!this.$store.state.newauth || !song.voters) {
        return [];
      }
      const res = await this.$axios.get(
        "https://lyricstalk-1fb09.firebaseio.com/user.json"
      );
      for (let i = 0; i < this.$store.state.newauth.friends.data.length; i++) {
        let friId = this.$store.state.newauth.friends.data[i].id;
        if (song.voters[friId]) {
          let friData = res.data[friId];
          if (song.voters[friId].vote == 1) {
            friList_1.push({
              name: friData.name,
              picture: friData.picture.data.url
            });
          } else if (song.voters[friId].vote == 2) {
            friList_2.push({
              name: friData.name,
              picture: friData.picture.data.url
            });
          }
        }
      }
      this.friList_1 = friList_1;
      this.friList_2 = friList_2;
    },
    async follow(i) {
      if (!this.$store.state.newauth) {
        return this.$router.push({
          path: "/login",
          query: {
            redirect: `/music-discussion/${this.$route.params.artist}/${
              this.$route.params.song
            }`
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
    play(id) {
      let timer;
      const x = document.getElementById(id);
      x.addEventListener("playing", _event => {
        let duration = _event.target.duration;
        this.timer = setInterval(() => {
          let increment = 10 / duration;
          this.progress = Math.min(increment * x.currentTime * 10, 100);
        }, 100);
      });
      if (x.paused) {
        x.play();
      } else {
        x.pause();
        clearInterval(this.timer);
        // x.load();
      }
    },
    async voteChoice(choice) {
      if (!this.$store.state.newauth) {
        return this.$router.push({
          path: "/login",
          query: {
            redirect: `/music-discussion/${this.$route.params.artist}/${
              this.$route.params.song
            }`
          }
        });
      }
      if (this.isVoted != 0 || this.vote != 0 || this.voteProcess) {
        return;
      }
      this.voteProcess = true;
      let database = firebase.database();
      let updates = {};
      updates[
        "/user/" +
          this.$store.state.newauth.id +
          "/musicDiscussion/" +
          this.$route.params.artist +
          "/" +
          this.$route.params.song +
          "/vote"
      ] = choice;
      updates[
        "/music-discussion/" +
          this.$route.params.artist +
          "/discussion/" +
          this.$route.params.song +
          "/" +
          `vote_${choice}/` +
          this.$store.state.newauth.id +
          "/vote"
      ] = choice;
      updates[
        "/music-discussion/" +
          this.$route.params.artist +
          "/discussion/" +
          this.$route.params.song +
          "/" +
          `voters/` +
          this.$store.state.newauth.id +
          "/vote"
      ] = choice;
      await firebase
        .database()
        .ref()
        .update(updates);
      const res = await this.$axios.get(
        "https://lyricstalk-1fb09.firebaseio.com/music-discussion.json"
      );
      await this.$store.commit("SET_MUSIC_DISCUSSION", res.data);
      const res2 = await this.$axios.get(
        `https://lyricstalk-1fb09.firebaseio.com/user/${
          this.$store.state.newauth.id
        }.json`
      );
      await this.$store.commit("SET_NEWAUTH", res2.data);
      // await this.$store.commit(
      //   "UPDATE_MUSIC_DISCUSSION",
      //   choice,
      //   this.$store.state.newauth.id,
      //   this.$route.params.artist,
      //   this.$route.params.song
      // );
      this.vote = choice;
    },
    divide(a, b) {
      let a_size = 0;
      let b_size = 0;
      let key;
      for (key in a) {
        if (a.hasOwnProperty(key)) a_size++;
      }
      for (key in b) {
        if (b.hasOwnProperty(key)) b_size++;
      }
      return Math.floor((a_size * 100) / b_size);
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

.vote-bg {
  background-color: $ci-white;
  .vote-con {
    background-color: $md-color;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    padding: 20px 0;

    .vote-col {
      display: flex;
      flex-flow: column;
      align-items: center;

      .question-con {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 300px;
        .question {
          background-color: $ci-white;
          padding: 5px 10px;
          width: 100%;
          border-radius: 20px;

          p {
            text-align: center;
            font-family: "Sukhumvit-SemiBold";
            font-size: 16px;
          }
        }
        img {
          height: 10px;
          margin-top: -1px;
        }
      }

      .vote-row {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        padding: 0 20px;
        margin-top: 20px;
        .choice-con {
          display: flex;
          flex-flow: column;
          align-items: center;
          flex: 1;
          padding: 0 10px;
          @media (max-width: $screen-sm-max) {
            flex-basis: 50%;
            &.one {
              order: 2;
            }

            &.two {
              order: 3;
            }
          }
          &.one {
            .choice {
              background-color: $home-blue;
              border-bottom-right-radius: 0;
              &.voted {
                border: 5px solid #3a5658;
              }
            }

            .vote {
              color: $home-blue;
            }
          }

          &.two {
            .choice {
              border-top-left-radius: 0;
              background-color: $line-red;
              &.voted {
                border: 5px solid #af6362;
              }
            }

            .vote {
              color: $line-red;
            }
          }
          .choice {
            border-radius: 40px;
            padding: 15px;
            height: 200px;
            cursor: pointer;
            @media (max-width: $screen-sm-max) {
              height: 160px;
            }
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            p {
              font-family: "Sukhumvit-SemiBold";
              color: $ci-white;
              text-align: center;
              @media (max-width: $screen-sm-max) {
                font-size: 16px;
              }
            }
          }

          .vote {
            font-family: "Chonburi";
            font-size: 28px;
          }
        }

        .song-con {
          flex: 2;
          display: flex;
          flex-flow: column;
          align-items: center;
          @media (max-width: $screen-sm-max) {
            flex-basis: 100%;
            order: 1;
            margin-bottom: 20px;
          }

          .song {
            margin-top: 10px !important;
            font-family: "Sukhumvit-Bold";
            color: $dark-blue;
          }

          .song-play {
            display: flex;
            flex-flow: row;
            align-items: center;
            position: relative;
            width: 60%;
            margin: 8px 0;

            img {
              position: absolute;
              height: 20px;
              left: 0;
              cursor: pointer;
            }

            .progress-tab {
              width: 100%;
              height: 8px;
              padding-left: 3px;
              border-radius: 10px;
              background-color: $ci-white;

              .progress {
                background-color: $line-red;
                height: 8px;
                padding-left: 3px;
                border-radius: 10px;
              }
            }
          }
        }
      }
    }
  }
}

.share-bg {
  background-color: $md-color;
  .share-con {
    background-color: $ci-white;
    padding: 20px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .share-sub {
      font-family: "Sukhumvit-Bold";
      color: $dark-blue;
      font-size: 16px;
      text-align: center;
    }

    .share-btn-row {
      display: flex;
      flex-flow: row;
      justify-content: center;
      margin-top: 5px;

      .share-btn {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 50%;
        margin: 0 5px;

        &.fb {
          background-color: $fb;
        }
        &.twit {
          background-color: $twitter;
        }
        img {
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  .copy-con {
    display: flex;
    flex-flow: row;
    align-items: center;
    position: relative;

    .copy-link-con {
      padding-left: 105px;
      padding-right: 15px;
      background-color: white;
      border-radius: 30px;
      border: 1px solid $light-red;
      @media (max-width: $screen-xs-max) {
        padding-left: 65px;
      }
    }

    .copy-link {
      font-family: "Sukhumvit-SemiBold";
      font-size: 14px;
      color: $font-black-blue-3;
      @media (max-width: $screen-xs-max) {
        font-size: 9px;
        padding: 2px 0;
      }
    }
  }
}

.artist-header-bg {
  background-color: $ci-white;
  .artist-header-con {
    padding: 20px 0;
    background-color: $md-color;
    border-bottom-left-radius: 40px;
    // border-top-right-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .amp-con {
      align-self: flex-end;
      display: flex;
      flex-flow: column;
      align-items: center;
      img {
        align-self: flex-end;
        margin-right: -2px;
      }
    }

    .artist-header {
      margin-top: -40px;
      margin-bottom: 10px;
      h4 {
        text-align: center;
        font-family: "Chonburi";
        color: $line-red;
        font-size: 28px;
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

.insight-bg {
  // background-color: $ci-white;
  background: linear-gradient(
    to left,
    $ci-white 0%,
    $ci-white 50%,
    $home-blue 50%,
    $home-blue 100%
  );
  .insight-con {
    padding: 20px 0;
    background-color: $md-color;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    position: relative;
    h4 {
      text-align: center;
      font-family: "Chonburi";
      color: $line-red;
      font-size: 28px;
    }

    .voters {
      position: absolute;
      margin: 5px 0;
      background-color: $dark-blue;
      padding: 5px 10px;
      right: 30%;
      @media (max-width: $screen-xs-max) {
        right: 20px;
      }
      // width: 45%;
      justify-content: center;
      border-radius: 20px;
      display: flex;
      flex-flow: row;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        margin: 0 5px;
      }

      p {
        color: white;
        font-family: "Sukhumvit-Bold";
      }
    }
  }
}

.insight-data-bg {
  background-color: $md-color;
  .insight-data-con {
    background: linear-gradient(
      to left,
      $line-red 0%,
      $line-red 50%,
      $home-blue 50%,
      $home-blue 100%
    );
    padding: 20px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .fri-data-row {
      display: flex;
      flex-flow: row;
      align-items: center;
      margin-top: 10px;
      width: 100%;

      .fri-list {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 50%;
        padding: 0 10px;

        > p {
          font-family: "Sukhumvit-Bold";
          color: $ci-white;
        }

        .fri-pic-con {
          margin-top: 10px;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          @media (max-width: $screen-sm-max) {
          }
          p {
            font-family: "Sukhumvit-Bold";
            color: $home-blue;
            background-color: $ci-white;
            text-align: center;
            padding: 2px 5px;
            border-radius: 20px;
            flex-basis: 16.66%;
            @media (max-width: $screen-sm-max) {
              flex-basis: 50%;
            }
          }
        }

        img {
          border-radius: 50%;
          flex-basis: 16.66%;
          @media (max-width: $screen-sm-max) {
            flex-basis: 50%;
          }
        }
      }
    }

    .fri {
      font-family: "Chonburi";
      color: $ci-white;
      font-size: 20px;
    }
  }
}

.discussion-bg {
  background: linear-gradient(
    to right,
    $md-color 0%,
    $md-color 50%,
    $line-red 50%,
    $line-red 100%
  );
  .discussion-con {
    background-color: $md-color;
    padding: 20px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;

    h4 {
      text-align: center;
      font-family: "Chonburi";
      color: $line-red;
      font-size: 28px;
      margin-bottom: 20px;
    }

    .discuss-col {
      display: flex;
      flex-flow: column;
      align-items: center;

      .discussion-row {
        display: flex;
        flex-flow: row;
        align-items: center;
        width: 100%;
        margin: 5px 0;

        > img {
          border-radius: 50%;
          flex: 1;
        }

        .name-dis {
          display: flex;
          flex-flow: column;
          align-items: flex-start;
          flex: 8;
          padding: 0 10px;

          .name {
            font-family: "Chonburi";
            color: $font-black-blue-4;
            font-size: 16px;
          }

          .dis {
            position: relative;
            width: 100%;
            margin-top: 5px;

            img {
              position: absolute;
              bottom: 100%;
              transform: rotate(180deg);
              height: 10px;
              left: 60%;
            }
            p {
              width: 100%;
              background-color: $ci-white;
              padding: 2px 10px;
              border-radius: 20px;
              font-family: "Sukhumvit-SemiBold";
              font-size: 14px;

              &.one {
                color: $dark-blue;
              }

              &.two {
                color: $line-red;
              }
            }

            input {
              width: 100%;
              height: 28px;
              background-color: $ci-white;
              padding: 0 10px;
              border-radius: 20px;
              font-family: "Sukhumvit-SemiBold";
              font-size: 14px;
              border: none;
              color: $font-black-blue;
            }
          }
        }
      }
    }
  }
}

.pic-con {
  // margin-top: 20px;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 200px;
  // margin-left: -97px;
  @media (max-width: $screen-xs-max) {
    width: auto;
    margin-bottom: 0px;
    height: 150px;
    // margin-left: -36px;
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
