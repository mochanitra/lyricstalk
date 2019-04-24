<template>
  <div class="group-feat-page">
    <div class="header-bg">
      <div class="header">
        <h1>group feat</h1>
      </div>
    </div>
    <div class="intro-bg">
      <div class="intro-con">
        <div class="intro-chat-all">
          <img class="chat-top" src="~/assets/images/decoration/top-chat.svg" alt>
          <div class="intro-chat">
            <p>เริ่มบทสนทนาผ่านเกมที่จะใช้เนื้อเพลง นำไปสู่การพูดคุย สร้างความทรงจำและบทสนทนาที่มีความหมายร่วมกัน</p>
          </div>
        </div>
        <!-- <div class="amp-con">
          <img src="~/assets/images/decoration/amp-from-left.svg" alt>
        </div>-->
      </div>
    </div>
    <div class="conver-bg">
      <div class="conver-con">
        <h2>3 conversation games</h2>
      </div>
    </div>
    <div class="have-you-ever-bg">
      <div class="have-you-ever-con left-con">
        <div class="header">
          <h4>have you ever ... ?</h4>
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
            <p class="head">คุณเคยมั้ย... กับเรื่องราวเหล่านี้</p>
            <p
              class="content"
            >พาให้คุณทำความรู้จักกันมากขึ้นผ่านคำถามที่จะทำให้รู้จักเรื่องราวที่ผ่านมาของกันและกัน</p>
            <img class="chat-bottom" src="~/assets/images/decoration/top-chat.svg" alt>
          </div>
        </div>
        <div class="button-con">
          <button @click="selectType('have-you-ever')" class="btn-out">
            <div class="btn-in">
              <p>start</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="if-i-were-con right-con">
      <div class="header">
        <h4>If I were ...</h4>
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
          <p class="head">ถ้าเป็นเรา จะทำอย่างไรดี ...</p>
          <p class="content">ชวนกันคิดว่าถ้าหากจะต้องเจอสถานการณ์แบบในเพลงเหล่านี้ เราจะทำยังไง</p>
          <img class="chat-bottom" src="~/assets/images/decoration/top-chat.svg" alt>
        </div>
        <img class="cd" src="~/assets/images/decoration/cd-right.svg" alt>
      </div>
      <div class="button-con">
        <button @click="selectType('if-i-were')" class="btn-out">
          <div class="btn-in">
            <p>start</p>
          </div>
        </button>
      </div>
    </div>
    <div class="cadm-con left-con">
      <div class="header">
        <h4>
          couldn’t agree
          <br>/ disagree more
        </h4>
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
          <p class="head">เห็นด้วยหรือไม่เห็นด้วย</p>
          <p
            class="content"
          >เปิดโอกาสให้ได้แสดงความคิดเห็นต่อเนื้อเพลง ว่ามีมุมมองที่เหมือนหรือต่างออกไปอย่างไร</p>
          <img class="chat-bottom" src="~/assets/images/decoration/top-chat.svg" alt>
        </div>
      </div>
      <div class="button-con">
        <button @click="selectType('cadm')" class="btn-out">
          <div class="btn-in">
            <p>start</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import CommonButton from "~/components/button/CommonButton";
export default {
  components: {
    CommonButton
  },
  methods: {
    selectType(type) {
      this.$store.commit("SET_GROUPFEAT_TYPE", type);
      if (!this.$store.state.newauth) {
        return this.$router.push({
          path: "/login",
          query: {
            redirect: "/group-feat"
          }
        });
      }
      return this.$router.push({
        path: "/group-feat/start",
        query: {
          type: type
        }
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

.have-you-ever-bg {
  background-color: $ci-white;
  .have-you-ever-con {
    background-color: $smoker-red;
  }
}

.cadm-con {
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
        font-family: "Sukhumvit";
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
  &.if-i-were-con {
    background-color: $ci-blue;
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
        font-family: "Sukhumvit";
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
  width: 240px;
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


