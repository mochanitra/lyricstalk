<template>
  <div class="md-tab">
    <div v-if="$store.state.windowWidth < 768" class="question-col">
      <div class="question">
        <p>{{song.question}}</p>
      </div>
      <img src="~/assets/images/decoration/md/chat-blue.svg" alt>
    </div>
    <div class="tab-row">
      <div class="artist-col">
        <img v-bind:src="artistCover">
        <p class="name">{{artistName}}</p>
      </div>
      <div class="vote-song-row">
        <div class="song-col">
          <div v-if="$store.state.windowWidth >= 768" class="question-con">
            <div class="question">
              <p>{{song.question}}</p>
            </div>
            <img src="~/assets/images/decoration/md/chat-blue.svg" alt>
          </div>
          <p class="song">{{song.song}} - {{artistName}}</p>
          <audio :id="song.song" :src="song.mp3"></audio>
          <div class="song-play">
            <img @click="play(song.song)" src="~/assets/images/decoration/md/play-btn.svg" alt>
            <div class="progress-tab">
              <div :style="{ width: progress + '%' }" class="progress"></div>
            </div>
          </div>
        </div>
        <div class="vote-col">
          <button @click="goToSong(songId)" class="mini-out">
            <div class="mini-in">
              <p>vote</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>
<script>
export default {
  props: {
    song: {
      type: Object,
      default: () => {}
    },
    artistCover: {
      type: String,
      default: null
    },
    artistName: {
      type: String,
      default: ""
    },
    artistId: {
      type: String,
      default: null
    },
    songId: {
      type: Number,
      default: null
    }
  },
  data: () => ({
    progress: 0,
    timer: null
  }),
  methods: {
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
    goToSong(id) {
      return this.$router.push({
        path: `/music-discussion/${this.artistId}/${id}`
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.md-tab {
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.question-col {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: $screen-sm-max) {
    width: 500px;
  }
  @media (max-width: $screen-xs-max) {
    width: 300px;
    p {
      font-size: 12px;
    }
  }
  .question {
    background-color: $md-tab;
    padding: 5px 10px;
    width: 100%;
    border-radius: 10px;

    p {
      text-align: center;
      font-family: "Sukhumvit-SemiBold";
      font-size: 14px;
    }
  }
  img {
    height: 10px;
    margin-top: -1px;
  }
}

.tab-row {
  width: 750px;
  @media (max-width: $screen-sm-max) {
    width: 500px;
    padding: 0;
  }
  @media (max-width: $screen-xs-max) {
    width: 300px;
    padding: 0;
  }
  padding: 0 15px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
}

.artist-col {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: $screen-sm-max) {
    flex: 2;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    @media (max-width: $screen-xs-max) {
      width: 60px;
      height: 60px;
    }
  }

  .name {
    font-family: "Sukhumvit-SemiBold";
    color: $font-black-blue-4;
    text-align: center;
    @media (max-width: $screen-xs-max) {
      font-size: 14px;
    }
    // font-size: 24px;
  }
}

.song-col {
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 3;
  @media (max-width: $screen-sm-max) {
    flex: 5;
    width: 100%;
  }

  .question-con {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    .question {
      background-color: $md-tab;
      padding: 5px 10px;
      width: 100%;
      border-radius: 10px;

      p {
        text-align: center;
        font-family: "Sukhumvit-SemiBold";
        font-size: 14px;
      }
    }
    img {
      height: 10px;
      margin-top: -1px;
    }
  }

  .song {
    color: $dark-blue;
    font-family: "Sukhumvit-Bold";
    font-size: 14px;
  }

  .song-play {
    display: flex;
    flex-flow: row;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 8px 0;

    img {
      position: absolute;
      height: 20px;
      left: 0;
      cursor: pointer;
    }

    .progress-tab {
      width: 100%;
      height: 5px;
      padding-left: 3px;
      border-radius: 10px;
      background-color: $md-tab;

      .progress {
        background-color: $line-red;
        height: 5px;
        padding-left: 3px;
        border-radius: 10px;
      }
    }
  }
}

.vote-song-row {
  flex: 5;
  display: flex;
  flex-flow: row;
  align-items: center;
  @media (max-width: $screen-sm-max) {
    flex-flow: column;
  }
  @media (max-width: $screen-xs-max) {
    padding-left: 10px;
  }
}

.vote-col {
  flex: 2;
  @media (max-width: $screen-sm-max) {
    flex: 5;
    width: 100%;
  }
  display: flex;
  flex-flow: column;
  align-items: center;
}

hr {
  border: none;
  border-bottom: 2px solid $line-red;
  width: 100%;
}

.mini-out {
  cursor: pointer;
  padding: 4px;
  width: 140px;
  height: 40px;
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
    height: 32px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.3s;
    p {
      font-family: "Chonburi";
      color: white;
      font-size: 18px;
      line-height: 1;
    }
  }
}
</style>
