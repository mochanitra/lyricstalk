<template>
  <div class="_w-100pct bgcl">
    <div class="container">

      <div class="row">
        <div class="col-12 _pdt-64px _pdbt-8px _dp-f _fdrt-cl _alit-ct">
            <img class="_h-256px" src="~static/images/instruction.png">
        </div>
      </div>

   
        
      <!-- 1 -->
      <div 
        v-for="(item, i) in myQuiz" 
        :key="i" 
        class="row _jtfct-ct _pdt-32px _pdbt-32px">
        <div class="col-12">
          <QuestionItem 
            @selectSong="(index) => item.selectedAnswerIndex = index"
            :selected-question="questions[i]" 
            :number="i + 1" />
        </div>

      
        <div class="col-10 _pdt-32px _pdbt-8px">
          <div class="bio-input">
            <input
            type="text" 
            v-model="item.reason"
            placeholder="why ?">
          </div>
        </div>
      </div>

    </div>
        
      <!-- Modal -->
      <modal 
        :adaptive="true" 
        :scrollable="true" 
        with="100%" 
        height="auto" 
        name="question-list">
        <div class="_w-100pct _bgcl-white _h-100pct">
          <div class="container">

            <div class="row">
              <div class="col-12">
                <QuestionList 
                  @onSelect="addQuestion"
                />
              </div>
            </div>
                        
          </div>
        </div>
      </modal>

            

      <div class="row">
        <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-16px _pdbt-64px">
          <!-- <button type="button" @click="goToPlaylist"> -->
            <img @click="goToPlaylist"
              class="_h-64px" 
              src="~/assets/images/next.png">
          <!-- </button> -->
        </div>
      </div>

    </div>
  
</template>

<script>
import QuestionItem from '~/components/QuestionItem'
import QuestionList from '~/components/QuestionList'
export default {
    components: {
        QuestionItem,
        QuestionList
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
        questions: []
    }),
    methods: {
        goToPlaylist () {
          // commit
          this.$store.commit('SET_MYQUIZ', this.myQuiz)
          return this.$router.replace('/playlist')
        },
        addQuestion (item) {
            this.$modal.hide('question-list')
            this.questions.push(item)
            this.myQuiz[this.questions.length - 1].selectedSongId = item.id
        }
    }
}
</script>

<style>
.bgcl {
  background-color: #E8DBD6;
}
</style>
