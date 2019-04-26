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
      class="react-bg"
      :class="{'have-you-ever': $route.query.type == 'have-you-ever', 'if-i-were': $route.query.type == 'if-i-were', 'cadm': $route.query.type == 'cadm'}"
    >
      <div class="react-con">
        <div class="react-inside">
          <div class="row">
            <div v-for="(player,i) in reactPlayers" :key="i" class="player-col col-sm-6">
              <div class="row">
                <div class="pic-col col-3"/>
                <div class="col-9">
                  <div class="name-row row">
                    <p>{{player.player.name}}</p>
                  </div>
                  <div class="react-row row">
                    <div class="react-col col-4">
                      <button @click="changeReact(i,1)">
                        <img
                          src="~/assets/images/group-feat-start/react-01.svg"
                          :class="{'reacted' : player.react == 1}"
                        >
                        <p>I know it.</p>
                      </button>
                    </div>
                    <div class="react-col col-4">
                      <button @click="changeReact(i,2)">
                        <img
                          src="~/assets/images/group-feat-start/react-02.svg"
                          :class="{'reacted' : player.react == 2}"
                        >
                        <p>Ooh really ?</p>
                      </button>
                    </div>
                    <div class="react-col col-4">
                      <button @click="changeReact(i,3)">
                        <img
                          src="~/assets/images/group-feat-start/react-03.svg"
                          :class="{'reacted' : player.react == 3}"
                        >
                        <p>OMG wowww !</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button @click="goNext()" class="red-btn-out">
            <div class="btn-in">
              <p>next</p>
            </div>
          </button>
          <button @click="endGame()" class="btn-out">
            <div class="btn-in">
              <p>end game</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
export default {
  data: () => ({
    reactPlayers: []
  }),

  mounted() {
    let players = [...this.$store.state.groupFeatResults.players];
    if (this.$store.state.groupFeatController.currentPlayer !== 0) {
      players.splice(
        this.$store.state.groupFeatController.currentPlayer - 1,
        1
      );
    } else {
      let ind = players.length - 1;
      players.splice(ind, 1);
    }
    let reactPlayers = [];
    for (let i = 0; i < players.length; i++) {
      reactPlayers.push({
        player: players[i],
        react: 0
      });
    }
    this.reactPlayers = reactPlayers;
  },

  methods: {
    changeReact(i, score) {
      this.reactPlayers[i].react = score;
    },
    updateResult() {
      let results = this.$store.state.groupFeatResults.results.slice();
      let result = results[results.length - 1];
      result.react = this.reactPlayers;
      for (let i = 0; i < this.reactPlayers.length; i++) {
        if (this.reactPlayers[i].react == 1) {
          result.react_1 = result.react_1 + 1;
        } else if (this.reactPlayers[i].react == 2) {
          result.react_2 = result.react_2 + 1;
        } else if (this.reactPlayers[i].react == 3) {
          result.react_3 = result.react_3 + 1;
        }
      }

      return this.$store.commit("UPDATE_RESULT", result);
    },
    goNext() {
      this.updateResult();
      return this.$router.push({
        path: "/group-feat/story",
        query: {
          type: this.$route.query.type,
          topic: this.$route.query.topic,
          q: this.$route.query.q + 1
        }
      });
    },
    async endGame() {
      this.updateResult();
      let newkey = "";
      let database = await firebase.database().ref("/group-feat-results");
      newkey = database.push().key;
      let updates = {};
      updates[
        "/group-feat-results/" + newkey
      ] = this.$store.state.groupFeatResults;
      this.$store.state.groupFeatResults.players.map((data, idx) => {
        updates[
          `/user/${data.id}/group-feat/${newkey}`
        ] = this.$store.state.groupFeatResults;
      });
      firebase
        .database()
        .ref()
        .update(updates);
      return this.$router.push({
        path: "/group-feat/result",
        query: {
          key: newkey
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.react-bg {
  .react-con {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: $light-red;
    padding: 40px 0;
    .react-inside {
      width: 640px;
      display: flex;
      flex-flow: column;
      align-items: center;
      background-color: $ci-white;
      padding: 20px 50px;
      border-radius: 40px;
      > .row {
        margin-bottom: 10px;
      }
      .player-col {
        margin: 10px 0;
        .pic-col {
        }

        .name-row {
          margin-bottom: 10px;
          border: 1px solid $ci-blue;
          border-radius: 30px;
          padding: 8px 10px;
          display: flex;
          flex-flow: row;
          justify-content: center;
          p {
            text-align: center;
            font-family: "Chonburi";
            color: $font-black-blue-2;
            font-size: 20px;
          }
        }

        .react-row {
          .react-col {
            padding-left: 12px;
            padding-right: 12px;
            p {
              font-family: "Sukhumvit-Bold";
              font-size: 12px;
            }
          }
          button {
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;

            img {
              width: 100%;
              opacity: 0.5;

              &.reacted {
                opacity: 1;
              }

              &:hover {
                opacity: 1;
              }
            }
          }
        }
      }

      .red-btn-out {
        margin: 10px 0;
      }

      .btn-out {
        margin: 10px 0;
      }
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
</style>
