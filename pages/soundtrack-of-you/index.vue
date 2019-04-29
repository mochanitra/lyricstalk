<template>
  <div>
    <div class="header-bg">
      <div class="header">
        <h1>soundtrack of you</h1>
      </div>
    </div>
    <div class="intro-bg">
      <div class="intro-con">
        <div class="intro-chat-all">
          <img class="chat-top" src="~/assets/images/decoration/top-chat.svg" alt>
          <div class="intro-chat">
            <p class="head">‘ What song relates you the most ?’</p>
            <p
              class="content"
            >การสร้าง Quiz ด้วยชุดคำถาม Deep conversation 5 ข้อ แล้วตอบด้วยท่อนหนึ่งของเนื้อเพลงที่อธิบายความเป็นคุณได้ดีที่สุด</p>
          </div>
        </div>
        <nuxt-link to="/soundtrack-of-you/instruction" class="btn-out">
          <div class="btn-in">
            <p>create quiz</p>
          </div>
        </nuxt-link>
        <!-- <div class="amp-con">
          <img src="~/assets/images/decoration/amp-from-left.svg" alt>
        </div>-->
      </div>
    </div>
    <div class="artist-header-bg">
      <div class="artist-header-con">
        <div class="amp-con">
          <img
            v-if="$store.state.windowWidth > 576"
            src="~/assets/images/decoration/amp-from-left-desktop.svg"
            alt
          >
          <img v-else src="~/assets/images/decoration/amp-from-left-mobile.svg" alt>
        </div>
        <div class="artist-header">
          <h4>
            example
            <br>of questions
          </h4>
        </div>
      </div>
    </div>
    <div class="exam-bg">
      <div class="exam-con">
        <div class="exam-row">
          <div class="exam-col">
            <img src="~/assets/images/decoration/soy/love.svg" alt>
            <p class="desc">
              คำถามเกี่ยวกับเรื่องราวความรัก
              <br>มุมมองต่อความรักหลายรูปแบบ
            </p>
            <p class="exam">รักแรกพบ สำหรับคุณเป็นอย่างไร ?</p>
          </div>
          <div class="exam-col">
            <img src="~/assets/images/decoration/soy/mind.svg" alt>
            <p class="desc">
              คำถามเกี่ยวกับอารมณ์ ความรู้สึก
              <br>และเรื่องราวของจิตใจ
            </p>
            <p class="exam">เวลารู้สึกท้อ จะให้กำลังใจตัวเองแบบไหน ?</p>
          </div>
          <div class="exam-col">
            <img src="~/assets/images/decoration/soy/chill.svg" alt>
            <p class="desc">
              คำถามสนุกๆ ชวนให้ลองคิดตาม
              <br>และเรื่องราวต่างๆในชีวิต
            </p>
            <p class="exam">ถ้าเลือกมีพลังวิเศษได้ 1 อย่าง อยากมีพลังอะไร ?</p>
          </div>
        </div>
      </div>
    </div>
    <div class="artist-header-bg">
      <div class="artist-header-con">
        <div class="amp-con">
          <img
            v-if="$store.state.windowWidth > 576"
            class="right"
            src="~/assets/images/decoration/amp-from-right-desktop.svg"
            alt
          >
          <img class="right" v-else src="~/assets/images/decoration/amp-from-right-mobile.svg" alt>
        </div>
        <div class="artist-header">
          <h4>
            soundtrack
            <br>of friends
          </h4>
        </div>
      </div>
    </div>
    <div class="friends-bg">
      <div class="friends-con">
        <div class="friend-row">
          <div v-for="(item,i) in friendsList" :key="i" class="friend-col">
            <nuxt-link class="nuxt-col" :to="'/quiz/' + item.slug">
              <div class="pic-con">
                <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                <div class="pic">
                  <img v-bind:src="item.cover" alt>
                </div>
              </div>
              <p class="name">{{item.owner.name}}</p>
            </nuxt-link>
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
    friendsList: {}
  }),
  watch: {
    "$store.state.newauth"() {
      this.getFriendsList();
    }
  },
  mounted() {
    if (this.$store.state.newauth) {
      this.getFriendsList();
    }
  },
  methods: {
    async getFriendsList() {
      const res = await this.$axios.get(
        "https://lyricstalk-1fb09.firebaseio.com/user.json"
      );
      this.friendsList = await this.checkFriend(res.data);
    },
    checkFriend(data) {
      let friendsList = {};
      for (let i = 0; i < this.$store.state.newauth.friends.data.length; i++) {
        let id = this.$store.state.newauth.friends.data[i].id;
        // console.log(id);
        if (data[id]) {
          // console.log(data[id]);
          let quiz;
          if (data[id].quizesList) {
            let qList = data[id].quizesList;
            for (let key in qList) {
              if (qList.hasOwnProperty(key)) quiz = qList[key];
            }
            friendsList[id] = quiz;
          }
        }
      }

      return friendsList;
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
    background-color: $dark-red;
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

.intro-bg {
  background: linear-gradient(
    to right,
    $ci-white 0%,
    $ci-white 50%,
    $dark-red 50%,
    $dark-red 100%
  );
  .intro-con {
    background-color: $light-red;
    padding: 20px 0;
    border-top-right-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    // border-bottom-left-radius: 40px;
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

.artist-header-bg {
  background-color: $ci-white;
  .artist-header-con {
    padding: 20px 0;
    background-color: $light-red;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .amp-con {
      align-self: flex-end;
      display: flex;
      flex-flow: column;
      align-items: center;
      img {
        align-self: flex-start;
        margin-left: -2px;

        &.right {
          align-self: flex-end;
          margin-right: -2px;
        }
      }
    }

    .artist-header {
      margin-top: -30px;
      margin-bottom: 10px;
      h4 {
        text-align: center;
        font-family: "Chonburi";
        color: $line-red;
        font-size: 40px;
      }
    }
  }
}

.exam-bg {
  background-color: $light-red;
  .exam-con {
    background-color: $ci-white;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    padding: 20px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    .exam-row {
      display: flex;
      flex-flow: row;
      align-items: flex-start;
      width: 748px;
      @media (max-width: $screen-sm-max) {
        flex-flow: column;
        align-items: center;
        width: 100%;
        padding: 0 10px;
      }

      .exam-col {
        flex: 1;
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 0 10px;
        @media (max-width: $screen-sm-max) {
          width: 300px;
          margin: 10px 0;
        }

        img {
          width: 150px;
        }

        .desc {
          text-align: center;
          font-family: "Sukhumvit-SemiBold";
          color: $soy-blue;
          font-size: 16px;
          margin: 10px 0 !important;
        }

        .exam {
          text-align: center;
          font-family: "Sukhumvit-SemiBold";
          color: $font-black-blue;
          width: 100%;
          border: 1px solid $soy-blue;
          padding: 2px 0;
          border-radius: 20px;
          font-size: 11px;
          @media (max-width: $screen-sm-max) {
            font-size: 12px;
          }
        }
      }
    }
  }
}

.friends-bg {
  background-color: $light-red;
  .friends-con {
    background-color: $ci-white;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px 30px;
    .friend-row {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: flex-start;
      .friend-col {
        padding: 0 10px;
        margin: 10px 0;
        flex-basis: 25%;
        @media (max-width: $screen-md) {
          flex-basis: 50%;
          padding: 0;
        }
        display: flex;
        flex-flow: column;
        align-items: center;
        .nuxt-col {
          cursor: pointer;
          display: flex;
          flex-flow: column;
          align-items: center;
        }
        .pic-con {
          //   margin-top: 20px;
          position: relative;
          display: flex;
          flex-flow: row;
          align-items: center;
          height: 150px;
          margin-left: 0px;
          margin-bottom: 10px;
          @media (max-width: $screen-md) {
            width: auto;
            height: 90px;
            margin-left: 0px;
          }

          .cd-left {
            height: 100px;
            width: 53px;
            margin-left: 6px;
            z-index: 0;
            @media (max-width: $screen-md) {
              height: 78px;
              width: 42px;
            }
          }

          .pic {
            height: 120px;
            width: 120px;
            // background-color: $line-red;
            border-radius: 20px;
            margin-left: -6px;
            z-index: 1;
            overflow: hidden;
            display: flex;
            flex-flow: column;
            align-items: center;
            @media (max-width: $screen-md) {
              height: 90px;
              width: 90px;
              z-index: 1;
            }

            img {
              height: 100%;
              min-width: 100%;
            }
          }
        }

        .name {
          font-family: "Sukhumvit-Bold";
          color: $font-black-blue-4;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
}

.dummy-bg {
  background-color: $ci-white;

  .dummy-con {
    background-color: $light-red;
    padding: 30px 0;
    border-top-right-radius: 40px;
  }
}

.btn-out {
  margin-top: 20px;
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

.amp-con {
  position: relative;
  width: 100vw;

  img {
    width: 90%;
  }
}
</style>
