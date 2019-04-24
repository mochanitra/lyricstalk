<template>
  <div
    :class="{'question-item': true, 'one': number == 1, 'two': number == 2, 'three': number == 3, 'four': number == 4, 'five': number == 5}"
  >
    <img class="music-tab" src="~/assets/images/decoration/music_tab.svg" alt>
    <h2 :class="{'isAnswer': isAnswer}" @click="showQuestionList()">
      <span v-if="!selectedQuestion">Choose question {{ number }}</span>
      <span v-else>{{ selectedQuestion.title }}</span>
    </h2>
    <div class="row">
      <div
        class="col-6 song-col"
        v-for="(song, i) in selectedQuestion && selectedQuestion.songs || [0, 0, 0, 0]"
        :key="i"
      >
        <audio :id="song.title" :src="song.mp3"></audio>

        <div
          class="song-con"
          :class="{'selected': selectedSong != null ? selectedSong == i : answerIndex == i, 'correct': correctAnswerIndex == i, 'answer': userAnswerIndex == i}"
        >
          <img
            v-if="isShow"
            :class="{'played': isPlayed == i, 'cd-left': true, 'init': true}"
            src="~/assets/images/decoration/cd-left.svg"
          >
          <img
            v-else
            @click="selectSong(i)"
            :class="{'played': isPlayed == i, 'cd-left': true}"
            src="~/assets/images/decoration/cd-left.svg"
          >
          <button :disabled="!song.title" @click="playSongById(song.title,i)">
            <img v-if="i==0" class="play" src="~/assets/images/decoration/soy/play-1.svg">
            <img v-else-if="i==1" class="play" src="~/assets/images/decoration/soy/play-2.svg">
            <img v-else-if="i==2" class="play" src="~/assets/images/decoration/soy/play-3.svg">
            <img v-else class="play" src="~/assets/images/decoration/soy/play-4.svg">
          </button>
          <!-- {/* <audio id={this.state.question.id} src={this.state.question.mp3} /> */} -->
          <div v-if="isShow" class="lyric-con init">
            <p v-if="show[i] || isShow">{{ song.lyrics }}</p>
          </div>
          <div v-else @click="selectSong(i)" class="lyric-con">
            <p v-if="show[i] || isShow">{{ song.lyrics }}</p>
          </div>
        </div>

        <!-- <div class="_mgh-at" style="width: 300px;">
            <div
              @click="selectSong(i)"
              :class="{'selected': selectedSong === i, 'correct': correctAnswerIndex === i, 'answer': userAnswerIndex === i}"
              class="_h-200px _bgs-ct _bgrp-nrp _bgpst-ct _cs-pt _dp-f _alit-ct"
              v-lazy:background-image="require(`assets/images/albumchoice.png`)"
            >
              <div class="marginplay">
                <img
                  @click="playSongById(song.title,i)"
                  style="width: 50px;"
                  src="~/assets/images/play.png"
                >
              </div>

              <div v-if="show[i]" class="_w-50pct _mgl-at _pdr-24px">{{ song.lyrics }}</div>
            </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 1
    },
    selectedQuestion: {
      type: Object,
      default: () => {}
    },
    bgimg: {
      type: String,
      default: require("~/assets/images/red.png")
    },
    correctAnswerIndex: {
      type: Number,
      default: null
    },
    userAnswerIndex: {
      type: Number,
      default: null
    },
    playedSong: {
      type: String,
      default: null
    },
    isAnswer: {
      type: Boolean,
      default: false
    },
    answerIndex: {
      type: Number,
      default: null
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    playSongById(id, i) {
      if (i)
        if (this.$props.playedSong && this.$props.playedSong != id) {
          // this.show[i] = true
          const prev = document.getElementById(this.$props.playedSong);
          this.isPlayed = 5;
          prev.pause();
          prev.load();
        }

      const x = document.getElementById(id);
      if (x.paused) {
        x.play();
        this.isPlayed = i;
        this.$emit("setPlayedSong", id);
      } else {
        x.pause();
        this.isPlayed = 5;
        x.load();
        this.$emit("setPlayedSong", id);
      }
      x.onended = () => {
        this.isPlayed = 5;
        this.show[i] = true;
      };
    },
    selectSong(i) {
      this.selectedSong = i;
      this.$emit("selectSong", i);
    },

    showQuestionList() {
      this.$emit("selectQuestion", this.$props.number);
      this.$emit("deleteSelectedQuestions");
      this.$modal.show("questions-list");
    }
  },
  data: () => ({
    show: {
      0: false,
      1: false,
      2: false,
      3: false
    },
    selectedSong: null,
    isPlayed: 5
  })
};
</script>

<style lang="scss" scoped>
@import "assets/styles/variables";
.question-item {
  display: flex;
  flex-flow: column;
  align-items: center;
  border-radius: 40px;
  padding: 30px 0;

  .row {
    margin: 0;
  }

  .col-6 {
    padding: 0;
  }

  &.one {
    background-color: $line-red;
    border-bottom-right-radius: 0;
  }

  &.two {
    background-color: $home-blue;
    border-top-left-radius: 0;
  }

  &.three {
    background-color: $smoker-red;
    border-bottom-right-radius: 0;
  }

  &.four {
    background-color: $line-red;
    border-top-left-radius: 0;
  }

  &.five {
    background-color: $home-blue;
    border-bottom-right-radius: 0;
  }
}

h2 {
  margin: 0 15px;
  margin-top: 20px;
  border: 1px solid $ci-white;
  padding: 10px 30px;
  border-radius: 20px;
  font-family: "Chonburi";
  font-size: 20px;
  color: $ci-white;
  min-width: 300px;
  text-align: center;
  cursor: pointer;
  transition-duration: 0.3s;
  @media (max-width: $screen-xs-max) {
    min-width: 200px;
    font-size: 12px;
    padding: 8px 20px;
  }

  &.isAnswer {
    cursor: initial;
    border: none;
    &:hover {
      color: $ci-white;
      background: none;
    }
  }

  &:hover {
    color: $dark-blue;
    background-color: $ci-white;
    transition-duration: 0.3s;
  }
}

.music-tab {
  width: 30%;
  @media (max-width: $screen-xs-max) {
    width: 200px;
  }
}

.song-col {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.bgcl {
  background-color: #e8dbd6;
}

.marginplay {
  margin-left: 72px;
}

.selected {
  border: 4px solid white;
}

.correct {
  border: 4px solid green;
}

.answer {
  border: 4px solid white;
}

._h-200px {
  height: 200px;
}

.text-center {
  text-align: center;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.ig-heading {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background: #e8dbd6;
    width: 100%;
    height: 12px;
    bottom: -12px;
    left: 0;
  }
}

.song-con {
  margin-top: 50px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 200px;
  z-index: 3;
  @media (max-width: $screen-xs-max) {
    height: 110px;
    margin-top: 30px;
  }

  .top-chat {
    position: absolute;
    bottom: 100%;
    height: 20px;
    left: 60%;
  }

  .cd-left {
    height: 180px;
    width: 97px;
    margin-left: 6px;
    @media (max-width: $screen-xs-max) {
      height: 90px;
      width: 48px;
      margin-left: 3px;
    }
    z-index: 0;

    &.played {
      animation: wide-narrow 1s ease-in-out infinite alternate;
      -webkit-animation: wide-narrow 1s ease-in-out infinite alternate;
    }
  }

  button {
    position: absolute;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    left: 73px;
    @media (max-width: $screen-xs-max) {
      left: 37px;
    }

    img {
      width: 54px;
      @media (max-width: $screen-xs-max) {
        width: 27px;
      }
    }
  }

  .lyric-con {
    height: 100%;
    width: 200px;
    @media (max-width: $screen-xs-max) {
      width: 110px;
      border-radius: 10px;
      margin-left: -2px;
      padding: 10px 0;
      padding-left: 17px;
      padding-right: 10px;
    }
    margin-left: -6px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    background-color: $ci-white;
    border-radius: 20px;

    p {
      font-family: "Sukhumvit-Bold";
      color: $dark-blue;
      font-size: 16px;
      text-align: center;
      @media (max-width: $screen-xs-max) {
        font-size: 11px;
        line-height: 1.3;
      }
    }
  }
}

.init {
  cursor: initial;
}

@keyframes wide-narrow {
  0% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }

  50% {
    transform: scale(0.95);
    -webkit-transform: scale(0.95);
  }
  100% {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
}
</style>
