<template>
  <div>
    <div
      class="header-bg"
      :class="{'have-you-ever': $route.query.type == 'have-you-ever', 'if-i-were': $route.query.type == 'if-i-were', 'cadm': $route.query.type == 'cadm'}"
    >
      <div class="header">
        <h1>group feat</h1>
      </div>
    </div>
    <div class="mode-bg">
      <div v-if="$route.query.type == 'have-you-ever'" class="mode-con have-you-ever">
        <h4>have you ever ... ?</h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
      <div v-if="$route.query.type == 'if-i-were'" class="mode-con if-i-were">
        <h4>if i were ...</h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
      <div v-if="$route.query.type == 'cadm'" class="mode-con cadm">
        <h4>
          couldn't agree
          <br>/disagree more
        </h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
    </div>
    <div
      class="gf-story-bg"
      :class="{'have-you-ever': $route.query.type == 'have-you-ever', 'if-i-were': $route.query.type == 'if-i-were', 'cadm': $route.query.type == 'cadm'}"
    >
      <div class="gf-story-con">
        <div class="player-con">
          <img
            :src="$store.state.groupFeatResults.players[$store.state.groupFeatController.currentPlayer].pic"
            alt
          >
          <div class="name-con">
            <p>{{$store.state.groupFeatResults.players[$store.state.groupFeatController.currentPlayer].name}}</p>
          </div>
        </div>
        <div class="song-con">
          <img class="top-chat" src="~/assets/images/decoration/top-chat.svg">
          <img
            class="cd-left"
            :class="{'played': isPlayed}"
            src="~/assets/images/decoration/cd-left.svg"
          >
          <button @click="play()">
            <img class="play" src="~/assets/images/decoration/play.svg">
          </button>
          <!-- {/* <audio id={this.state.question.id} src={this.state.question.mp3} /> */} -->
          <div class="lyric-con">
            <p v-if="isEnded">{{$store.state.groupFeatController.currentQuestion.lyrics}}</p>
          </div>
        </div>
        <div class="button-con">
          <button @click="goToReact()" class="red-btn-out">
            <div class="btn-in">
              <p>react</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isEnded: false,
    isPlayed: false,
    audio: null
  }),
  watch: {
    "$route.query.q"() {
      this.audio = new Audio(
        this.$store.state.groupFeatController.currentQuestion.mp3
      );
      this.isEnded = false;
      this.isPlayed = false;
    }
  },

  mounted() {
    this.audio = new Audio(
      this.$store.state.groupFeatController.currentQuestion.mp3
    );
  },
  methods: {
    play() {
      this.audio.play();
      let audio = this.audio;
      audio.onplay = () => {
        this.isPlayed = true;
      };
      audio.onended = () => {
        this.isEnded = true;
        this.isPlayed = false;
      };
    },
    goToReact() {
      let player = this.$store.state.groupFeatResults.players[
        this.$store.state.groupFeatController.currentPlayer
      ];
      let question = this.$store.state.groupFeatController.currentQuestion;
      let results = {
        player,
        question,
        react: {},
        react_1: 0,
        react_2: 0,
        react_3: 0
      };
      this.$store.commit("PUSH_RESULT", results);
      this.isEnded = false;
      this.nextState();
      return this.$router.push({
        path: "/group-feat/react",
        query: {
          type: this.$route.query.type,
          topic: this.$route.query.topic,
          q: this.$route.query.q
        }
      });
    },
    nextState() {
      let groupFeatController = this.$store.state.groupFeatController;
      let questions = groupFeatController.questions;
      let remainingQuestions = [...groupFeatController.remainingQuestions];
      remainingQuestions.splice(groupFeatController.random_index, 1);
      let currentPlayer = groupFeatController.currentPlayer + 1;
      if (currentPlayer === this.$store.state.groupFeatResults.players.length) {
        currentPlayer = 0;
      }
      const random_index = Math.floor(
        Math.random() * remainingQuestions.length
      );
      let currentQuestion = groupFeatController.questions[random_index];
      this.$store.commit("INIT_GROUPFEAT_CONTROLLER", {
        questions,
        remainingQuestions,
        random_index,
        currentQuestion,
        currentPlayer
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.gf-story-bg {
  background-color: $smoker-red;
  &.have-you-ever {
    background-color: $smoker-red;
  }

  &.if-i-were {
    background-color: $ci-blue;
  }

  &.cadm {
    background-color: $line-red;
  }
  .gf-story-con {
    background-color: $light-red;
    border-top-right-radius: 40px;
    padding: 20px 0;
    display: flex;
    flex-flow: column;
    align-items: center;

    .player-con {
      min-width: 200px;
      display: flex;
      flex-flow: row;
      align-items: center;
      img {
        position: absolute;
        border-radius: 50%;
      }
      .name-con {
        background-color: $ci-white;
        padding: 6px 15px;
        padding-left: 55px;
        border-radius: 30px;
        // width: 100%;

        p {
          font-family: "Chonburi";
          color: $font-black-blue-2;
        }
      }
    }

    .song-con {
      margin-top: 50px;
      position: relative;
      display: flex;
      flex-flow: row;
      align-items: center;
      height: 200px;
      z-index: 1;

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
        left: 72px;

        img {
          width: 54px;
        }
      }

      .lyric-con {
        height: 100%;
        width: 400px;
        margin-left: -6px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        padding: 10px 40px;
        background-color: $ci-white;
        border-radius: 20px;

        p {
          font-family: "Sukhumvit-Bold";
          color: $dark-blue;
          font-size: 20px;
          text-align: center;
        }
      }
    }

    .button-con {
      margin-top: 30px;
      margin-bottom: 10px;
    }
  }
}

.header-bg {
  width: 100%;
  background: linear-gradient(
    to left,
    $ci-white 0%,
    $ci-white 50%,
    $smoker-red 50%,
    $smoker-red 100%
  );
  &.have-you-ever {
    background: linear-gradient(
      to left,
      $ci-white 0%,
      $ci-white 50%,
      $smoker-red 50%,
      $smoker-red 100%
    );
  }
  &.if-i-were {
    background: linear-gradient(
      to left,
      $ci-white 0%,
      $ci-white 50%,
      $ci-blue 50%,
      $ci-blue 100%
    );
  }
  &.cadm {
    background: linear-gradient(
      to left,
      $ci-white 0%,
      $ci-white 50%,
      $line-red 50%,
      $line-red 100%
    );
  }
  .header {
    background-color: $smoke-red;
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

.mode-bg {
  background: linear-gradient(
    to right,
    $light-red 0%,
    $light-red 50%,
    $smoke-red 50%,
    $smoke-red 100%
  );
  background-color: $smoke-red;
  .mode-con {
    background-color: $smoker-red;
    padding: 10px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    &.have-you-ever {
      background-color: $smoker-red;
    }

    &.if-i-were {
      background-color: $ci-blue;
    }

    &.cadm {
      background-color: $line-red;
    }

    h4 {
      font-family: "Chonburi";
      color: $ci-white;
      font-size: 28px;
      margin-bottom: 10px;
      @media (max-width: $screen-sm-max) {
        font-size: 32px;
      }
      @media (max-width: $screen-xs-max) {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }

    img {
      width: 30%;
    }
  }
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
