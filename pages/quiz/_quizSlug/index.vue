<template>
  <div class="quiz-index">
    <div class="header-bg">
      <div class="header">
        <h1>soundtrack of you</h1>
      </div>
    </div>
    <div class="playlist-bg">
      <div class="playlist-con">
        <div class="share-con">
          <p class="name">{{quiz.name}}</p>
          <div class="pic-con">
            <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
            <div class="pic">
              <img v-bind:src="quiz.cover" alt>
            </div>
          </div>
          <p class="sub-detail">มาทายคำตอบของ {{quiz.name}} กันเถอะ</p>
          <nuxt-link
            v-if="$store.state.newauth"
            :to="localePath({
                    name: 'quiz-quizSlug-answer',
                    params: {
                        quizSlug: quiz.slug
                    },
                    query: {
                        q: 1
                    }
                })"
            class="btn-out"
          >
            <div class="btn-in">
              <p>start</p>
            </div>
          </nuxt-link>
          <button v-else @click="toAnswer()" class="btn-out">
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
export default {
  async asyncData({ params, store }) {
    // Get quizSlug
    const slug = params.quizSlug;
    const quiz = await store.dispatch("api/getQuiz", {
      slug
    });
    // console.log(quiz);
    return {
      quiz: Object.values(quiz)[0]
    };
  },
  data: () => ({
    name: null,
    taker: {
      name: "",
      id: "",
      picture: ""
    }
  }),
  watch: {
    "$store.state.newauth"() {
      const newauth = this.$store.state.newauth;
      this.taker = {
        name: newauth.name,
        id: newauth.id,
        picture: newauth.picture
      };
      this.$store.commit("SET_QUIZ_ANSWER_TAKER", this.taker);
    }
  },
  mounted() {
    if (this.$store.state.newauth) {
      const newauth = this.$store.state.newauth;
      this.taker = {
        name: newauth.name,
        id: newauth.id,
        picture: newauth.picture
      };
    }
    this.$store.commit("SET_QUIZ_ANSWER_TAKER", this.taker);
  },
  methods: {
    toAnswer() {
      return this.$router.push({
        path: "/login",
        query: {
          redirect: `quiz/${this.quiz.slug}`
        }
      });
    }
  },
  head() {
    return {
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: `มาทายคำตอบของเราในควิซกันเถอะ`
        },
        {
          hid: "og:image",
          property: "og:image",
          content: require("assets/images/background/og-fb.png")
        }
      ]
    };
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

.playlist-bg {
  background-color: $dark-red;

  .playlist-con {
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
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 30px 0;
  .name {
    font-family: "Chonburi";
    font-size: 28px;
    text-align: center;
  }
}

.pic-con {
  margin-top: 20px;
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
      min-width: 100%;
    }
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

.sub-detail {
  margin-top: 20px;
  font-family: "Sukhumvit-SemiBold";
  color: $font-black-blue;
  @media (max-width: $screen-xs-max) {
    font-size: 14px;
    margin-top: 0px;
  }
}
</style>
