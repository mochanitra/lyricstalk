<template>
  <div class="home-page">
    <div class="main-bg">
      <div class="main-con">
        <img class="brand-logo" src="~/assets/images/brand/logo-white.svg" alt>
        <img class="music-tab" src="~/assets/images/decoration/music_tab.svg" alt>
        <p>
          ชวนคุณมาสัมผัสประสบการณ์การพูดคุย แลกเปลี่ยนความคิด
          <br>มุมมองและทัศนคติต่อเรื่องราวต่างๆของชีวิตผ่านเนื้อเพลง
        </p>
      </div>
    </div>
    <div class="deep-bg">
      <div class="deep-con">
        <div class="deep-talk">
          <img class="q-left" src="~/assets/images/decoration/home/quote-left.svg" alt>
          <p>
            Deep conversation with
            <br>good topic is priceless.
          </p>
          <img class="q-right" src="~/assets/images/decoration/home/quote-right.svg" alt>
        </div>
        <hr>
      </div>
    </div>
    <div class="meaning-bg">
      <div class="meaning-con">
        <div class="meaning-row left">
          <div class="meaning-left">
            <p class="head">Lyrics</p>
            <p v-if="counter == 0" class="subhead">is story.</p>
            <p v-else-if="counter == 1" class="subhead">is life.</p>
            <p v-else-if="counter == 2" class="subhead">is expression.</p>
            <p v-else class="subhead">is question.</p>
            <p
              class="desc"
            >‘ เนื้อเพลงแต่ละเพลงนั้นล้วนถ่ายทอดเรื่องราว หรือมีประเด็นและแง่มุมที่น่าสนใจมากกว่าที่คิด '</p>
          </div>
          <img src="~/assets/images/decoration/cd-left.svg" alt>
        </div>
        <div class="meaning-row right">
          <img src="~/assets/images/decoration/home/chat-half.svg" alt>
          <div class="meaning-right">
            <p
              class="desc"
            >‘ นำไปสู่การพูดคุยกันอย่างลึกซึ้ง เกิดการแลกเปลี่ยนมุมมองและทัศนคติรวมถึงการเรียนรู้ซึ่งกันและกัน ’</p>
            <p class="head">Deep talk</p>
            <p v-if="counter == 0" class="subhead">is meaningful.</p>
            <p v-else-if="counter == 1" class="subhead">is discussion.</p>
            <p v-else-if="counter == 2" class="subhead">is sharing moment.</p>
            <p v-else class="subhead">is relationship.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="soy-bg">
      <div class="soy-con left-con">
        <div class="header">
          <h4>soundtrack of you</h4>
          <img src="~/assets/images/decoration/music_tab.svg" alt>
        </div>
        <div class="amp-con">
          <img
            v-if="$store.state.windowWidth > 576"
            src="~/assets/images/decoration/amp-from-left-desktop.svg"
            alt
          >
          <img v-else src="~/assets/images/decoration/amp-from-left-mobile.svg" alt>
        </div>
        <div class="cd-con">
          <img class="cd" src="~/assets/images/decoration/cd-left.svg" alt>
          <div class="chat-con">
            <!-- <img class="cd" src="~/assets/images/decoration/cd-left.svg" alt> -->
            <p
              class="content"
            >อธิบายความเป็นคุณ ด้วยการสร้างชุดคำถาม 5 ข้อ ที่ใช้ท่อนหนึ่งของบทเพลงในการตอบ</p>
            <img class="chat-bottom" src="~/assets/images/decoration/top-chat.svg" alt>
          </div>
        </div>
        <div class="button-con">
          <button class="btn-out">
            <div class="btn-in">
              <p>create quiz</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="md-con right-con">
      <div class="header">
        <h4>music discussion</h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
      <div class="amp-con">
        <img
          v-if="$store.state.windowWidth > 576"
          src="~/assets/images/decoration/white-amp-from-right-desktop.svg"
          alt
        >
        <img v-else src="~/assets/images/decoration/white-amp-from-right-mobile.svg" alt>
      </div>
      <div class="cd-con">
        <div class="chat-con">
          <!-- <img class="cd" src="~/assets/images/decoration/cd-left.svg" alt> -->
          <p
            class="content"
          >ร่วมแสดงความคิดเห็น และมุมมองของคุณในประเด็นต่างๆต่อเนื้อเพลงจากศิลปินมากมาย</p>
          <img class="chat-bottom" src="~/assets/images/decoration/top-chat.svg" alt>
        </div>
        <img class="cd" src="~/assets/images/decoration/cd-right.svg" alt>
      </div>
      <div class="button-con">
        <button class="btn-out">
          <div class="btn-in">
            <p>explore topic</p>
          </div>
        </button>
      </div>
    </div>
    <div class="gf-con left-con">
      <div class="header">
        <h4>group feat.</h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
      <div class="amp-con">
        <img
          v-if="$store.state.windowWidth > 576"
          src="~/assets/images/decoration/white-amp-from-left-desktop.svg"
          alt
        >
        <img v-else src="~/assets/images/decoration/white-amp-from-left-mobile.svg" alt>
      </div>
      <div class="cd-con">
        <img class="cd" src="~/assets/images/decoration/cd-left.svg" alt>
        <div class="chat-con">
          <!-- <img class="cd" src="~/assets/images/decoration/cd-left.svg" alt> -->
          <p
            class="content"
          >เริ่มบทสนทนาผ่านเกมที่จะใช้เนื้อเพลง นำไปสู่การพูดคุย สร้างความทรงจำและบทสนทนาที่มีความหมายร่วมกัน</p>
          <img class="chat-bottom" src="~/assets/images/decoration/top-chat.svg" alt>
        </div>
      </div>
      <div class="button-con">
        <button class="btn-out">
          <div class="btn-in">
            <p>start</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    interval: "",
    counter: 0
  }),
  mounted() {
    this.todo();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    todo() {
      this.interval = setInterval(() => {
        this.counter = this.counter + 1;
        if (this.counter == 4) this.counter = 0;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/variables";
.main-bg {
  background-color: $ci-white;
}
.main-con {
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  padding: 30px 0;
  background-image: url("~/assets/images/background/home-bg.jpg");
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
  align-items: center;

  .brand-logo {
    width: 30%;
    @media (max-width: $screen-xs-max) {
      width: 60%;
    }
    margin-bottom: 20px;
  }

  .music-tab {
    width: 35%;
    @media (max-width: $screen-xs-max) {
      width: 55%;
    }
    margin-bottom: 20px;
  }

  p {
    font-family: "Sukhumvit-SemiBold";
    color: white;
    text-align: center;
    @media (max-width: $screen-xs-max) {
      font-size: 12px;
    }
  }
}

.deep-bg {
  background: linear-gradient(
    to left,
    #384c66 0%,
    #384c66 50%,
    $home-blue 50%,
    $home-blue 100%
  );
  .deep-con {
    padding: 20px 0;
    padding-bottom: 10px;
    background-color: $ci-white;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    .deep-talk {
      position: relative;
      width: 360px;
      margin-bottom: 10px;
      @media (max-width: $screen-xs-max) {
        width: 240px;
      }
      .q-left {
        height: 12px;
        @media (max-width: $screen-xs-max) {
          height: 8px;
        }
        position: absolute;
        left: 0;
      }
      p {
        font-family: "Chonburi";
        text-align: center;
        font-size: 20px;
        color: $font-black-blue-3;
        @media (max-width: $screen-xs-max) {
          font-size: 14px;
        }
      }

      .q-right {
        height: 12px;
        @media (max-width: $screen-xs-max) {
          height: 8px;
        }
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    hr {
      border-bottom: 2px solid $line-red;
      width: 100px;
    }
  }
}

.meaning-bg {
  background: linear-gradient(
    to left,
    $ci-white 0%,
    $ci-white 50%,
    $light-red 50%,
    $light-red 100%
  );
  .meaning-con {
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    padding: 30px 0;
    @media (max-width: $screen-xs-max) {
      padding: 20px 0;
    }
    background: linear-gradient(
      to right,
      $home-blue 0%,
      $home-blue 50%,
      $line-red 50%,
      $line-red 100%
    );
    display: flex;
    flex-flow: row;
    align-items: center;

    .meaning-row {
      display: flex;
      flex-flow: row;
      align-items: center;
      width: 50%;
      position: relative;

      &.left {
        img {
          height: 140px;
          position: absolute;
          right: 0;
          width: 73px;
          margin-right: -1px;
          @media (max-width: $screen-xs-max) {
            height: 72px;
            width: 38px;
            margin-right: -2px;
          }
        }
      }

      &.right {
        img {
          height: 152px;
          margin-top: 6px;
          position: absolute;
          left: 0;
          @media (max-width: $screen-xs-max) {
            height: 78px;
            margin-top: 3px;
          }
        }
      }
    }

    .meaning-left {
      padding-left: 50px;
      @media (max-width: $screen-sm-max) {
        padding-left: 20px;
      }
      @media (max-width: $screen-xs-max) {
        padding-left: 10px;
      }
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      position: relative;

      .desc {
        text-align: left;
      }
    }

    .meaning-right {
      padding-right: 50px;
      @media (max-width: $screen-sm-max) {
        padding-right: 20px;
      }

      @media (max-width: $screen-xs-max) {
        padding-right: 10px;
      }
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      position: relative;

      .desc {
        text-align: right;
      }
    }

    .head {
      font-family: "Chonburi";
      color: white;
      font-size: 40px;
      @media (max-width: $screen-sm-max) {
        font-size: 32px;
      }
      @media (max-width: $screen-xs-max) {
        font-size: 16px;
      }
      line-height: 1;
    }

    .subhead {
      font-family: "Chonburi";
      color: $font-black-blue;
      font-size: 24px;
      @media (max-width: $screen-sm-max) {
        font-size: 20px;
      }
      @media (max-width: $screen-xs-max) {
        font-size: 12px;
      }
    }

    .desc {
      width: 75%;
      font-family: "Sukhumvit-SemiBold";
      color: white;
      @media (max-width: $screen-sm-max) {
        width: 60%;
        font-size: 14px;
      }
      @media (max-width: $screen-xs-max) {
        width: 70%;
        font-size: 10px;
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
    $light-red 50%,
    $light-red 100%
  );
  .header {
    background-color: $smoke-red;
    padding: 20px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    @media (max-width: $screen-xs-max) {
      padding: 15px 0;
    }
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

.intro-bg {
  background: linear-gradient(
    to right,
    $ci-white 0%,
    $ci-white 50%,
    $smoke-red 50%,
    $smoke-red 100%
  );
  .intro-con {
    background-color: $light-red;
    padding: 20px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    .intro-chat-all {
      margin: 0 80px;
      display: flex;
      flex-flow: column;
      @media (max-width: $screen-xs-max) {
        margin: 0 20px;
      }

      .chat-top {
        height: 20px;
      }

      .intro-chat {
        padding: 40px 80px;
        border-radius: 20px;
        background-color: $ci-white;
        @media (max-width: $screen-xs-max) {
          padding: 20px 40px;
        }
        p {
          color: $font-black-blue;
          font-family: "Sukhumvit-SemiBold";
          text-align: center;
          @media (max-width: $screen-xs-max) {
            font-size: 12px;
          }
        }
      }
    }

    .amp-con {
      margin-top: 30px;
      //   margin-bottom: 20px;
      img {
        width: 90%;
      }
    }
  }
}

.conver-bg {
  background: linear-gradient(
    to right,
    $smoker-red 0%,
    $smoker-red 50%,
    $light-red 50%,
    $light-red 100%
  );
  .conver-con {
    padding: 20px 0;
    background-color: $ci-white;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    h2 {
      font-family: "Chonburi";
      color: $line-red;
      font-size: 36px;
      text-align: center;
      @media (max-width: $screen-xs-max) {
        font-size: 22px;
      }
    }
  }
}

.soy-bg {
  background-color: $line-red;
  .soy-con {
    background-color: $light-red;
    border-top-right-radius: 40px;

    h4 {
      color: $dark-red !important;
    }
  }
}

.gf-con {
  background-color: $line-red;
}

.left-con {
  &.have-you-ever-con {
    border-top-right-radius: 40px;
  }
  padding: 40px;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: $screen-xs-max) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .header {
    margin-bottom: 10px;
    margin-left: 20px;
    h4 {
      font-family: "Chonburi";
      color: $ci-white;
      font-size: 36px;
      margin-bottom: 20px;
      @media (max-width: $screen-sm-max) {
        font-size: 32px;
      }
      @media (max-width: $screen-xs-max) {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }

    img {
      width: 40%;
      @media (max-width: $screen-xs-max) {
        width: 70%;
      }
    }
  }

  .amp-con {
    position: relative;
    margin-left: -33px;
    width: 100vw;

    img {
      position: absolute;
      width: 95%;
    }
  }

  .cd-con {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    position: relative;
    // padding-right: 8vw;
    margin-top: 90px;
    @media (max-width: $screen-xs-max) {
      margin-top: 60px;
    }
    //   padding-bottom: 20px;
    .cd {
      // width: 15%;
      height: 180px;
      width: 97px;
      @media (max-width: $screen-xs-max) {
        height: 90px;
        width: 48px;
      }
    }

    .chat-con {
      position: relative;
      height: 200px;
      width: 60%;
      margin-left: -6px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      background-color: $ci-white;
      padding: 10px 20px;
      border-radius: 20px;
      @media (max-width: $screen-xs-max) {
        width: 80%;
        height: 110px;
      }
      // height: 90px;
      .head {
        font-family: "Sukhumvit-Bold";
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 10px;
        margin-bottom: 5px;

        @media (max-width: $screen-xs-max) {
          font-size: 0.8rem;
        }
      }

      .content {
        font-family: "Sukhumvit-SemiBold";
        font-size: 1.3rem;
        text-align: center;
        @media (max-width: $screen-xs-max) {
          font-size: 0.7rem;
        }
      }
    }

    .chat-bottom {
      position: absolute;
      transform: rotate(180deg);
      height: 20px;
      top: 99%;
      right: 80px;
      @media (max-width: $screen-xs-max) {
        height: 15px;
        right: 60px;
      }
    }
  }

  .button-con {
    margin-top: 40px;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    padding-right: 80px;
    @media (max-width: $screen-xs-max) {
      padding-right: 0;
      margin-top: 25px;
    }

    .start-button {
      width: 280px;
    }
  }
}

.right-con {
  &.md-con {
    background-color: $ci-blue;
    h4 {
      color: #2b4349 !important;
    }
  }
  padding: 40px;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: $screen-xs-max) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .header {
    margin-bottom: 10px;
    margin-right: 20px;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    h4 {
      font-family: "Chonburi";
      color: $ci-white;
      font-size: 36px;
      margin-bottom: 20px;
      text-align: right;
      @media (max-width: $screen-sm-max) {
        font-size: 32px;
      }
      @media (max-width: $screen-xs-max) {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }

    img {
      width: 40%;
      @media (max-width: $screen-xs-max) {
        width: 70%;
      }
    }
  }

  .amp-con {
    position: relative;
    width: 100vw;
    margin-left: -30px;

    img {
      position: absolute;
      width: 95%;
      right: 0;
    }
  }

  .cd-con {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    position: relative;
    // padding-right: 8vw;
    margin-top: 90px;
    @media (max-width: $screen-xs-max) {
      margin-top: 60px;
    }
    //   padding-bottom: 20px;
    .cd {
      // width: 15%;
      height: 180px;
      width: 97px;
      margin-left: -6px;
      @media (max-width: $screen-xs-max) {
        height: 90px;
        width: 48px;
      }
    }

    .chat-con {
      position: relative;
      height: 200px;
      width: 60%;
      margin-left: -6px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      background-color: $ci-white;
      padding: 10px 20px;
      border-radius: 20px;
      @media (max-width: $screen-xs-max) {
        width: 80%;
        height: 110px;
      }
      // height: 90px;
      .head {
        font-family: "Sukhumvit-Bold";
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 10px;
        @media (max-width: $screen-xs-max) {
          margin-bottom: 5px;
          font-size: 0.8rem;
        }
      }

      .content {
        font-family: "Sukhumvit-SemiBold";
        font-size: 1.3rem;
        text-align: center;
        @media (max-width: $screen-xs-max) {
          font-size: 0.7rem;
        }
      }
    }

    .chat-bottom {
      position: absolute;
      transform: rotate(180deg);
      height: 20px;
      top: 99%;
      left: 80px;
      @media (max-width: $screen-xs-max) {
        height: 15px;
        left: 60px;
      }
    }
  }

  .button-con {
    margin-top: 40px;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    padding-left: 80px;
    @media (max-width: $screen-xs-max) {
      padding-left: 0;
      margin-top: 25px;
    }

    .start-button {
      width: 280px;
    }
  }
}

.btn-out {
  cursor: pointer;
  padding: 6px;
  width: 300px;
  height: 60px;
  background-color: $dark-blue;
  border-radius: 40px;
  border: none;
  transition-duration: 0.3s;
  @media (max-width: $screen-xs-max) {
    width: 180px;
    height: 40px;
    padding: 4px;
  }
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
    @media (max-width: $screen-xs-max) {
      font-size: 0.7rem;
      height: 32px;
    }
    p {
      font-family: "Chonburi";
      color: white;
      font-size: 28px;
      line-height: 1;
      @media (max-width: $screen-xs-max) {
        font-size: 18px;
      }
    }
  }
}
</style>
