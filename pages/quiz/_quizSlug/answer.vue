<template>
  <div class="_w-100pct bgcl">
    <div class="container">
      <div class="row">
        <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-32px">
          <img class="_h-64px" :src="`/images/number${q}.png`">
        </div>
      </div>

      <div class="row">
        <div class="col-12 _pdt-32px _dp-f _fdrt-cl _alit-ct">
          <h3>คิดว่า {{quiz.name}} จะเลือกคำตอบไหน ?</h3>
        </div>
      </div>

      <div class="row _jtfct-ct">
        <div class="_bgs-ct _bgrp-nrp _bgpst-ct _pdt-32px _pdbt-16px">
          <QuestionItem
            @selectSong="(index) => $store.commit('SET_QUIZ_ANSWER', {
                    item: +q,
                    answerIndex: index
                })"
            :selected-question="$store.state.questions.find(x => x.id === quiz.quiz[+q - 1].selectedSongId)"
            :key="this.q"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 _pdt-32px _pdbt-8px _dp-f _fdrt-cl _alit-ct">
          <h3>เพราะอะไร ?</h3>
        </div>
      </div>

      <div class="row _jtfct-ct _pdt-16px _pdbt-64px">
        <div class="col-2"></div>

        <div class="col-8">
          <div class="bio-input">
            <input
              type="text"
              @change="$store.commit('SET_QUIZ_ANSWER_WHY', {
                    item: +q,
                    why: why
                })"
              v-model="why"
              placeholder="why ?"
            >
          </div>
        </div>

        <div class="col-2 _dp-f _fdrt-cl _alit-fe">
          <!-- <nuxt-link :to="localePath(getPath)"> -->
          <img @click="saveAndGoNext()" class="_h-64px _cs-pt" src="~/assets/images/nextbutton.png">
          <!-- </nuxt-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionItem from "~/components/QuestionItem";
import * as FBSE from "~/services/auth";
export default {
  components: {
    QuestionItem
  },
  data: () => ({
    why: null
  }),
  watch: {
    "$route.query.q"() {
      this.why = null;
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
      // ต้องเซฟที่
      if (+this.q === 5) {
        const quizKey = this.$route.params.quizSlug; // -> momo-292
        const answerKey =
          this.$store.state.quizTaker.name + "-" + ~~(Math.random() * 1000); // meme-193
        const res = await FBSE.saveUserAnswer(this.key, this.quiz.owner.uid, {
          answerKey,
          name: this.$store.state.quizTaker.name,
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

<style>
.bgcl {
  background-color: #e8dbd6;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

