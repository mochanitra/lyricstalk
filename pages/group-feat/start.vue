<template>
  <div class="start-page">
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
      class="instruction-con-bg"
      :class="{'have-you-ever': $route.query.type == 'have-you-ever', 'if-i-were': $route.query.type == 'if-i-were', 'cadm': $route.query.type == 'cadm'}"
    >
      <div class="instruction-con">
        <div class="instruction row">
          <div class="ins-row col-md-6 order-1">
            <div class="row">
              <div class="circle-col col-2">
                <CircleNumber class="circle" :number="1"/>
              </div>
              <div class="col-5">
                <p class="ins">เลือกหัวข้อในการสนทนา</p>
              </div>
              <div class="img-col col-5 col-sm-3 offset-sm-1">
                <img class="img-1" src="~/assets/images/group-feat-start/ins-1.svg" alt>
              </div>
            </div>
          </div>
          <!-- <div class="line-row row">
            <div class="line-col col-5 offset-2">
              <div class="line"></div>
            </div>
          </div>-->
          <div class="ins-row col-md-6 order-md-3 order-2">
            <div class="row">
              <div class="circle-col col-2">
                <CircleNumber class="circle" :number="2"/>
              </div>
              <div class="col-5">
                <p class="ins">เพิ่มผู้เล่น</p>
              </div>
              <div class="img-col col-5 col-sm-3 offset-sm-1">
                <img class="img-2" src="~/assets/images/group-feat-start/ins-2.svg" alt>
              </div>
            </div>
          </div>
          <!-- <div class="line-row row">
            <div class="line-col col-5 offset-2">
              <div class="line"></div>
            </div>
          </div>-->
          <div class="ins-row col-md-6 order-md-2 order-3">
            <div class="row">
              <div class="circle-col col-2">
                <CircleNumber class="circle" :number="3"/>
              </div>
              <div class="col-5">
                <p class="ins">ใส่สถานที่</p>
              </div>
              <div class="img-col col-5 col-sm-3 offset-sm-1">
                <img class="img-3" src="~/assets/images/group-feat-start/ins-3.svg" alt>
              </div>
            </div>
          </div>
          <!-- <div class="line-row row">
            <div class="line-col col-5 offset-2">
              <div class="line"></div>
            </div>
          </div>-->
          <div class="ins-row col-md-6 order-4">
            <div class="row">
              <div class="circle-col col-2">
                <CircleNumber class="circle" :number="4"/>
              </div>
              <div class="col-5">
                <p class="ins">ถ่ายรูปวงสนทนา</p>
              </div>
              <div class="img-col col-5 col-sm-3 offset-sm-1">
                <img class="img-4" src="~/assets/images/group-feat-start/ins-4.svg" alt>
              </div>
            </div>
          </div>
        </div>
        <div class="in-header">
          <h4>topics</h4>
          <p>เลือกหัวข้อในการสนทนา</p>
        </div>
      </div>
    </div>
    <div class="topic-bg">
      <div class="topic-con">
        <div class="row">
          <div class="topic-col col-sm-4">
            <img
              @click="selectTopic('love')"
              :class="{'selected': topic=='love'}"
              src="~/assets/images/group-feat-start/topic-love.svg"
              alt
            >
            <p>
              เรื่องราวความรักและ
              <br>มุมมองต่อความรักหลายรูปแบบ
            </p>
          </div>
          <div class="topic-col col-sm-4">
            <img
              @click="selectTopic('life')"
              :class="{'selected': topic=='life'}"
              src="~/assets/images/group-feat-start/topic-life.svg"
              alt
            >
            <p>
              เรื่องราวต่างๆที่เกิดขึ้นรอบตัว
              <br>ในชีวิตประจำวัน
            </p>
          </div>
          <div class="topic-col col-sm-4">
            <img
              @click="selectTopic('dream')"
              :class="{'selected': topic=='dream'}"
              src="~/assets/images/group-feat-start/topic-dream.svg"
              alt
            >
            <p>
              เรื่องราวเกี่ยวกับความฝัน
              <br>และการตั้งเป้าหมาย
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="header-con">
      <div class="in-header">
        <h4>players</h4>
        <p>เพื่อนร่วมวงสนทนาของคุณ</p>
      </div>
    </div>
    <div class="content-bg">
      <div class="player-con content-con">
        <div v-for="(player,i) in players" :key="i" class="player-col">
          <div class="player-row">
            <img v-show="player.pic" v-bind:src="player.pic" alt>
            <img v-show="!player.pic" alt>
            <!-- <input
              :class="{'odd' : i % 2 == 0, 'even' : i % 2 == 1, 'player-input': true}"
              v-model="player.name"
              type="text"
            >-->
            <!-- <select ref="select" class="selectpicker" data-live-search="true">
              <option data-tokens="ketchup mustard">Hot Dog, Fries and a Soda</option>
              <option data-tokens="mustard">Burger, Shake and a Smile</option>
              <option data-tokens="frosting">Sugar, Spice and all things nice</option>
            </select>-->

            <input
              :class="{'odd' : i % 2 == 0, 'even' : i % 2 == 1, 'player-input': true}"
              list="browsers"
              v-model="player.name"
              @change="nameChange(player.name,i)"
              :disabled="i==0 || player.id"
            >
            <datalist id="browsers">
              <option v-for="friend in activeFriends" v-bind:key="friend.id">{{friend.name}}</option>
            </datalist>
            <button
              :disabled="players.length <= 1 || i == 0"
              :class="{'disabled' : players.length <= 1 || i == 0}"
              @click="removePlayer(i)"
            >x</button>
          </div>
        </div>
        <button
          :disabled="players.length > friends.length"
          :class="{'disabled': players.length > friends.length}"
          @click="addPlayer()"
        >+</button>
      </div>
    </div>
    <div class="header-con">
      <div class="in-header">
        <h4>location</h4>
        <p>สถานที่ในการสนทนา</p>
      </div>
    </div>
    <div class="content-bg">
      <div class="content-con">
        <div class="location-row">
          <img src="~/assets/images/group-feat-start/ins-3.svg" alt>
          <input v-model="location" type="text">
        </div>
      </div>
    </div>
    <div class="header-con">
      <div class="in-header">
        <h4>photo</h4>
        <p>รูปถ่ายของคุณและเพื่อนร่วมบทสนทนา</p>
      </div>
    </div>
    <div class="content-bg">
      <div class="content-con">
        <div class="photo-con">
          <div @click="$refs.input.click()" class="photo-add">
            <div v-if="!photo">+</div>
            <img v-else :src="photo">
          </div>
          <input @change="onFileChange($event)" type="file" accept="image/*" ref="input">
        </div>
      </div>
    </div>
    <div class="button-bg">
      <div class="button-con">
        <button @click="start()" class="btn-out">
          <div class="btn-in">
            <p>start</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import CircleNumber from "~/components/boxes/CircleNumber";
import CommonButton from "~/components/button/CommonButton";
import * as firebase from "firebase/app";
export default {
  components: {
    CircleNumber,
    CommonButton
  },
  data: () => ({
    topic: null,
    players: [
      {
        name: ""
      }
    ],
    location: "",
    photo: null,
    image: false,
    uploadTask: "",
    friends: [],
    activeFri: new Set(),
    activeFriends: [],
    isRender: false
  }),
  mounted() {
    if (this.$store.state.newauth != null) {
      this.players.pop();
      this.players.push({
        name: this.$store.state.newauth.name,
        id: this.$store.state.newauth.id,
        pic: this.$store.state.newauth.picture.data.url
      });
      this.friends = this.$store.state.newauth.friends.data;
      this.activeFriends = this.$store.state.newauth.friends.data;
    }
  },
  // updated() {
  //   $(this.$refs.select).selectpicker("refresh");
  // },
  watch: {
    isRender: function() {
      this.activeFriends = this.friends.filter(f => !this.activeFri.has(f.id));
    }
  },
  methods: {
    selectTopic(topic) {
      this.topic = topic;
    },
    addPlayer() {
      this.players.push({ name: "" });
    },
    removePlayer(i) {
      this.activeFri.delete(this.players[i].id);
      this.isRender = !this.isRender;
      if (this.players.length > 1) {
        this.players.splice(i, 1);
      }
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      // this.photo = files[0];
      this.upload(files[0]);
    },
    upload(file) {
      const fileType = file.type.split("/")[1];
      let randomNumber = ~~(Math.random() * 1000000);
      this.uploadTask = firebase
        .storage()
        .ref()
        .child(`group-feat-cover/${randomNumber}.${fileType}`)
        .put(file);
      this.uploadTask.then(snapshot => {
        snapshot.ref.getDownloadURL().then(url => {
          this.photo = url;
        });
      });
    },

    createImage(file) {
      let image = new Image();
      let reader = new FileReader();

      reader.onload = e => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    start() {
      let err = "";
      if (this.topic == null) err += "กรุณาเลือกหัวข้อ\n";
      this.players.map((player, i) => {
        if (!player.id) err += `กรุณาเลือกผู้เล่นคนที่ ${i + 1} ใหม่\n`;
      });
      if (err != "") {
        alert(err);
        return;
      }
      let data = {
        type: this.$route.query.type,
        topic: this.topic,
        players: this.players,
        location: this.location,
        photo: this.photo
      };
      this.initController();
      this.$store.commit("SET_GROUPFEAT_DATA", data);
      return this.$router.push({
        path: "/group-feat/story",
        query: {
          type: data.type,
          topic: data.topic,
          q: 1
        }
      });
    },
    initController() {
      let questions = this.$store.state.groupFeatQuestions[
        this.$route.query.type
      ][this.topic];
      let remainingQuestions = [];
      for (let i = 0; i < questions.length; i++) {
        remainingQuestions.push(i);
      }
      const random_index = Math.floor(
        Math.random() * remainingQuestions.length
      );
      const currentQuestion = questions[random_index];
      this.$store.commit("INIT_GROUPFEAT_CONTROLLER", {
        questions,
        remainingQuestions,
        random_index,
        currentQuestion,
        currentPlayer: 0
      });
    },
    nameChange(name, i) {
      this.friends.map((friend, idx) => {
        if (friend.name == name) {
          let friend_data = {
            name: friend.name,
            id: friend.id,
            pic: friend.picture.data.url
          };
          this.players[i] = friend_data;
          this.activeFri.add(friend.id);
          this.isRender = !this.isRender;
          this.players.push({ name: "" });
          this.players.pop();
        }
      });
      return;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.start-page {
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

  .instruction-con-bg {
    background: linear-gradient(
      to right,
      $ci-white 0%,
      $ci-white 50%,
      $smoker-red 50%,
      $smoker-red 100%
    );
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
    .instruction-con {
      background-color: $light-red;
      border-top-right-radius: 40px;
      border-bottom-left-radius: 40px;
      padding: 40px 80px;
      padding-bottom: 1px;

      @media (max-width: $screen-xs-max) {
        padding: 40px 20px;
      }

      .instruction {
        background-color: $ci-white;
        padding: 20px 40px;
        @media (max-width: $screen-xs-max) {
          padding: 20px;
        }
        border-radius: 40px;
        h4 {
          text-align: center;
          font-family: "RunWild";
          font-size: 60px;
          @media (max-width: $screen-xs-max) {
            font-size: 48px;
          }
          color: $dark-blue;
          margin-bottom: 20px;
        }

        .col-3 {
        }

        .col-5 {
          padding-left: 10px;
          padding-right: 10px;
        }

        .ins-row {
          align-items: center;

          .circle-col {
            display: flex;
            flex-flow: column;
            align-items: center;
          }

          .ins {
            font-family: "Sukhumvit-SemiBold";
            color: $font-dark-blue;
            font-size: 22px;
            text-align: center;
            @media (max-width: $screen-xs-max) {
              font-size: 16px;
            }
          }

          .img-col {
            display: flex;
            flex-flow: column;
            align-items: center;
            padding-right: 15px;
            .img-1 {
              width: 80%;
            }
            .img-2 {
              width: 80%;
            }

            .img-3 {
              width: 50%;
            }

            .img-4 {
              width: 50%;
            }
          }
        }

        .line-row {
          .line-col {
            display: flex;
            flex-flow: column;
            align-items: center;

            .line {
              width: 1px;
              height: 80px;
              border-left: 3px solid $line-red;
              @media (max-width: $screen-xs-max) {
                height: 50px;
              }
            }
          }
        }
      }
    }
  }

  .topic-bg {
    background-color: $light-red;
    .topic-con {
      background-color: $ci-white;
      border-top-right-radius: 40px;
      border-bottom-left-radius: 40px;
      padding: 20px 80px;

      .row {
        .topic-col {
          display: flex;
          flex-flow: column;
          align-items: center;

          img {
            cursor: pointer;
            width: 60%;
            margin-bottom: 20px;

            &.selected {
              border: 4px solid $dark-blue;
            }
          }

          p {
            text-align: center;
            font-family: "Sukhumvit-SemiBold";
            color: $font-black-blue;
            font-size: 14px;
          }
        }
      }
    }
  }

  .header-con {
    background-color: $ci-white;
  }
  .in-header {
    padding: 20px 0;
    background-color: $light-red;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    h4 {
      text-align: center;
      font-family: "Chonburi";
      color: $line-red;
      font-size: 40px;
      margin-bottom: 10px;
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

      .player-row {
        margin: 5px 0;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        img {
          width: 39px;
          height: 39px;
          border-radius: 50%;
        }
        .player-input {
          width: 300px;
          height: 39px;
          font-family: "Chonburi";
          color: $font-black-blue-2;
          text-align: center;
          border: none;
          padding: 8px 0;
          border-radius: 30px;
          display: flex;
          flex-flow: row;
          align-items: center;
          &.odd {
            background-color: $ci-light-blue;
            border: 1px solid $ci-light-blue;
          }

          &.even {
            background-color: $ci-blue;
            border: 1px solid $ci-blue;
          }
          transition-duration: 0.2s;
          margin: 0 5px;

          &:focus {
            background-color: white;
            transition-duration: 0.2s;
          }
          &:hover {
            background-color: white;
            transition-duration: 0.2s;
          }
        }
        button {
          height: 39px;
          width: 39px;
          border-radius: 50%;
          color: $line-red;
          font-family: "Sukhumvit-Bold";
          font-size: 25px;
          margin: 0;

          &.disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
      }

      .location-row {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;

        img {
          height: 40px;
        }

        input {
          font-family: "Chonburi";
          color: $font-black-blue-2;
          text-align: center;
          border: none;
          padding: 8px 0;
          border-radius: 30px;
          border: 1px solid $ci-light-blue;
          transition-duration: 0.2s;
          height: 30px;
        }
      }

      button {
        margin-top: 5px;
        border-radius: 50%;
        width: 39px;
        height: 39px;
        font-family: "Sukhumvit-Bold";
        font-size: 25px;
        line-height: 1;
        color: $font-black-blue-2;
        background-color: $light-red;
        border: none;
        cursor: pointer;
        &.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

      .photo-con {
        .photo-add {
          border: 4px solid $ci-light-blue;
          height: 256px;
          width: 256px;
          display: flex;
          flex-flow: row;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border-radius: 20px;
          z-index: 1;
          overflow: hidden;

          div {
            margin-top: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 39px;
            height: 39px;
            font-family: "Sukhumvit-Bold";
            font-size: 25px;
            line-height: 1;
            color: $line-red;
            background-color: $light-red;
            border: none;
          }

          img {
            height: 100%;
            overflow: hidden;
            z-index: 0;
          }
        }

        input {
          display: none;
        }
      }
    }
  }

  .button-bg {
    background-color: $ci-white;
    .button-con {
      padding: 40px 0;
      background-color: $light-red;
      border-top-right-radius: 40px;
      display: flex;
      flex-flow: row;
      justify-content: center;
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

.ant-select {
  > .ant-select-selection {
    background: none;
    border: none !important;
    box-shadow: none !important;
    width: 100%;

    &:focus {
      border: none;
      box-shadow: none;
    }
  }
}
</style>


