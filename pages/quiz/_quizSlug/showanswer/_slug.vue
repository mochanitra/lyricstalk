<template>
  <div class="create-soy">
    <div class="header-bg">
      <div class="header">
        <h1>soundtrack of you</h1>
      </div>
    </div>
    <div class="score-bg">
      <div class="score-inner">
        <div class="score-con">
          <p class="score-head">
            <span>{{ answer.name }}</span>
            got {{ _totalScore }} / {{ $store.state.loadedQuiz.quiz.length }}
          </p>
          <p class="detail-head">ไม่สำคัญว่าคุณจะได้คะแนนเท่าไหร่...</p>
          <p
            class="detail"
          >สิ่งที่สำคัญที่สุดคือ ' การที่เราได้รู้จักและเข้าใจมุมมองของกันและกันมากขึ้น '</p>
          <p
            class="detail"
          >ผ่านการที่คุณได้ลองคิด ลองทาย และแลกเปลี่ยนความคิดในเรื่องราวที่เราอาจไม่เคยได้คุยกันมาก่อน</p>
        </div>
      </div>
    </div>
    <div class="questions-bg">
      <div class="questions-inner">
        <div class="questions-con">
          <div v-for="(item, i) in quiz.quiz" :key="i" class="question-con">
            <div
              class="number-bg"
              :class="{'one': i == 0, 'two': i == 1, 'three': i == 2, 'four': i == 3, 'five': i == 4}"
            >
              <div
                class="number-con"
                :class="{'one': i == 0, 'two': i == 1, 'three': i == 2, 'four': i == 3, 'five': i == 4}"
              >
                <CircleNumber class="circle" :number="i+1"/>
              </div>
            </div>
            <div>
              <QuestionItem
                :correctAnswerIndex="item.selectedAnswerIndex"
                :userAnswerIndex="answer.answers[(i + 1).toString()].answer"
                :selected-question="$store.state.questions.find(x => x.id === item.selectedSongId)"
                :number="i+1"
                :isShow="true"
                :isAnswer="true"
              />
            </div>
            <div
              class="why-bg"
              :class="{'one': i == 0, 'two': i == 1, 'three': i == 2, 'four': i == 3, 'five': i == 4}"
            >
              <div
                class="why-con"
                :class="{'one': i == 0, 'two': i == 1, 'three': i == 2, 'four': i == 3, 'five': i == 4}"
              >
                <p class="name owner">{{quiz.name}}</p>
                <p class="desc">{{item.reason}}</p>
                <p class="name answer">{{answer.name}}</p>
                <p class="desc">{{ answer.answers[(i + 1).toString()].why}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pre-last">
      <p>
        ตอบถูก อาจไม่ได้แปลว่า รู้จักกันดีแล้ว
        <br>ตอบผิด อาจไม่ได้แปลว่า ไม่รู้เรื่องราวของกันและกัน
      </p>
      <hr>
    </div>
    <div class="last">
      <p>
        และถึงแม้จะเป็นเพลงท่อนเดียวกันก็อาจถูกตีความไปได้หลายความหมาย
        <br>ดังนั้น ชีวิตก็เปรียบเหมือนบทเพลง ที่ยังมีอีกหลากหลายเรื่องราวและหลากหลายมุมมองให้ได้เรียนรู้
      </p>
    </div>
    <nuxt-link to="/soundtrack-of-you" class="btn-out">
      <div class="btn-in">
        <p>create quiz</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import QuestionItem from "~/components/QuestionItem";
import CircleNumber from "~/components/boxes/CircleNumber";
export default {
  components: {
    QuestionItem,
    CircleNumber
  },

  async asyncData({ params, store }) {
    // Get quizSlug
    const slug = params.quizSlug;
    const quiz = await store.dispatch("api/getQuiz", {
      slug
    });
    console.log(quiz);
    store.commit("SET_LOADED_QUIZ", Object.values(quiz)[0]);
    return {
      quiz: Object.values(quiz)[0],
      answer: Object.values(quiz)[0].answers[params.slug]
    };
  },
  computed: {
    _totalScore() {
      let score = 0;
      this.$store.state.loadedQuiz.quiz.forEach((q, i) => {
        const realAnswer = q.selectedAnswerIndex;
        // Compare with user answer
        const userAnswer = this.answer.answers[(i + 1).toString()].answer;

        console.log(realAnswer, userAnswer);

        if (realAnswer === userAnswer) {
          score++;
        }
      });
      return score;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/variables";
.create-soy {
  background-color: $light-red;
  display: flex;
  flex-flow: column;
  align-items: center;
}
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
.q-list-con {
  background-color: $ci-white;
  //   border-radius: 40px;
}

.questions-inner {
  width: 100vw;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-top-right-radius: 40px;
  background-color: $light-red;
}

.questions-bg {
  //   background-color: $dark-red;
}

.question-con {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.number-bg {
  width: 100%;
  &.one {
    background-color: $dark-red;
  }

  &.two {
    background-color: $home-blue;
  }

  &.three {
    background-color: $smoker-red;
  }

  &.four {
    background-color: $line-red;
  }

  &.five {
    background-color: $home-blue;
  }
  .number-con {
    background-color: $light-red;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px 0;

    &.one {
      // border-top-right-radius: 40px;
    }

    &.two {
      border-bottom-left-radius: 40px;
    }

    &.three {
    }

    &.four {
      border-bottom-left-radius: 40px;
    }

    &.five {
      border-bottom-right-radius: 0;
    }
  }
}

.why-bg {
  width: 100%;
  &.one {
    background-color: $line-red;
  }

  &.two {
    background-color: $home-blue;
  }

  &.three {
    background-color: $smoker-red;
  }

  &.four {
    background-color: $line-red;
  }

  &.five {
    background-color: $home-blue;
  }
  .why-con {
    padding: 30px 0;
    background-color: $light-red;
    display: flex;
    flex-flow: column;
    align-items: center;
    &.one {
      border-top-right-radius: 40px;
    }

    &.two {
      border-top-left-radius: 0;
    }

    &.three {
      border-top-right-radius: 40px;
    }

    &.four {
      border-top-left-radius: 0;
    }

    &.five {
      border-top-right-radius: 40px;
    }

    .name {
      text-align: center;
      font-family: "Chonburi";
      margin: 10px 0 !important;
      @media (max-width: $screen-xs-max) {
        margin: 5px 0 !important;
      }
      font-size: 30px;
      @media (max-width: $screen-xs-max) {
        font-size: 18px;
      }

      &.owner {
        color: $dark-blue;
      }

      &.answer {
        color: $line-red;
      }
    }

    .desc {
      margin: 5px 0 !important;
      text-align: center;
      width: 90%;
      width: 90%;
      border: none;
      background-color: $ci-white;
      border-radius: 40px;
      padding: 7px 15px;
      font-family: "Sukhumvit-SemiBold";
      color: $font-black-blue;
      line-height: 1.5;
      font-size: 12px;
      @media (max-width: $screen-xs-max) {
        font-size: 9px;
      }
    }
  }

  input {
    width: 90%;
    border: none;
    background-color: $ci-white;
    border-radius: 40px;
    padding: 7px 15px;
    font-family: "Sukhumvit";
    color: $why;
    line-height: 1.5;
  }
}

.btn-out {
  margin-bottom: 20px;
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

.score-bg {
  background-color: $dark-red;

  .score-inner {
    background-color: $light-red;
    border-top-right-radius: 40px;
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;

    .score-con {
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 30px 0;

      @media (max-width: $screen-xs-max) {
        margin: 0 10px;
      }

      .score-head {
        padding: 5px 20px;
        border-radius: 30px;
        background-color: $ci-white;
        font-family: "Chonburi";
        font-size: 30px;
        color: $font-black-blue-4;
        margin-bottom: 20px !important;
        @media (max-width: $screen-xs-max) {
          font-size: 18px;
        }

        span {
          color: $line-red;
        }
      }

      .detail-head {
        font-family: "Sukhumvit-Bold";
        color: $font-black-blue-2;
        text-align: center;
        @media (max-width: $screen-xs-max) {
          font-size: 10px;
        }
      }

      .detail {
        font-family: "Sukhumvit-SemiBold";
        color: $font-black-blue-2;
        text-align: center;
        @media (max-width: $screen-xs-max) {
          font-size: 10px;
        }
      }
    }
  }
}

.pre-last {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  @media (max-width: $screen-xs-max) {
    margin-left: 10px;
    margin-right: 10px;
  }
  p {
    font-family: "Sukhumvit-Bold";
    color: $font-black-blue;
    text-align: center;
    @media (max-width: $screen-xs-max) {
      font-size: 10px;
    }
  }
  hr {
    border: none;
    border-bottom: 3px solid $line-red;
    width: 200px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}

.last {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
  @media (max-width: $screen-xs-max) {
    margin-left: 10px;
    margin-right: 10px;
  }

  p {
    font-family: "Sukhumvit-SemiBold";
    color: $font-black-blue-2;
    @media (max-width: $screen-xs-max) {
      font-size: 10px;
    }
  }
}
</style>