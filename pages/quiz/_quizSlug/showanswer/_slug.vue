<template>
    <div class="_w-100pct bgcl">
        <div class="container">
            <!-- Score calculation -->
            <div class="row">
                <div class="col-12 _mgt-32px _pdt-32px txcol">
                    <h1 class="_tal-ct"> {{ answer.name }} got {{ _totalScore }} / {{ $store.state.loadedQuiz.quiz.length }}</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-12 _pdt-32px  _dp-f _fdrt-cl _alit-ct">
                    
                    <div class="_pdt-32px _pdbt-16px">
                        <h3>ไม่สำคัญว่าคุณจะได้คะแนนเท่าไหร่... </h3>
                    </div>
                    
                    <div class="_pdbt-8px">
                        <h4>สิ่งที่สำคัญที่สุดคือ ' การที่เราได้รู้จักและเข้าใจมุมมองของกันและกันมากขึ้น '</h4>
                    </div>
                    <h4>ผ่านการที่คุณได้ลองคิด ลองทาย และแลกเปลี่ยนความคิดในเรื่องราวที่เราอาจไม่เคยได้คุยกันมาก่อน</h4>
                    <div class="_pdt-16px">
                        <h4>___________________________________________</h4>
                    </div>
                </div>
            </div>

            <div class="row _pdt-32px _pdbt-32px" v-for="(item, i) in quiz.quiz" :key="i">
                <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-32px">
                    <img class="_h-64px" :src="`/images/number${i+1}.png`">
                </div>
                <div class="col-12 _pdt-32px _pdbt-32px">
                    <QuestionItem 
                    :correctAnswerIndex="item.selectedAnswerIndex"
                    :userAnswerIndex="answer.answers[(i + 1).toString()].answer"
                    :selected-question="$store.state.questions.find(x => x.id === item.selectedSongId)" 
                    />
                </div>

                <div class="col-3 _dp-f _fdrt-cl _alit-fe _pdr-24px _pdbt-16px">
                <h2> {{ answer.name}} </h2>
                </div>

                <div class="col-8 whyimg _bgrp-nrp _dp-f _alit-ct _pdl-32px _pdbt-16px _pdr-64px">
                     <h6> {{ answer.answers[(i + 1).toString()].why}} </h6>
                </div>

                <div class="col-3 _dp-f _fdrt-cl _alit-fe _pdr-24px ">
                    <h2> {{quiz.name}} </h2>
                </div>

                <div class="col-8 whyimg _bgrp-nrp _dp-f _alit-ct _pdl-32px _pdr-64px">
                        <h6> {{item.reason}} </h6>
                </div>
                

            </div>
            
            <div class="row">
                <div class="col-12 _pdt-32px _dp-f _fdrt-cl _alit-ct ">
                    
                
                    
                    <div class="_pdt-64px _pdbt-8px">
                        <h4>ตอบถูก อาจไม่ได้แปลว่า รู้จักกันดีแล้ว</h4>
                    </div>
                    <h4>ตอบผิด อาจไม่ได้แปลว่า ไม่รู้เรื่องราวของกันและกัน</h4>

                    <div class="_pdt-16px">
                        <h4>_____________________________________</h4>
                    </div>
                    <div class="_pdt-32px">
                        <h4>และถึงแม้จะเป็นเพลงท่อนเดียวกัน ก็อาจถูกตีความไปได้หลายความหมาย  </h4>
                    </div>
                    <div class="_pdt-8px">
                        <h4>ดังนั้น ชีวิตก็เปรียบเหมือนบทเพลง ที่ยังมีอีกหลากหลายเรื่องราว หลากหลายมุมมองให้ได้เรียนรู้  </h4>
                    </div>
                    <div class="_pdt-32px _pdbt-32px txcol">
                        <h1>So we just need to talk more !  </h1>
                    </div>
                </div>
            </div>
            
             <div class="row">
                <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdbt-64px-sm">
                    <nuxt-link to="/create"> 
                        <img class="_h-64px" src="~/assets/images/createquiz.png">
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
        store.commit('SET_LOADED_QUIZ', Object.values(quiz)[0])
        return {
            quiz: Object.values(quiz)[0],
            answer: Object.values(quiz)[0].answers[params.slug]
        }
        
    },
    computed: {
        _totalScore () {
            let score = 0
            this.$store.state.loadedQuiz.quiz.forEach((q, i) => {
                const realAnswer = q.selectedAnswerIndex
                // Compare with user answer
                const userAnswer = this.answer.answers[(i + 1).toString()].answer

                console.log(realAnswer, userAnswer)

                if (realAnswer === userAnswer) {
                    score++
                }
            })
            return score
        }
    },

    

    
}
</script>

<style>

.bgcl {
  background-color : #EDE1DF;
}

.txcol {
    color: #BA777C;

}


.whysize {
    width: 860px;
}

.whyimg {
  background-image : url(~/assets/images/why-33.png);
}



</style>