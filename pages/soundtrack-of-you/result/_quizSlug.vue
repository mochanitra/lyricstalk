<template>
  <div>
    <div class="header-bg">
      <div class="header">
        <h1>soundtrack of you</h1>
      </div>
    </div>
    <div class="info-bg">
      <div class="info-con">
        <div class="info-head">
          <p class="name">{{quiz.name}}</p>
          <div class="pic-con">
            <img class="cd-left" src="~/assets/images/decoration/cd-left.svg">
            <div class="pic">
              <img v-bind:src="quiz.cover" alt>
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
        <p class="answer-header">Answers</p>
      </div>
    </div>
    <div class="answer-bg">
      <div class="answer-con">
        <div v-if="quiz.answers" class="answer-taker-con">
          <div v-for="(info,id) in quiz.answers" :key="id" class="answer-row">
            <img class="profile" v-bind:src="info.taker.picture.data.url" alt>
            <nuxt-link :to="`/quiz/${quiz.slug}/showanswer/${id}`">
              <p class="name">{{info.taker.name}}</p>
            </nuxt-link>
            <p class="score">
              <span>{{totalScore(info)}}</span>
              / {{quiz.quiz.length}}
            </p>
          </div>
          <!-- <img
            class="show-arrow"
            @click="toggleShow()"
            :class="{'show': show}"
            src="~/assets/images/decoration/expand-button.svg"
            alt
          >-->
        </div>
        <div v-else>
          <p>ยังไม่มีคนตอบคำถามนี้</p>
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
  async asyncData({ params, store }) {
    // Get quizSlug
    const slug = params.quizSlug;
    const quiz = await store.dispatch("api/getQuiz", {
      slug
    });
    // console.log(quiz);
    // store.commit("SET_LOADED_QUIZ", Object.values(quiz)[0]);
    return {
      quiz: Object.values(quiz)[0]
    };
  },
  data: () => ({
    show: false
  }),
  methods: {
    totalScore(item) {
      let score = 0;
      this.quiz.quiz.map((q, i) => {
        const realAnswer = q.selectedAnswerIndex;

        const userAnswer = item.answers[i + 1].answer;

        if (realAnswer == userAnswer) {
          score++;
        }
      });
      return score;
    },
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/styles/variables";
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

.info-bg {
  background: linear-gradient(
    to right,
    $ci-white 0%,
    $ci-white 50%,
    $dark-red 50%,
    $dark-red 100%
  );

  .info-con {
    background-color: $light-red;
    padding: 20px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;

    .info-head {
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      .name {
        font-family: "Chonburi";
        font-size: 28px;
        text-align: center;
      }
    }
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
    }
  }
}

.amp-left {
  align-self: flex-start;
  width: 90%;
  margin: 10px 0;
  margin-left: -1px;
}

.answer-header {
  font-family: "Chonburi";
  align-self: flex-start;
  color: $line-red;
  margin-left: 40px;
  font-size: 30px;
}

.answer-bg {
  background-color: $light-red;

  .answer-con {
    background-color: $ci-white;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    padding: 20px 30px;
    @media (max-width: $screen-xs-max) {
      padding: 20px;
    }
    display: flex;
    flex-flow: column;
    align-items: center;
  }
}
.dummy-bg {
  background-color: $ci-white;

  .dummy-con {
    background-color: $light-red;
    border-top-right-radius: 40px;
    padding: 30px 0;
  }
}

.answer-taker-con {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  .show-arrow {
    width: 40px;
    cursor: pointer;

    &.show {
      transform: rotate(180deg);
    }
  }
}

.answer-row {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  max-width: 500px;
  width: 50%;
  @media (max-width: $screen-xs-max) {
    width: 100%;
  }

  img {
    border-radius: 50%;
  }

  .name {
    font-family: "Sukhumvit-Bold";
    color: $font-black-blue-4;
  }

  .score {
    font-family: "Chonburi";
    color: $font-black-blue-4;

    span {
      color: $line-red;
    }
  }
}
</style>
