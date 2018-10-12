import Cookie from 'cookie'

export const state = () => ({
  primaryMenu: [],
  footerMenu: [],
  isMobileMenuActive: false,
  newsCategories: [],
  programCategories: [],
  venues: [],
  pages: null
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
      dispatch('api/listCategories'),
      dispatch('api/listPages'),
      dispatch('api/listVenues')
    ]

    await Promise.all(all)

    const primaryMenu = [{
      title: 'home',
      icon: 'fal fa-home',
      path: {
        name: 'index'
      }
    }, {
      title: 'info',
      icon: 'fal fa-info-circle',
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
      icon: 'fal fa-list-alt',
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
      icon: 'fal fa-map-pin',
      submenu: [{
        title: 'CMDW Venues',
        path: {
          name: 'venues'
        }
      }]
    }, {
      title: 'support',
      icon: 'fal fa-users',
      submenu: [{
        title: 'our support',
        path: {
          name: 'support'
        }
      }, {
        title: 'benefits',
        path: {
          name: 'support-slug',
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
  },
  SET_PAGES(state, pages) {
    state.pages = pages.reduce((result, item) => {
      const key = item.slug
      result[key] = item
      return result
    }, {})
  },
  SET_VENUES(state, venues) {
    state.venues = venues
  }
}
