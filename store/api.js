const prefix = `/wp-json`
const api = {
  cat: `${prefix}/wp/v2/categories?per_page=100`,
  news: `${prefix}/wp/v2/news?per_page=100`,
  program: `${prefix}/wp/v2/`
}

export const actions = {
  // List by page, per_page, id, slug
  async listCategories({
    commit
  }) {
    const cats = await this.$axios.$get(api.cat)
    // console.log(cats)
    // return catsz
    return commit('SET_CATEGORIES', cats, {
      root: true
    })
  },
  async listNews({}) {
    const news = await this.$axios.$get(api.news)
    return news
  },
  async listPrograms({}) {
    const programs = await this.$axios.$get(api.program)
    return programs
  },
  async listVenues({}) {

  },
  async listPages({}) {

  },
  // Get by slug, id
  async getNews({}) {

  },
  async getProgram({}) {

  }
}
