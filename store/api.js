
const api = {

}

export const actions = {
  async listQuestions({ commit }) {
    const res = await this.$axios.$get('https://lyricstalk-1fb09.firebaseio.com/question_pool.json')
    return commit('SET_QUESTIONS', res, {
      root: true
    })
  },
  async getQuiz ({ }, {slug}) {
    const res = await this.$axios.$get(
      decodeURI(`https://lyricstalk-1fb09.firebaseio.com/quizes.json?print=pretty&orderBy=%22slug%22&equalTo=%22${slug}%22`)
    )
    return res
  },
  
}
