import Cookie from 'cookie'

export const state = () => ({
  primaryMenu: [],
  footerMenu: [],
  isMobileMenuActive: false,
  menuSticky: false,
  questions: []
})

export const actions = {
  async nuxtServerInit({
    dispatch,
    commit,
    state
  }, {
    req,
    app
  }) {
    // Hotfix axios lang
    let lc = app.i18n.locale === 'th' ? '' : app.i18n.locale
    app.$axios.defaults.baseURL = `${app.$axios.defaults.baseURL}${lc}`
    // List categories
    const all = [
      // dispatch('api/listCategories'),
      // dispatch('api/listPages'),
      // dispatch('api/listVenues')
      dispatch('api/listQuestions')
    ]

    await Promise.all(all)

    // console.log(Object.keys(state.pages))

    const primaryMenu = [
    ]

    const footerMenu = primaryMenu.filter(pm => pm.submenu)

    commit('SET_PRIMARY_MENU', primaryMenu)
    commit('SET_FOOTER_MENU', footerMenu)
  }
}

export const mutations = {
  SET_MOBILE_MENU_ACTIVE(state, bool) {
    state.isMobileMenuActive = bool
  },
  SET_SEARCH_MODAL_ACTIVE(state, bool) {
    state.isSearchModalActive = bool
  },
  SET_MENU_STICKY(state, bool) {
    state.menuSticky = bool
  },
  SET_PRIMARY_MENU(state, menu) {
    state.primaryMenu = menu
  },
  SET_FOOTER_MENU(state, menu) {
    state.footerMenu = menu
  },
  SET_QUESTIONS(state, questions) {
    state.questions = questions
  }
}
