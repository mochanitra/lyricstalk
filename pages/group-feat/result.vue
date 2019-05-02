<template>
  <div v-if="!loaded"></div>
  <div v-else>
    <div
      class="header-bg"
      :class="{'have-you-ever': results.type == 'have-you-ever', 'if-i-were': results.type == 'if-i-were', 'cadm': results.type == 'cadm'}"
    >
      <div class="header">
        <h1>group feat</h1>
      </div>
    </div>
    <div class="mode-bg">
      <div v-if="results.type == 'have-you-ever'" class="mode-con have-you-ever">
        <h4>have you ever ... ?</h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
      <div v-if="results.type == 'if-i-were'" class="mode-con if-i-were">
        <h4>if i were ...</h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
      <div v-if="results.type == 'cadm'" class="mode-con cadm">
        <h4>
          couldn't agree
          <br>/disagree more
        </h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
    </div>
    <div
      class="header-con top"
      :class="{'have-you-ever': results.type == 'have-you-ever', 'if-i-were': results.type == 'if-i-were', 'cadm': results.type == 'cadm'}"
    >
      <div class="in-header">
        <h4>result</h4>
      </div>
    </div>
    <div class="content-bg">
      <div class="content-con">
        <div class="basic-content">
          <div class="row">
            <div
              class="pic-col"
              :class="{'col-6' : $store.state.windowWidth >= 768, 'col-12' : $store.state.windowWidth < 768}"
            >
              <div class="pic-con">
                <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                <div class="pic">
                  <img v-if="results.photo" :src="results.photo" alt>
                </div>
              </div>
            </div>
            <div
              class="basic-col"
              :class="{'col-6' : $store.state.windowWidth >= 768, 'col-12' : $store.state.windowWidth < 768}"
            >
              <div class="location-row row">
                <div class="pic-col col-4">
                  <img class="img-3" src="~/assets/images/group-feat-start/ins-3.svg" alt>
                </div>
                <div class="data-col col-8">
                  <p class="location">{{results.location}}</p>
                  <p class="date">{{moment(results.date)}}</p>
                </div>
              </div>
              <div class="second-row">
                <div class="player-row">
                  <img src="~/assets/images/decoration/friend.svg" alt>
                  <p class="player">{{results.players.length}}</p>
                </div>
                <div
                  class="topic-row"
                  :class="{'love': results.topic=='love','life': results.topic=='life','dream': results.topic=='dream'}"
                >
                  <p>{{results.topic}}</p>
                </div>
              </div>
              <div class="song-row row">
                <p>
                  <span>{{results.results.length}}</span> songs
                </p>
              </div>
            </div>
          </div>
          <div class="expand-btn-row row">
            <img
              @click="toggleExpand()"
              :class="{'expand': isExpand}"
              src="~/assets/images/decoration/expand-button.svg"
              alt
            >
          </div>
        </div>
        <div v-if="isExpand" class="detail-data">
          <div v-for="(data,i) in results.results" :key="i" class="container">
            <div class="result-row row">
              <div class="name-col col-4">
                <div class="name-con">
                  <p>{{data.player.name}}</p>
                </div>
              </div>
              <div class="lyrics-col col-4">
                <div class="song-con">
                  <img class="top-chat" src="~/assets/images/decoration/top-chat-light-red.svg">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <img class="play" src="~/assets/images/decoration/play.svg">
                  <!-- {/* <audio id={this.state.question.id} src={this.state.question.mp3} /> */} -->
                  <div class="lyric-con">
                    <p>{{data.question.lyrics}}</p>
                  </div>
                </div>
              </div>
              <div class="react-col col-4">
                <div class="row">
                  <div class="react col-4">
                    <img src="~/assets/images/group-feat-start/react-01.svg">
                    <p>{{data.react_1}}</p>
                  </div>
                  <div class="react col-4">
                    <img src="~/assets/images/group-feat-start/react-02.svg">
                    <p>{{data.react_2}}</p>
                  </div>
                  <div class="react col-4">
                    <img src="~/assets/images/group-feat-start/react-03.svg">
                    <p>{{data.react_3}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-con">
      <div class="in-header">
        <h4 class="sub">most wowed !</h4>
      </div>
    </div>
    <div class="content-bg">
      <div class="content-con">
        <div class="wow-con">
          <div class="name-row row">
            <div class="name-col col-8">
              <div class="name-con">
                <p>{{mostwowed.player.name}}</p>
              </div>
            </div>
            <div class="react-col col-2">
              <img src="~/assets/images/group-feat-start/react-03.svg">
            </div>
            <div class="count-col col-2">
              <p>{{mostwowed.react_3}}</p>
            </div>
          </div>
          <div class="song-row row">
            <div class="song-con">
              <img class="top-chat" src="~/assets/images/decoration/top-chat-light-red.svg">
              <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
              <img class="play" src="~/assets/images/decoration/play.svg">
              <!-- {/* <audio id={this.state.question.id} src={this.state.question.mp3} /> */} -->
              <div class="lyric-con">
                <p>{{mostwowed.question.lyrics}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-con top">
      <div class="in-header">
        <h4 class="sub">
          get to know
          <br>each other most
        </h4>
      </div>
    </div>
    <div class="content-bg">
      <div class="content-con">
        <div class="know-con">
          <p>{{knowmost[0]}}</p>
          <p class="x">X</p>
          <p>{{knowmost[1]}}</p>
        </div>
      </div>
    </div>
    <div class="header-con top">
      <div class="in-header last">
        <button @click="done()" class="btn-out">
          <div class="btn-in">
            <p>done</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import moment from "moment";
export default {
  data: () => ({
    loaded: false,
    results: {
      players: [],
      results: [
        {
          player: {
            name: ""
          },
          react_3: 0
        }
      ],
      type: ""
    },
    mostwowed: {
      player: {
        name: ""
      },
      question: {
        lyrics: ""
      }
    },
    knowmost: [],
    isExpand: false
  }),
  async created() {
    const res = await this.$axios.$get(
      `https://lyricstalk-1fb09.firebaseio.com/group-feat-results/${
        this.$route.query.key
      }.json`
    );
    // console.log(res)
    this.results = res;
    this.loaded = true;
    await this.getMostWowed();
    await this.getKnowMost();
  },
  methods: {
    toggleExpand() {
      this.isExpand = !this.isExpand;
    },
    getMostWowed() {
      let mostwowed = this.results.results[0];
      let mostreactwowed = this.results.results[0].react_3;
      for (let i = 1; i < this.results.results.length; i++) {
        if (this.results.results[i].react_3 > mostreactwowed) {
          mostwowed = this.results.results[i];
          mostreactwowed = this.results.results[i].react_3;
        }
      }
      this.mostwowed = mostwowed;
    },
    getKnowMost() {
      let know = {};
      this.results.players.map(data => {
        know[data.name] = {};
      });
      for (let i = 0; i < this.results.players.length; i++) {
        for (let j = i + 1; j < this.results.players.length; j++) {
          let playername_1 = this.results.players[i].name;
          let playername_2 = this.results.players[j].name;
          know[playername_1][playername_2] = 0;
          know[playername_2][playername_1] = 0;
        }
      }

      this.results.results.map(data => {
        data.react.map(score => {
          if (score.react === 1) {
            know[data.player.name][score.player.name] =
              know[data.player.name][score.player.name] + 1;
          } else if (score.react === 2) {
            know[data.player.name][score.player.name] =
              know[data.player.name][score.player.name] + 2;
          } else if (score.react === 3) {
            know[data.player.name][score.player.name] =
              know[data.player.name][score.player.name] + 3;
          }
        });
      });
      let knowmost_1 = "",
        knowmost_2 = "";
      let knowmostscore = 0;
      for (let i = 0; i < this.results.players.length; i++) {
        for (let j = i + 1; j < this.results.players.length; j++) {
          let playername_1 = this.results.players[i].name;
          let playername_2 = this.results.players[j].name;
          let knowscore =
            know[playername_1][playername_2] + know[playername_2][playername_1];
          if (knowscore > knowmostscore) {
            knowmostscore = knowscore;
            knowmost_1 = playername_1;
            knowmost_2 = playername_2;
          }
        }
      }
      this.knowmost = [knowmost_1, knowmost_2];
    },
    moment(date) {
      return moment(date).format("DD MMM YYYY");
    },
    done() {
      return this.$router.replace("/");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";

.header-con {
  background-color: $ci-white;

  &.top {
    &.have-you-ever {
      background: linear-gradient(
        to right,
        $ci-white 0%,
        $ci-white 50%,
        $smoker-red 50%,
        $smoker-red 100%
      );
    }
    &.if-i-were {
      background: linear-gradient(
        to right,
        $ci-white 0%,
        $ci-white 50%,
        $ci-blue 50%,
        $ci-blue 100%
      );
    }
    &.cadm {
      background: linear-gradient(
        to right,
        $ci-white 0%,
        $ci-white 50%,
        $line-red 50%,
        $line-red 100%
      );
    }
  }
}
.in-header {
  padding: 20px 0;
  background-color: $light-red;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;

  &.last {
    border-bottom-left-radius: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    button {
      margin: 0 auto;
    }
  }
  h4 {
    text-align: center;
    font-family: "Chonburi";
    color: $line-red;
    font-size: 40px;
    margin-bottom: 10px;

    &.sub {
      color: $font-black-blue-2;
      font-size: 32px;
    }
  }

  p {
    text-align: center;
    font-family: "Sukhumvit-SemiBold";
    font-size: 14px;
  }
}

.content-bg {
  background-color: $light-red;
  .content-con {
    background-color: $ci-white;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 10px 0;
  }
}

.basic-content {
  width: 700px;
  margin: 20px 0;
  @media (max-width: $screen-md-max) {
    width: 100vw;
  }
  .pic-con {
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 200px;

    .cd-left {
      height: 180px;
      width: 97px;
      margin-left: 6px;
      z-index: 0;
    }

    .pic {
      height: 200px;
      width: 200px;
      background-color: $line-red;
      border-radius: 20px;
      margin-left: -6px;
      z-index: 1;
      overflow: hidden;

      img {
        height: 100%;
        min-width: 100%;
      }
    }
  }

  .basic-col {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $screen-md-max) {
      margin: 20px 0;
    }
    .location-row {
      width: 80%;

      .pic-col {
        padding: 0 5px;
      }
      .data-col {
        padding-left: 10px;
        .location {
          font-family: "Sukhumvit-Bold";
          color: $dark-blue;
          font-size: 24px;
        }

        .date {
          font-family: "Sukhumvit-Light";
          color: $dark-blue;
          font-size: 20px;
        }
      }
    }

    .player-row {
      margin: 5px 0;
      background-color: $dark-blue;
      padding: 5px 10px;
      width: 45%;
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

    .song-row {
      background-color: $line-red;
      padding: 5px 30px;
      border-radius: 20px;
      p {
        font-family: "Sukhumvit-Bold";
        color: white;
      }
    }
  }

  .expand-btn-row {
    justify-content: center;
    margin-top: 30px;
    img {
      width: 60px;
      height: 30px;
      cursor: pointer;

      &.expand {
        transform: rotate(180deg);
      }
    }
  }
}

.detail-data {
  width: 100%;
  margin: 20px;

  .result-row {
    align-items: center;
    margin: 20px 0;

    .name-col {
      display: flex;
      flex-flow: column;
      align-items: center;
      @media (max-width: $screen-md-max) {
        max-width: 100%;
        flex: 0 0 100%;
      }

      .name-con {
        width: 80%;
        background-color: $light-red;
        padding: 5px 10px;
        border-radius: 20px;
        p {
          text-align: center;
          font-family: "Chonburi";
        }
      }
    }

    .lyrics-col {
      @media (max-width: $screen-md-max) {
        max-width: 100%;
        flex: 0 0 100%;
        margin-top: 20px;
      }
      .song-con {
        position: relative;
        display: flex;
        flex-flow: row;
        align-items: center;
        height: 100px;
        z-index: 1;
        @media (max-width: $screen-md-max) {
          margin-left: 36px;
        }

        .top-chat {
          position: absolute;
          bottom: 100%;
          margin-bottom: -1px;
          height: 10px;
          left: 42%;
        }

        .cd-left {
          height: 85px;
          width: 46px;
          margin-left: 6px;
          z-index: 0;

          &.played {
            animation: wide-narrow 1s ease-in-out infinite alternate;
            -webkit-animation: wide-narrow 1s ease-in-out infinite alternate;
          }
        }
        .play {
          position: absolute;
          left: 39px;
          width: 24px;
        }

        .lyric-con {
          height: 100%;
          width: 200px;
          margin-left: -6px;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          background-color: $light-red;
          border-radius: 20px;

          p {
            font-family: "Sukhumvit-Bold";
            color: $dark-blue;
            font-size: 12px;
            @media (max-width: $screen-md-max) {
              font-size: 11px;
              line-height: 1.2;
            }
            text-align: center;
          }
        }
      }
    }

    .react-col {
      @media (max-width: $screen-md-max) {
        max-width: 100%;
        flex: 0 0 100%;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .react {
        display: flex;
        flex-flow: column;
        align-items: center;

        img {
          width: 50px;
        }

        p {
          color: $line-red;
          font-family: "Chonburi";
          font-size: 28px;
        }
      }
    }
  }
}

.wow-con {
  width: 500px;
  margin: 20px 0;
  @media (max-width: $screen-md-max) {
    width: 100vw;
    padding: 0 20px;
  }
  .name-row {
    align-items: center;
    .name-col {
      @media (max-width: $screen-md-max) {
        max-width: 70%;
        flex: 0 0 70%;
      }
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 100%;
      background-color: $light-red;
      padding: 5px 10px;
      border-radius: 20px;
      p {
        text-align: center;
        font-family: "Chonburi";
      }
    }

    .react-col {
      display: flex;
      flex-flow: column;
      align-items: center;
      @media (max-width: $screen-md-max) {
        max-width: 15%;
        flex: 0 0 15%;
      }
      img {
        height: 36px;
      }
    }

    .count-col {
      @media (max-width: $screen-md-max) {
        max-width: 15%;
        flex: 0 0 15%;
      }
      display: flex;
      flex-flow: column;
      align-items: center;
      p {
        text-align: left;
        width: 100%;
        color: $line-red;
        font-family: "Chonburi";
        font-size: 28px;
        line-height: 1;
      }
    }
  }

  .song-row {
    justify-content: center;
    margin-top: 30px;
    .song-con {
      position: relative;
      display: flex;
      flex-flow: row;
      align-items: center;
      height: 150px;
      z-index: 1;

      .top-chat {
        position: absolute;
        bottom: 100%;
        margin-bottom: -1px;
        height: 10px;
        left: 42%;
      }

      .cd-left {
        height: 130px;
        width: 70px;
        margin-left: 6px;
        z-index: 0;

        &.played {
          animation: wide-narrow 1s ease-in-out infinite alternate;
          -webkit-animation: wide-narrow 1s ease-in-out infinite alternate;
        }
      }
      .play {
        position: absolute;
        left: 56px;
        width: 33px;
      }

      .lyric-con {
        height: 100%;
        width: 400px;
        @media (max-width: $screen-md-max) {
          width: 200px;
        }
        margin-left: -6px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        background-color: $light-red;
        border-radius: 20px;

        p {
          font-family: "Sukhumvit-Bold";
          color: $dark-blue;
          font-size: 16px;
          @media (max-width: $screen-md-max) {
            font-size: 14px;
            line-height: 1.4;
          }
          text-align: center;
        }
      }
    }
  }
}

.know-con {
  p {
    font-family: "Chonburi";
    color: $font-black-blue-2;
    text-align: center;

    &.x {
      color: $line-red;
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

.btn-out {
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

.red-btn-out {
  cursor: pointer;
  padding: 6px;
  width: 240px;
  height: 60px;
  background-color: $line-red;
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
    background-color: $line-red;
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

.second-row {
  width: 60%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  .row {
    padding: 0;
  }

  .topic-row {
    margin: 5px 0;
    background-color: $dark-blue;
    padding: 5px 10px;
    width: 45%;
    justify-content: center;
    border-radius: 20px;

    &.love {
      background-color: #d1aba2;
    }

    &.life {
      background-color: #c36b5e;
    }

    &.dream {
      background-color: #a0b5b9;
    }

    img {
      width: 30px;
      height: 30px;
      margin: 0 5px;
    }

    p {
      color: white;
      font-family: "Sukhumvit-Bold";
      text-align: center;
    }
  }
}
</style>
