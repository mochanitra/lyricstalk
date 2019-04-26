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
    <div class="vote-bg">
      <div class="vote-con">
        <div class="vote-col">
          <div class="question-con">
            <div class="question">
              <p>{{song.question}}</p>
            </div>
            <img src="~/assets/images/decoration/md/chat-white.svg" alt>
          </div>
          <div class="vote-row">
            <div class="choice-con one">
              <div class="choice">
                <p>{{song.answer_1}}</p>
              </div>
              <p class="vote">78%</p>
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
            <div class="choice-con two">
              <div class="choice">
                <p>{{song.answer_2}}</p>
              </div>
              <p class="vote">22%</p>
            </div>
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
export default {
  data: () => ({
    isFollow: 0,
    progress: 0,
    timer: null
  }),
  async asyncData({ params, store }) {
    // Get quizSlug
    const artist = params.artist;
    const songIndex = params.song;
    const artistInfo = store.state.musicDiscussion[artist];
    const song = artistInfo.discussion[songIndex];
    return {
      artist,
      artistInfo,
      song
    };
  },
  methods: {
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
    play(id) {
      let timer;
      const x = document.getElementById(id);
      x.addEventListener("playing", _event => {
        let duration = _event.target.duration;
        console.log(duration, x.currentTime);
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
              border-top-left-radius: 0;
            }

            .vote {
              color: $home-blue;
            }
          }

          &.two {
            .choice {
              border-bottom-right-radius: 0;
              background-color: $line-red;
            }

            .vote {
              color: $line-red;
            }
          }
          .choice {
            border-radius: 40px;
            padding: 15px;
            height: 200px;
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
