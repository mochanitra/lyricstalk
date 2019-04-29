<template>
  <div class="instruction-page">
    <div class="header-bg">
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
      class="instruction-bg"
      :class="{'have-you-ever': $route.query.type == 'have-you-ever', 'if-i-were': $route.query.type == 'if-i-were', 'cadm': $route.query.type == 'cadm'}"
    >
      <div class="instruction-con">
        <div class="instruction">
          <h4>instruction</h4>
          <div class="instruction-row">
            <div class="btn-left">
              <img
                v-if="page > 1"
                @click="page-=1"
                src="~/assets/images/group-feat-start/instruction/btn-left.svg"
                alt
              >
            </div>
            <div class="content-con">
              <div v-if="page == 1" class="content one">
                <p class="bold">ระบบจะสุ่มชื่อผู้เล่นและเพลงสำหรับตอบคำถาม</p>
                <img src="~/assets/images/group-feat-start/instruction/i1.svg" alt>
              </div>
              <div v-else-if="page == 2" class="content two">
                <p class="bold">ผู้เล่นคนนั้น ตอบคำถามจากเพลง</p>
                <p class="semibold">โดยผู้เล่นคนอื่นสามารถถามต่อและพูดคุยกันได้อย่างอิสระ</p>
                <p class="bold">เมื่อจบบทสนทนา กด react</p>
                <img src="~/assets/images/group-feat-start/instruction/i2.svg" alt>
              </div>
              <div v-else-if="page == 3" class="content three">
                <p class="react">react</p>
                <p class="semibold">ผู้เล่นคนอื่น ให้ reaction สำหรับคำตอบ</p>
                <div class="react-row">
                  <div class="react-col">
                    <img src="~/assets/images/group-feat-start/react-01.svg">
                    <p class="semibold">
                      ว่าแล้ว
                      <br>ไม่แปลกใจ
                      <br>รู้อยู่แล้ว
                    </p>
                  </div>
                  <div class="react-col">
                    <img src="~/assets/images/group-feat-start/react-02.svg">
                    <p class="semibold">
                      จริงหรอ
                      <br>เพิ่งเคยรู้
                    </p>
                  </div>
                  <div class="react-col">
                    <img src="~/assets/images/group-feat-start/react-03.svg">
                    <p class="semibold">
                      OMG
                      <br>ไม่น่าเชื่อ !!!
                    </p>
                  </div>
                </div>
              </div>
              <div v-else-if="page == 4" class="content four">
                <p class="semibold">กด next เพื่อเริ่มคำถามถัดไป</p>
                <img src="~/assets/images/group-feat-start/instruction/i31.svg" alt>
                <hr>
                <p class="semibold">เมื่อต้องการจบเกม กด end game</p>
                <img src="~/assets/images/group-feat-start/instruction/i32.svg" alt>
                <hr>
                <p class="semibold">สามารถดูหน้าสรุปผลลัพธ์ของเกมแต่ละครั้งได้</p>
              </div>
            </div>
            <div class="btn-right">
              <img
                v-if="page < 4"
                @click="page+=1"
                src="~/assets/images/group-feat-start/instruction/btn-left.svg"
                alt
              >
            </div>
          </div>
          <div class="dots">
            <div :class="{'active': page == 1}"/>
            <div :class="{'active': page == 2}"/>
            <div :class="{'active': page == 3}"/>
            <div :class="{'active': page == 4}"/>
          </div>
        </div>
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
export default {
  data: () => ({
    page: 1
  }),
  methods: {
    start() {
      return this.$router.push({
        path: "/group-feat/story",
        query: {
          type: this.$route.query.type,
          topic: this.$route.query.topic,
          q: 1
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
    $smoker-red 50%,
    $smoker-red 100%
  );
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
.instruction-bg {
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

  .instruction-con {
    background-color: $light-red;
    padding: 20px 0;
    border-top-right-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .instruction {
      background-color: $ci-white;
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 20px;
      border-radius: 20px;
      margin-bottom: 20px;
      width: 430px;

      h4 {
        font-family: "RunWild";
        color: $dark-blue;
        font-size: 48px;
      }

      .instruction-row {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 10px 0;
        min-height: 240px;

        .btn-left {
          width: 20px;
          margin-right: 10px;
          img {
            width: 20px;
            cursor: pointer;
          }
        }

        .content-con {
          display: flex;
          flex-flow: column;
          align-items: center;

          .content {
            display: flex;
            flex-flow: column;
            align-items: center;
            .bold {
              font-family: "Sukhumvit-Bold";
              color: $font-dark-blue;
              text-align: center;
            }

            .semibold {
              font-family: "Sukhumvit-SemiBold";
              color: $font-dark-blue;
              text-align: center;
              font-size: 16px;
            }

            &.one {
              img {
                width: 80%;
              }
            }

            &.two {
              .semibold {
                margin-bottom: 30px !important;
              }

              img {
                width: 60%;
              }
            }

            &.three {
              .react {
                font-family: "Chonburi";
                color: $line-red;
                font-size: 28px;
              }

              .react-row {
                margin-top: 10px;
                padding: 0 10px;
                display: flex;
                flex-flow: row;
                align-items: flex-start;
                justify-content: space-between;
                .react-col {
                  display: flex;
                  flex-flow: column;
                  align-items: center;
                  margin: 0 5px;

                  img {
                    width: 60px;
                    height: 60px;
                  }
                }
              }
            }

            &.four {
              img {
                width: 60%;
              }

              hr {
                margin-top: 20px;
                border: none;
                border-bottom: 2px solid $line-red;
                width: 120px;
              }
            }
          }
        }

        .btn-right {
          width: 20px;
          margin-left: 10px;
          img {
            width: 20px;
            transform: rotate(180deg);
            cursor: pointer;
          }
        }
      }

      .dots {
        display: flex;
        flex-flow: row;
        align-items: center;
        margin-top: 10px;
        div {
          width: 5px;
          height: 5px;
          background-color: $smoker-red;
          opacity: 0.5;
          border-radius: 50%;
          margin: 0 5px;

          &.active {
            opacity: 1;
          }
        }
      }
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
</style>
