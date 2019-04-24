<template>
  <div>
    <div class="header-bg">
      <div class="header">
        <h1>soundtrack of you</h1>
      </div>
    </div>
    <div class="quiz-bg">
      <div class="quiz-con">
        <div class="item-con">
          <div class="number-con">
            <CircleNumber class="circle" :number="q"/>
          </div>
          <p class="think">
            คิดว่า
            <span>{{quiz.name}}</span> จะเลือกคำตอบไหน?
          </p>
          <QuestionItem
            @selectSong="(index) => $store.commit('SET_QUIZ_ANSWER', {
                    item: +q,
                    answerIndex: index
                })"
            :selected-question="$store.state.questions.find(x => x.id === quiz.quiz[+q - 1].selectedSongId)"
            :key="this.q"
            :isAnswer="true"
            :answerIndex="answerIndex"
          />
          <div class="why-bg">
            <div class="why-con">
              <div class="why-arrow">
                <img
                  @click="goBack()"
                  v-if="q>1 && !finish"
                  class="left"
                  src="~/assets/images/decoration/soy/arrow.svg"
                  alt
                >
                <img
                  v-else
                  class="disabled"
                  src="~/assets/images/decoration/soy/arrow-disabled.svg"
                  alt
                >
                <input
                  type="text"
                  @change="$store.commit('SET_QUIZ_ANSWER_WHY', {
                    item: +q,
                    why: why
                })"
                  v-model="why"
                  placeholder="why ?"
                >
                <img
                  v-if="!finish"
                  @click="saveAndGoNext()"
                  class="right"
                  src="~/assets/images/decoration/soy/arrow.svg"
                  alt
                >
                <img
                  v-else
                  class="disabled left"
                  src="~/assets/images/decoration/soy/arrow-disabled.svg"
                  alt
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <nuxt-link :to="localePath(getPath)"> -->
    <!-- </nuxt-link> -->
  </div>
</template>

<script>
import QuestionItem from "~/components/QuestionItem";
import CircleNumber from "~/components/boxes/CircleNumber";
import * as FBSE from "~/services/auth";
export default {
  components: {
    QuestionItem,
    CircleNumber
  },
  data: () => ({
    why: null,
    answerIndex: null,
    finish: false
  }),
  watch: {
    "$route.query.q"(newVal, oldVal) {
      this.answerIndex = null;
      console.log(newVal);
      if (
        this.$store.state.quizTaker.answers[newVal].answer != null &&
        this.$store.state.quizTaker.answers[newVal].why != null
      ) {
        console.log(`${newVal} is true`);
        this.answerIndex = this.$store.state.quizTaker.answers[newVal].answer;
        this.why = this.$store.state.quizTaker.answers[newVal].why;
      } else {
        this.why = null;
      }
    }
  },
  async asyncData({ params, store }) {
    // Get quizSlug
    const slug = params.quizSlug;
    const quiz = await store.dispatch("api/getQuiz", {
      slug
    });
    // console.log(quiz)
    store.commit("SET_LOADED_QUIZ", Object.values(quiz)[0]);
    return {
      quiz: Object.values(quiz)[0],
      key: Object.keys(quiz)[0]
    };
  },
  computed: {
    q() {
      if (process.browser) {
        window.scroll(0, 0);
      }
      return this.$route.query.q;
    },
    getPath() {
      // if +this.q === 5
      if (+this.q === 5) {
        return {
          name: "quiz-quizSlug-showanswer",
          params: {
            quizSlug: this.quiz.slug
          }
        };
      }
      return {
        name: "quiz-quizSlug-answer",
        params: {
          quizSlug: this.quiz.slug
        },
        query: {
          q: +this.q + 1
        }
      };
    }
  },

  methods: {
    async saveAndGoNext() {
      // save answer to firebase
      let err = "";

      if (this.$store.state.quizTaker.answers[+this.q].answer == null) {
        err += "กรุณาตอบคำถาม\n";
      }

      if (
        this.$store.state.quizTaker.answers[+this.q].why == null ||
        this.$store.state.quizTaker.answers[+this.q].why.replace(/\s/g, "") ==
          ""
      ) {
        err += "กรุณาให้เหตุผล\n";
      }

      if (err != "") {
        alert(err);
        return;
      }
      // ต้องเซฟที่
      if (+this.q === 5) {
        this.finish = true;
        const quizKey = this.$route.params.quizSlug; // -> momo-292
        const answerKey =
          this.$store.state.quizTaker.taker.name.replace(/\s/g, "") +
          "-" +
          ~~(Math.random() * 1000); // meme-193
        const res = await FBSE.saveUserAnswer(this.key, this.quiz.owner.id, {
          answerKey,
          taker: this.$store.state.quizTaker.taker,
          answers: this.$store.state.quizTaker.answers
        });
        console.log(res);
        // const res = await this.$axios.$post(`https://lyricstalk-1fb09.firebaseio.com/`)
        // go next page
        return this.$router.push(
          this.localePath({
            name: "quiz-quizSlug-showanswer-slug",
            params: {
              quizSlug: this.quiz.slug,
              slug: res
            }
          })
        );
      }

      return this.$router.push({
        name: this.$route.name,
        params: {
          quizSlug: this.quiz.slug
        },
        query: {
          q: +this.q + 1
        }
      });
    },
    async goBack() {
      return this.$router.push({
        name: this.$route.name,
        params: {
          quizSlug: this.quiz.slug
        },
        query: {
          q: +this.q - 1
        }
      });
    }
  }

  // methods: {
  //     async submitAnswer () {
  //         const slug = this.name + '-' + ~~(Math.random() * 1000)
  //         this.$store.commit('SET_QUIZ_ANSWER_NAME', {
  //           name: this.name,
  //         })
  //         const res = await this.$axios.$post(`https://lyricstalk-1fb09.firebaseio.com/quizes.json`, this.$store.state.quizTaker)

  //         window.alert(`Share URL: https://lyricstalk.co/quiz/${slug}`)
  //     }

  // },
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

.quiz-bg {
  background-color: $dark-red;

  .quiz-con {
    background-color: $light-red;
    border-top-right-radius: 40px;
    padding: 30px 0;

    .item-con {
      display: flex;
      flex-flow: column;
      align-items: center;

      .number-con {
        margin-bottom: 20px;
      }

      .think {
        font-family: "Chonburi";
        color: $font-black-blue-4;
        font-size: 24px;
        text-align: center;
        @media (max-width: $screen-xs-max) {
          font-size: 12px;
        }
        span {
          color: $line-red;
        }
        margin-bottom: 20px !important;
      }
    }
  }
}

.why-bg {
  width: 100%;
  max-width: 1188px;
  background-color: $line-red;
  .why-con {
    padding: 30px 0;
    background-color: $light-red;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-top-right-radius: 40px;
  }

  input {
    width: 90%;
    @media (max-width: $screen-xs-max) {
      width: 80%;
    }
    border: none;
    background-color: $ci-white;
    border-radius: 40px;
    padding: 7px 15px;
    font-family: "Sukhumvit";
    color: $why;
    line-height: 1.5;
  }

  .why-arrow {
    width: 95%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    img {
      height: 30px;

      &.left {
        transform: rotate(180deg);
      }

      &.disabled {
        cursor: initial;
      }
    }
  }
}
</style>

