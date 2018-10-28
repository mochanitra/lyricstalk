import Cookie from 'cookie'

export const state = () => ({
  primaryMenu: [],
  footerMenu: [],
  isMobileMenuActive: false,
  isSearchModalActive: false,
  newsCategories: [],
  pages: null,
  menuSticky: false,
  products: []
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
      dispatch('api/listPages'),
      // dispatch('api/listVenues')
      dispatch('api/listProducts')
    ]

    await Promise.all(all)

    // console.log(Object.keys(state.pages))

    const primaryMenu = [{
        title: 'Company',
        submenu: Object.keys(state.pages).filter(ps => state.pages[ps].parent === 1080).map(c => {
          return {
            title: state.pages[c].title.rendered,
            path: {
              name: `our-company`,
              params: {
                slug: state.pages[c].slug
              }
            }
          }
        })
      },
      {
        title: 'products',
        submenu: state.products.map(p => {
          return {
            title: p.title.rendered,
            path: {
              name: 'products',
              params: {
                slug: p.slug
              }
            }
          }
        })
      },
      {
        title: 'Our Process',
        path: {
          name: 'our-process'
        }
      },
      {
        title: 'events',
        path: {
          name: 'events'
        }
      }, {
        title: 'contact',
        path: {
          name: 'contact'
        }
      }
    ]

    const footerMenu = primaryMenu.filter(pm => pm.submenu)

    commit('SET_PRIMARY_MENU', primaryMenu)
    commit('SET_FOOTER_MENU', footerMenu)
  }
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
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
