<template>
    <div class="_w-100pct bgcl">
    <div class="container">

        <div class="row">
          <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-32px">
            <img class="_h-64px" src="/images/number3.png">
          </div>
        </div>
        
         <div class="row _jtfct-ct">
            <div class="_bgs-ct _bgrp-nrp _bgpst-ct _pdt-32px _pdbt-16px">
            
                

                <QuestionItem 
            
                :selected-question="$store.state.questions.find(x => x.id === quiz.quiz[2].selectedSongId)" 
                />
            </div>
         </div>


        <div class="row _jtfct-ct _pdt-16px _pdbt-64px">
          <div class="col-2 _fdrt-cl _dp-f _alit-fst">
            <nuxt-link :to="localePath({
                        name: 'quiz-quizSlug-answer2',
                        params: {
                            quizSlug: quiz.slug
                        }
                    })">
                        <img class="_h-64px" src="~/assets/images/backbutton.png">
            </nuxt-link>

          </div>
          
          <div class="col-8">
            <div class="bio-input">
              <input 
                type="text" 
                placeholder="why ?">
            </div>
          </div>

          <div class="col-2 _dp-f _fdrt-cl _alit-fe">
            <nuxt-link :to="localePath({
                        name: 'quiz-quizSlug-answer4',
                        params: {
                            quizSlug: quiz.slug
                        }
                    })">
                        <img class="_h-64px" src="~/assets/images/nextbutton.png">
            </nuxt-link>

          </div>
        </div>
                
        </div>
    </div>

</template>

<script>
import QuestionItem from '~/components/QuestionItem'
export default {
    components: {
        QuestionItem
    },
    async asyncData ({ params, store }) {
        // Get quizSlug
        const slug = params.quizSlug
        const quiz = await store.dispatch('api/getQuiz', {
            slug
        })
        console.log(quiz)
        return {
            quiz: Object.values(quiz)[0]
        }
    },
    data:() => ({
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
    })
}

</script>

<style>

.bgcl {
  background-color : #EBD7D3;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}


</style>

