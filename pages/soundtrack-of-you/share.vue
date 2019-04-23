<template>
  <div class="share-page">
    <div class="header-bg">
      <div class="header">
        <h1>soundtrack of you</h1>
      </div>
    </div>
    <div class="share-bg">
      <div class="share-inner">
        <div class="share-con">
          <p class="name">{{$store.state.newauth.name}}</p>
          <div class="pic-con">
            <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
            <div class="pic">
              <img v-bind:src="$store.state.myQuiz.cover" alt>
            </div>
          </div>
          <div class="share-btn-con">
            <p class="share-sub">- Share to -</p>
            <social-sharing
              v-bind:url="copymessage"
              title="มาเริ่มต้นบทสนทนากันเถอะ"
              hashtags="lyricstalk"
              inline-template
            >
              <div class="share-btn-row">
                <network network="facebook">
                  <div class="share-btn fb">
                    <img src="~/assets/images/brand/fb-white.svg" alt>
                  </div>
                </network>
                <network network="twitter">
                  <div class="share-btn twit">
                    <img src="~/assets/images/brand/twitter.svg" alt>
                  </div>
                </network>
              </div>
            </social-sharing>
          </div>
          <div class="share-btn-con">
            <p class="share-sub">- URL -</p>
            <div class="copy-con">
              <button v-clipboard="copymessage" class="copy-btn">
                <div class="btn-in">
                  <p>copy link</p>
                  <p></p>
                </div>
              </button>
              <div class="copy-link-con">
                <p class="copy-link">{{copymessage}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    copymessage: `https://lyricstalk.co/quiz/`
  }),
  mounted() {
    if (this.$store.state.myQuiz.slug) {
      this.copymessage = `https://lyricstalk.co/quiz/${
        this.$store.state.myQuiz.slug
      }`;
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

.share-bg {
  background-color: $dark-red;

  .share-inner {
    padding: 30px 0;
    min-height: calc(100vh - 268px);
    background-color: $light-red;
    border-top-right-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
}

.share-con {
  margin: 20px 0;
  background-color: $ci-white;
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 30px 30px;
  @media (max-width: $screen-xs-max) {
    padding: 30px 10px;
    width: 100vw;
  }
  border-radius: 30px;
  .name {
    font-family: "Chonburi";
    font-size: 28px;
    text-align: center;
  }
}

.pic-con {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 200px;
  margin-left: -97px;
  @media (max-width: $screen-xs-max) {
    width: auto;
    margin-bottom: 20px;
    height: 150px;
    margin-left: -72px;
  }

  .cd-left {
    height: 180px;
    width: 97px;
    margin-left: 6px;
    z-index: 0;
    @media (max-width: $screen-xs-max) {
      height: 127px;
      width: 72px;
    }
  }

  .pic {
    height: 200px;
    width: 200px;
    // background-color: $line-red;
    border-radius: 20px;
    margin-left: -6px;
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;
    @media (max-width: $screen-xs-max) {
      height: 150px;
      width: 150px;
      z-index: 1;
    }

    img {
      height: 100%;
      z-index: 0;
    }
  }
}

.share-btn-row {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 5px;

  .share-btn {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 50%;
    margin: 0 5px;

    &.fb {
      background-color: $fb;
    }
    &.twit {
      background-color: $twitter;
    }
    img {
      height: 20px;
      width: 20px;
    }
  }
}

.share-btn-con {
  margin: 10px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.copy-con {
  display: flex;
  flex-flow: row;
  align-items: center;
  position: relative;

  .copy-link-con {
    padding-left: 105px;
    padding-right: 15px;
    background-color: white;
    border-radius: 30px;
    border: 1px solid $light-red;
    @media (max-width: $screen-xs-max) {
      padding-left: 65px;
    }
  }

  .copy-link {
    font-family: "Sukhumvit-SemiBold";
    font-size: 14px;
    color: $font-black-blue-3;
    @media (max-width: $screen-xs-max) {
      font-size: 9px;
      padding: 2px 0;
    }
  }
}

.copy-btn {
  position: absolute;
  cursor: pointer;
  padding: 3px;
  width: 100px;
  @media (max-width: $screen-xs-max) {
    width: 60px;
    height: 24px;
  }
  height: 30px;
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
    height: 24px;
    @media (max-width: $screen-xs-max) {
      height: 18px;
    }
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.3s;
    p {
      font-family: "Sukhumvit-Bold";
      color: white;
      font-size: 14px;
      line-height: 1;
      @media (max-width: $screen-xs-max) {
        font-size: 10px;
      }
    }
  }
}

.share-sub {
  font-family: "Sukhumvit-Bold";
  color: $dark-blue;
  font-size: 14px;
}
</style>
