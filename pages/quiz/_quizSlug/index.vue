<template>
  <div class="_w-100pct bgcl">
    <div class="container">


        <div class="row _jtfct-ct">
             
             <div class="col-4 _pdt-64px _pdbt-16px _dp-f _fdrt-cl _alit-ct">
                <h3>your name</h3>
            </div>
        </div>

        <div class="row _jtfct-ct">

        
            
            <div class="col-4 _jtfct-ct _pdbt-16px">
                <div class="bio-input">
                  <input 
                      v-model="name" 
                       @change="$store.commit('SET_QUIZ_ANSWER_NAME', {
                   name: name
                })"
                      type="text"
                      placeholder="your name">
                </div>
            </div>
            
        </div>

        <div class="row _jtfct-ct">
            
            <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdbt-16px">
                <h1> {{quiz.name}} </h1>
            </div>

        </div>

        <div class="row _jtfct-ct">

            <div class="col-5 _dp-f _fdrt-cl _alit-fe _pdbt-16px _pdr-0px">
                <img class="_w-128px" src="~/assets/images/cd.png">
            </div>

            <div class="col-7 _dp-f _fdrt-cl _alit-fst _pdbt-16px _pdl-0px">
                <img height="256" :src="quiz.cover" />
            </div>
        </div>

        <div class="row">
            <div class="col-12 _pdt-32px  _dp-f _fdrt-cl _alit-ct">
                <h3> มาทายคำตอบของ {{quiz.name}} กันเถอะ ! </h3>
            </div>
        </div>


        <div class="row">
            <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-32px _pdbt-64px">
                <nuxt-link :to="localePath({
                    name: 'quiz-quizSlug-answer',
                    params: {
                        quizSlug: quiz.slug
                    },
                    query: {
                        q: 1
                    }
                })">
                    <img class="_h-64px" src="~/assets/images/start.png">
                </nuxt-link>
            </div>
        </div>



    </div>
  </div>
</template>

<script>
export default {
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
    data: () => ({
        name: null
    })
}
</script>

<style>

.bgcl {
  background-color : #EDE1DF;
}



</style>