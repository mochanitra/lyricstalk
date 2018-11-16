
const api = {

}

export const actions = {
  async listQuestions({ commit }) {
    const res = await this.$axios.$get('https://lyricstalk-1fb09.firebaseio.com/question_pool.json')
    return commit('SET_QUESTIONS', res, {
      root: true
    })
  }
}
