<template>
  <div class="soundtrack-of-you-page">
    <div class="header-bg">
      <div class="header">
        <h1>soundtrack of you</h1>
      </div>
    </div>
    <div class="instruction-con-bg">
      <div class="instruction-con">
        <div class="instruction">
          <h4>instruction</h4>
          <div class="ins-row row">
            <div class="circle-col col-2">
              <CircleNumber class="circle" :number="1"/>
            </div>
            <div class="col-5">
              <p class="ins">เลือกคำถาม</p>
            </div>
            <div class="img-col col-5 col-sm-3 offset-sm-1">
              <img class="img-1" src="~/assets/images/instruction/ins_1.svg" alt>
            </div>
          </div>
          <div class="line-row row">
            <div class="line-col col-5 offset-2">
              <div class="line"></div>
            </div>
          </div>
          <div class="ins-row row">
            <div class="circle-col col-2">
              <CircleNumber class="circle" :number="2"/>
            </div>
            <div class="col-5">
              <p class="ins">ฟังเพลง</p>
            </div>
            <div class="img-col col-5 col-sm-3 offset-sm-1">
              <img class="img-2" src="~/assets/images/instruction/ins_2.svg" alt>
            </div>
          </div>
          <div class="line-row row">
            <div class="line-col col-5 offset-2">
              <div class="line"></div>
            </div>
          </div>
          <div class="ins-row row">
            <div class="circle-col col-2">
              <CircleNumber class="circle" :number="3"/>
            </div>
            <div class="col-5">
              <p class="ins">เลือกคำตอบ</p>
            </div>
            <div class="img-col col-5 col-sm-3 offset-sm-1">
              <img class="img-3" src="~/assets/images/instruction/ins_3.svg" alt>
            </div>
          </div>
          <div class="line-row row">
            <div class="line-col col-5 offset-2">
              <div class="line"></div>
            </div>
          </div>
          <div class="ins-row row">
            <div class="circle-col col-2">
              <CircleNumber class="circle" :number="4"/>
            </div>
            <div class="col-5">
              <p class="ins">ให้เหตุผล</p>
            </div>
            <div class="img-col col-5 col-sm-3 offset-sm-1">
              <img class="img-4" src="~/assets/images/instruction/ins_4.svg" alt>
            </div>
          </div>
        </div>
        <div class="button-con">
          <button @click="createQuiz()" class="btn-out">
            <div class="btn-in">
              <p>start</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CircleNumber from "~/components/boxes/CircleNumber";
import CommonButton from "~/components/button/CommonButton";
export default {
  components: {
    CircleNumber,
    CommonButton
  },
  methods: {
    createQuiz() {
      if (this.$store.state.newauth) {
        return this.$router.push({
          path: "/soundtrack-of-you/create"
        });
      }
      return this.$router.push({
        path: "/login",
        query: {
          redirect: "/soundtrack-of-you/create"
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.soundtrack-of-you-page {
  width: 100vw;

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
  .instruction-con-bg {
    background-color: $dark-red;
    .instruction-con {
      background-color: $light-red;
      border-top-right-radius: 40px;
      padding: 40px 80px;
      display: flex;
      flex-flow: column;
      align-items: center;

      @media (max-width: $screen-xs-max) {
        padding: 40px 20px;
      }

      .instruction {
        background-color: $ci-white;
        padding: 20px 40px;
        max-width: 500px;
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
              width: 110%;
            }
            .img-2 {
              width: 50%;
            }

            .img-3 {
              width: 100%;
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

      .button-con {
        display: flex;
        justify-content: center;
        padding-top: 40px;
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


