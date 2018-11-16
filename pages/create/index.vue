<template>
    <div class="_w-100pct bgcl">
        <div class="container">
        
            <!-- 1 -->
            <div class="row _jtfct-ct _pdt-32px _pdbt-32px" v-for="(item, i) in [0, 0, 0, 0, 0]" :key="i">
                <div class="col-12">
                    <QuestionItem :selectedQuestion="questions[i]" :number="i + 1" />
                </div>

                <div class="row _jtfct-ct _pdt-32px _pdbt-8px">
                    <div class="col-12">
                        <div class="bio-input">
                            <input type="text" placeholder="why ?">
                        </div>
                    </div>
                </div>

            </div>
        
            <!-- Modal -->
            <modal :adaptive="true" with="100%" height="auto" :scrollable="true" name="question-list">
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
                    <nuxt-link to="/playlist">
                        <img class="_h-64px" src="~/assets/images/next.png">
                    </nuxt-link>
                </div>
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
        questions: []
    }),
    methods: {
        addQuestion (obj) {
            this.$modal.hide('question-list')
            this.questions.push(obj)
        }
    }
}
</script>

<style>

.bgcl {
  background-color : #EBD7D3;
}

</style>
