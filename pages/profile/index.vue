<template>
  <div>
    <div class="header-bg">
      <div class="header-con">
        <div class="name-con">
          <img class="profile-pic" v-bind:src="$store.state.newauth.picture.data.url" alt>
          <div class="name-status">
            <p class="name">{{$store.state.newauth.name}}</p>
            <p class="lyrics">lyrics status</p>
            <div class="status-con">
              <input
                type="text"
                v-model="status"
                :style="{width: `${(status.length + 1) * 6}px`,minWidth: '200px'}"
              >
              <img class="chat-top" src="~/assets/images/decoration/top-chat.svg" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-bg">
      <div class="profile-con">
        <div class="soy-con">
          <div class="head-con">
            <h4 class="soy">
              soundtrack
              <br>
              <span class="soy-head">of you</span>
            </h4>
            <img class="music-tab" src="~/assets/images/decoration/profile/music-tab-soy.svg" alt>
            <div v-if="$store.state.windowWidth <= 576" class="pic-con">
              <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
              <div class="pic">
                <img
                  v-if="$store.state.newauth.quizesList"
                  v-bind:src="$store.state.newauth.quizesList[Object.keys($store.state.newauth.quizesList)[0]].cover"
                  alt
                >
              </div>
            </div>
            <nuxt-link
              v-if="$store.state.newauth.quizesList"
              :to="`/soundtrack-of-you/result/${$store.state.newauth.quizesList[Object.keys($store.state.newauth.quizesList)[0]].slug}`"
              class="btn-out"
            >
              <div class="btn-in">
                <p>see quiz</p>
              </div>
            </nuxt-link>
            <button v-else class="btn-out">
              <div class="btn-in">
                <p>see quiz</p>
              </div>
            </button>
          </div>
          <div v-if="$store.state.windowWidth > 576" class="pic-con">
            <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
            <div class="pic">
              <img
                v-if="$store.state.newauth.quizesList"
                v-bind:src="$store.state.newauth.quizesList[Object.keys($store.state.newauth.quizesList)[0]].cover"
                alt
              >
            </div>
          </div>
        </div>
        <img
          v-if="$store.state.windowWidth > 576"
          class="amp-left"
          src="~/assets/images/decoration/amp-from-left-desktop.svg"
          alt
        >
        <img v-else class="amp-left" src="~/assets/images/decoration/amp-from-left-mobile.svg" alt>
        <div class="md-con">
          <div v-if="$store.state.windowWidth > 576" class="large-pic-con">
            <div class="row">
              <div class="col-6">
                <div class="pic-con">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <div class="pic">
                    <img alt>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="pic-con">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <div class="pic">
                    <img alt>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="pic-con">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <div class="pic">
                    <img alt>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="pic-con">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <div class="pic">
                    <img alt>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="head-con">
            <h4 class="md">
              music
              <br>
              <span class="soy-head">discussion</span>
            </h4>
            <img class="music-tab" src="~/assets/images/decoration/profile/music-tab-md.svg" alt>
            <div v-if="$store.state.windowWidth <= 576" class="large-pic-con">
              <div class="row">
                <div class="col-6">
                  <div class="pic-con">
                    <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                    <div class="pic">
                      <img alt>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pic-con">
                    <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                    <div class="pic">
                      <img alt>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pic-con">
                    <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                    <div class="pic">
                      <img alt>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pic-con">
                    <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                    <div class="pic">
                      <img alt>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn-out">
              <div class="btn-in">
                <p>see vote</p>
              </div>
            </button>
          </div>
        </div>
        <img
          v-if="$store.state.windowWidth > 576"
          class="amp-right"
          src="~/assets/images/decoration/amp-from-right-desktop.svg"
          alt
        >
        <img
          v-else
          class="amp-right"
          src="~/assets/images/decoration/amp-from-right-mobile.svg"
          alt
        >
        <div class="gf-con">
          <div class="head-con">
            <h4 class="gf">group feat</h4>
            <img class="music-tab" src="~/assets/images/decoration/profile/music-tab-gf.svg" alt>
            <div v-if="$store.state.windowWidth <= 576" class="large-pic-con">
              <div class="row">
                <div class="col-6">
                  <div class="pic-con">
                    <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                    <div class="pic">
                      <img alt>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pic-con">
                    <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                    <div class="pic">
                      <img alt>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pic-con">
                    <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                    <div class="pic">
                      <img alt>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pic-con">
                    <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                    <div class="pic">
                      <img alt>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn-out">
              <div class="btn-in">
                <p>see feat.</p>
              </div>
            </button>
          </div>
          <div v-if="$store.state.windowWidth > 576" class="large-pic-con">
            <div class="row">
              <div class="col-6">
                <div class="pic-con">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <div class="pic">
                    <img alt>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="pic-con">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <div class="pic">
                    <img alt>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="pic-con">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <div class="pic">
                    <img alt>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="pic-con">
                  <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                  <div class="pic">
                    <img alt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sign-out-con">
      <button @click="signOut()" class="red-btn-out">
        <div class="btn-in">
          <p>Log out</p>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import * as FBSE from "~/services/auth";
export default {
  data: () => ({
    status: ""
  }),
  mounted() {
    if (!this.$store.state.newauth) {
      return this.$router.push({
        path: "/"
      });
    }
  },
  methods: {
    signOut() {
      let fb = FBSE.facebookSignOut();
      fb.then(() => {
        // Sign-out successful.
        this.$store.commit("SET_AUTH", null);
        this.$store.commit("SET_NEWAUTH", null);
        this.user = { photoURL: null };
        return this.$router.push({
          path: "/"
        });
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";

.header-bg {
  background-color: $ci-white;

  .header-con {
    background-color: $ci-light-blue;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .name-con {
      padding: 15px 0;
      display: flex;
      flex-flow: row;
      align-items: center;

      .profile-pic {
        height: 80px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .name-status {
        display: flex;
        flex-flow: column;
        align-items: center;

        .name {
          font-family: "Chonburi";
          color: $font-black-blue;
        }

        .lyrics {
          font-family: "RunWild";
          color: $font-black-blue;
          line-height: 1.4;
        }

        .status-con {
          margin-top: 10px;
          position: relative;
          input {
            border-radius: 40px;
            border: none;
            background-color: $ci-white;
            padding: 5px 10px;
            font-family: "Sukhumvit-SemiBold";
            font-size: 12px;
            line-height: 1.5;
          }

          img {
            position: absolute;
            height: 10px;
            bottom: 97%;
            left: 48%;
          }
        }
      }
    }
  }
}

.profile-bg {
  background-color: $ci-light-blue;
  .profile-con {
    padding: 30px 0;
    background-color: $ci-white;
    border-top-right-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    h4 {
      font-family: "RunWild";
      text-align: center;
      font-size: 60px;
      line-height: 0.5;

      &.soy {
        color: #c98d85;

        span {
          font-size: 40px;
          margin-left: 90px;
        }
      }

      &.md {
        color: $home-blue;

        span {
          font-size: 40px;
          margin-left: 90px;
        }
      }

      &.gf {
        color: $line-red;
      }
    }

    .music-tab {
      margin-top: 30px;
      margin-bottom: 10px;
      width: 250px;
      flex-basis: 1%;
    }

    .pic-con {
      position: relative;
      display: flex;
      flex-flow: row;
      align-items: center;
      height: 200px;
      width: 50%;
      @media (max-width: $screen-xs-max) {
        width: auto;
        margin-bottom: 20px;
      }

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
        }
      }
    }

    .large-pic-con {
      width: 50%;
      @media (max-width: $screen-xs-max) {
        width: 80%;
        min-width: 320px;
        margin-bottom: 20px;
      }

      .row {
        margin: 0;
      }

      .col-6 {
        padding: 0;
        @media (max-width: $screen-xs-max) {
          display: flex;
          flex-flow: column;
          align-items: center;
        }
      }
      .pic-con {
        width: 100%;
        height: 100px;
        margin: 10px 0;
        @media (max-width: $screen-xs-max) {
          width: auto;
        }

        .cd-left {
          height: 85px;
          width: 46px;
          margin-left: 6px;
        }

        .pic {
          height: 100px;
          width: 100px;
          margin-left: -6px;
          z-index: 1;
          overflow: hidden;
        }
      }
    }

    .soy-con {
      padding: 20px 30px;
      @media (max-width: $screen-sm-max) {
        padding: 20px 10px;
        padding-bottom: 50px;
      }
      @media (max-width: $screen-xs-max) {
        flex-flow: column;
        align-items: center;
      }
      padding-bottom: 50px;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
    }

    .md-con {
      padding: 20px 30px;
      @media (max-width: $screen-sm-max) {
        padding: 20px 10px;
        padding-bottom: 50px;
      }
      @media (max-width: $screen-xs-max) {
        flex-flow: column;
        align-items: center;
      }
      padding-bottom: 50px;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
    }

    .gf-con {
      padding: 20px 30px;
      @media (max-width: $screen-sm-max) {
        padding: 20px 10px;
        padding-bottom: 50px;
      }
      @media (max-width: $screen-xs-max) {
        flex-flow: column;
        align-items: center;
      }
      padding-bottom: 50px;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
    }

    .head-con {
      width: 50%;
      @media (max-width: $screen-xs-max) {
        width: 100%;
      }
      display: flex;
      flex-flow: column;
      align-items: center;
    }

    .amp-left {
      align-self: flex-start;
      width: 90%;
      margin-left: -1px;
    }

    .amp-right {
      align-self: flex-end;
      width: 90%;
      margin-right: -1px;
    }
  }
}
.sign-out-con {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: $ci-white;
}
.btn-out {
  cursor: pointer;
  padding: 6px;
  width: 280px;
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
  margin: 10px auto;
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
