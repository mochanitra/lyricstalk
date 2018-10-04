import Cookie from 'cookie'

export const state = () => ({
  primaryMenu: [],
  footerMenu: [],
  isMobileMenuActive: false,
  newsCategories: [],
  programCategories: []
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
    await dispatch('api/listCategories')

    const primaryMenu = [{
      title: 'home',
      path: {
        name: 'index'
      }
    }, {
      title: 'info',
      submenu: [{
        title: 'news',
        path: {
          name: 'news'
        }
      }, {
        title: 'guide',
        path: {
          name: 'guide'
        }
      }, {
        title: 'about',
        path: {
          name: 'about'
        }
      }]
    }, {
      title: 'programme',
      submenu: state.programCategories.map(pc => {
        return {
          title: pc.name,
          path: {
            name: 'programmes-slug',
            params: {
              slug: pc.slug
            }
          }
        }
      })
    }, {
      title: 'venues',
      submenu: [{
        title: 'CMDW Venues',
        path: {
          name: 'venues'
        }
      }]
    }, {
      title: 'supporters',
      submenu: [{
        title: 'our supporters',
        path: {
          name: 'supporters'
        }
      }, {
        title: 'benefits',
        path: {
          name: 'supporters-slug',
          params: {
            slug: 'benefits'
          }
        }
      }]
    }]

    const footerMenu = primaryMenu

    commit('SET_PRIMARY_MENU', primaryMenu)
    commit('SET_FOOTER_MENU', footerMenu)
  }
}

export const mutations = {
  SET_PRIMARY_MENU(state, menu) {
    state.primaryMenu = menu
  },
  SET_FOOTER_MENU(state, menu) {
    state.footerMenu = menu
  },
  SET_MOBILE_MENU_ACTIVE(state, bool) {
    state.isMobileMenuActive = bool
  },
  SET_CATEGORIES(state, cats) {
    // program id = 2
    // news id = 1
    state.newsCategories = cats.filter(c => c.parent === 1)
    state.programCategories = cats.filter(c => c.parent === 2)
  }
}
