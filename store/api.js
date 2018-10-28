const prefix = `/wp-json`
const api = {
  cat: `${prefix}/wp/v2/categories?per_page=100`,
  news: `${prefix}/wp/v2/news?per_page=100`,
  venue: `${prefix}/wp/v2/venue?per_page=100`,
  product: `${prefix}/wp/v2/product`,
  page: `${prefix}/wp/v2/pages?per_page=20`
}

export const actions = {
  // List by page, per_page, id, slug
  async listCategories({
    commit
  }) {
    const cats = await this.$axios.$get(api.cat)
    return commit('SET_CATEGORIES', cats, {
      root: true
    })
  },
  async listNews({}) {
    const news = await this.$axios.$get(api.news)
    return news
  },
  async listProducts({
    commit
  }) {
    const products = await this.$axios.$get(api.product)
    return commit('SET_PRODUCTS', products, {
      root: true
    })
    // return products
  },
  async listVenues({
    commit
  }) {
    const venues = await this.$axios.$get(api.venue)
    return commit('SET_VENUES', venues, {
      root: true
    })
  },
  async listPages({
    commit
  }) {
    const pages = await this.$axios.$get(api.page)
    return commit('SET_PAGES', pages, {
      root: true
    })
  },
  // Get by slug, id
  async getNews({}) {

  },
  async getProgram({}) {

  }
}
