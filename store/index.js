import Cookie from 'cookie'

export const state = () => ({
  primaryMenu: [],
  isMobileMenuActive: false
})

export const actions = {
  async nuxtServerInit({
    dispatch,
    commit
  }, {
    req,
    app
  }) {
    const menu = [{
      title: 'home'
    }, {
      title: 'info'
    }, {
      title: 'programme'
    }, {
      title: 'venues'
    }, {
      title: 'supporters'
    }]
    commit('SET_PRIMARY_MENU', menu)
  }
}

export const mutations = {
  SET_PRIMARY_MENU(state, menu) {
    state.primaryMenu = menu
  },
  SET_MOBILE_MENU_ACTIVE(state, bool) {
    state.isMobileMenuActive = bool
  }
}
