<template>
  <div>
    <div class="create-soy">
      <div class="header-bg">
        <div class="header">
          <h1>soundtrack of you</h1>
        </div>
      </div>
      <div class="questions-bg">
        <div class="questions-inner">
          <div class="questions-con">
            <div v-for="(item, i) in myQuiz" :key="i" class="question-con">
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
                  @selectSong="(index) => item.selectedAnswerIndex = index"
                  @selectQuestion="modal_index=i"
                  @setPlayedSong="(id) => playedSong=id"
                  @deleteSelectedQuestions="deleteSelectedQuestions"
                  :selected-question="questions[i]"
                  :number="i + 1"
                  :playedSong="playedSong"
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
                  <input type="text" v-model="item.reason" placeholder="why ?">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="goToPlaylist()" class="btn-out">
        <div class="btn-in">
          <p>next</p>
        </div>
      </button>
      <modal :adaptive="true" :scrollable="true" width="90%" height="auto" name="questions-list">
        <div class="q-list-con">
          <QuestionList @onSelect="addQuestion" :selectedQuestions="selectedQuestions"/>
        </div>
      </modal>
    </div>
  </div>
</template>
<script>
import QuestionItem from "~/components/QuestionItem";
import QuestionList from "~/components/QuestionList";
import CircleNumber from "~/components/boxes/CircleNumber";
export default {
  components: {
    QuestionList,
    QuestionItem,
    CircleNumber
  },
  data: () => ({
    myQuiz: [
      {
        selectedSongId: null,
        selectedAnswerIndex: null,
        reason: null
      },
      {
        selectedSongId: null,
        selectedAnswerIndex: null,
        reason: null
      },
      {
        selectedSongId: null,
        selectedAnswerIndex: null,
        reason: null
      },
      {
        selectedSongId: null,
        selectedAnswerIndex: null,
        reason: null
      },
      {
        selectedSongId: null,
        selectedAnswerIndex: null,
        reason: null
      }
    ],
    questions: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    },
    modal_index: null,
    playedSong: null,
    selectedQuestions: new Set()
  }),
  methods: {
    goToPlaylist() {
      let isFull = true;
      let err = "";
      for (let i = 0; i < this.myQuiz.length; i++) {
        if (this.myQuiz[i].selectedSongId == null) {
          err += "ยังไม่เลือกข้อ " + (i + 1) + "\n";
          isFull = false;
        }
        if (this.myQuiz[i].selectedAnswerIndex == null) {
          err += "ยังไม่ตอบข้อ " + (i + 1) + "\n";
          isFull = false;
        }
        if (!this.myQuiz[i].reason || this.myQuiz[i].reason == "") {
          err += "ยังไม่ได้เขียนเหตุผลข้อ " + (i + 1) + "\n";
          isFull = false;
        }
      }
      if (!isFull) {
        alert(err);
        return;
      }
      // commit
      this.$store.commit("SET_MYQUIZ", this.myQuiz);
      return this.$router.replace("/soundtrack-of-you/playlist");
    },
    addQuestion(item) {
      this.$modal.hide("questions-list");
      const idx = this.modal_index;
      if (this.questions[idx] != null) {
        this.selectedQuestions.delete(this.questions[idx].id);
      }
      this.questions[idx] = item;
      this.selectedQuestions.add(item.id);
      this.modal_index = null;

      this.myQuiz[idx].selectedSongId = item.id;
    },

    deleteSelectedQuestions() {
      if (this.questions[this.modal_index] != null) {
        this.selectedQuestions.delete(this.questions[this.modal_index].id);
      }
    },
    setPlayedsong(id) {
      this.playedSong = id;
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
  position: relative;
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
  // position: fixed;
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
  background-color: $dark-red;
}

.question-con {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.number-bg {
  width: 100%;
  &.one {
    // background-color: $dark-red;
    background: none;
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
      background: none;
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
</style>
