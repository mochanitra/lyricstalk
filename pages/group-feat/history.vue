<template>
  <div v-if="$store.state.newauth">
    <div class="header-bg">
      <div class="header">
        <h1>group feat</h1>
      </div>
    </div>
    <div class="header-con">
      <div class="in-header">
        <h4>history</h4>
      </div>
    </div>
    <div class="friends-bg">
      <div class="friends-con">
        <div v-if="$store.state.newauth['group-feat']" class="friend-row">
          <div v-for="(item,i) in $store.state.newauth['group-feat']" :key="i" class="friend-col">
            <nuxt-link class="nuxt-col" :to="'/group-feat/result?key=' + i">
              <div class="location-row row">
                <div class="pic-col col-4">
                  <img class="img-3" src="~/assets/images/group-feat-start/ins-3.svg" alt>
                </div>
                <div class="data-col col-8">
                  <p class="location">{{item.location}}</p>
                  <p class="date">{{moment(item.date)}}</p>
                </div>
              </div>
              <div class="pic-con">
                <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
                <div class="pic">
                  <img v-if="item.photo" v-bind:src="item.photo" alt>
                </div>
              </div>
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
import moment from "moment";
export default {
  data: () => ({}),
  watch: {
    "$store.state.newauth"() {}
  },
  mounted() {},
  methods: {
    moment(date) {
      return moment(date).format("DD MMM YYYY");
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

.location-row {
  width: 100%;

  .pic-col {
    padding: 0 5px;
  }
  .data-col {
    padding: 0;
    padding-left: 10px;
    .location {
      font-family: "Sukhumvit-Bold";
      color: $dark-blue;
      font-size: 18px;
      text-align: center;
    }

    .date {
      font-family: "Sukhumvit-Light";
      color: $dark-blue;
      font-size: 18px;
      text-align: center;
    }
  }
}

.header-con {
  background: linear-gradient(
    to right,
    $ci-white 0%,
    $ci-white 50%,
    $smoke-red 50%,
    $smoke-red 100%
  );
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
