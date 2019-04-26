<template>
  <div class="q-list-con">
    <p class="q-header">Questions List</p>
    <div class="button-row">
      <button :class="{'active' : type == 'all'}" @click="type='all'">All</button>
      <button :class="{'active' : type == 'love'}" @click="type='love'">Love</button>
      <button :class="{'active' : type == 'mind'}" @click="type='mind'">Mind</button>
      <button :class="{'active' : type == 'chill'}" @click="type='chill'">Chill</button>
    </div>
    <div class="questions-con">
      <div
        v-show="!$props.selectedQuestions.has(item.id)"
        class="question"
        v-for="(item, i) in questions"
        :key="i"
        @click="$emit('onSelect', item)"
      >
        <p>{{item.title}}</p>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdbt-32px">
        <img class="_h-64px" src="~/assets/images/questionlist.png">
      </div>
    </div>


    <div v-for="(item, i) in $store.state.questions" :key="i" class="row _jtfct-ct _pdt-4px-sm _pdbt-4px" @click="$emit('onSelect', item)">
      <div v-show="!$props.selectedQuestions.has(item.id)" class="col-6">
        <div class="bio-card">
          <div class="bio-card-content">{{ item.title }}</div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  props: {
    selectedQuestions: {
      type: Set,
      default: new Set()
    }
  },
  data: () => ({
    type: "all",
    questions: []
  }),
  mounted() {
    this.questions = this.$store.state.questions;
  },
  watch: {
    type: function() {
      if (this.type == "all") {
        this.questions = this.$store.state.questions;
      } else {
        this.questions = this.$store.state.questions.filter(
          q => q.type == this.type
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/variables";
.q-list-con {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px 0;
}

.q-header {
  color: $font-black-blue-3;
  font-family: "RunWild";
  font-size: 48px;
}

.button-row {
  background-color: white;
  border-radius: 20px;
  button {
    border: none;
    background-color: white;
    padding: 10px 15px;
    border-radius: 20px;
    width: 80px;
    font-family: "Sukhumvit-Bold";
    color: $ci-light-blue;
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      color: $font-black-blue;
      background-color: $light-red;
      transition-duration: 0.3s;
    }

    &.active {
      color: $font-black-blue;
      background-color: $light-red;
    }
  }
}

.questions-con {
  .question {
    border-radius: 20px;
    border: 1px solid $dark-blue;
    padding: 0 10px;
    margin: 5px 0;
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      background-color: $ci-light-blue;
      transition-duration: 0.3s;
    }

    p {
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
