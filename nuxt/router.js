import Vue from 'vue'
import Router from 'vue-router'

const _79fd9ad2 = () => import('../pages/venues/index.vue' /* webpackChunkName: "pages/venues/index" */).then(m => m.default || m)
const _7af995cc = () => import('../pages/favorites/index.vue' /* webpackChunkName: "pages/favorites/index" */).then(m => m.default || m)
const _efa45260 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _d8f8a102 = () => import('../pages/guide/index.vue' /* webpackChunkName: "pages/guide/index" */).then(m => m.default || m)
const _39b4fe74 = () => import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */).then(m => m.default || m)
const _75e0b7ca = () => import('../pages/programmes/index.vue' /* webpackChunkName: "pages/programmes/index" */).then(m => m.default || m)
const _bfab8bac = () => import('../pages/supporters/index.vue' /* webpackChunkName: "pages/supporters/index" */).then(m => m.default || m)
const _c318ce3c = () => import('../pages/supporters/_slug.vue' /* webpackChunkName: "pages/supporters/_slug" */).then(m => m.default || m)
const _742a1682 = () => import('../pages/programmes/_slug.vue' /* webpackChunkName: "pages/programmes/_slug" */).then(m => m.default || m)
const _0a3aa8d2 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/venues",
			component: _79fd9ad2,
			name: "venues___th"
		},
		{
			path: "/en/venues",
			component: _79fd9ad2,
			name: "venues___en"
		},
		{
			path: "/favorites",
			component: _7af995cc,
			name: "favorites___th"
		},
		{
			path: "/en/favorites",
			component: _7af995cc,
			name: "favorites___en"
		},
		{
			path: "/about",
			component: _efa45260,
			name: "about___th"
		},
		{
			path: "/en/about",
			component: _efa45260,
			name: "about___en"
		},
		{
			path: "/guide",
			component: _d8f8a102,
			name: "guide___th"
		},
		{
			path: "/en/guide",
			component: _d8f8a102,
			name: "guide___en"
		},
		{
			path: "/news",
			component: _39b4fe74,
			name: "news___th"
		},
		{
			path: "/en/news",
			component: _39b4fe74,
			name: "news___en"
		},
		{
			path: "/programmes",
			component: _75e0b7ca,
			name: "programmes___th"
		},
		{
			path: "/en/programmes",
			component: _75e0b7ca,
			name: "programmes___en"
		},
		{
			path: "/supporters",
			component: _bfab8bac,
			name: "supporters___th"
		},
		{
			path: "/en/supporters",
			component: _bfab8bac,
			name: "supporters___en"
		},
		{
			path: "/supporters/:slug",
			component: _c318ce3c,
			name: "supporters-slug___th"
		},
		{
			path: "/en/supporters/:slug",
			component: _c318ce3c,
			name: "supporters-slug___en"
		},
		{
			path: "/programmes/:slug",
			component: _742a1682,
			name: "programmes-slug___th"
		},
		{
			path: "/en/programmes/:slug",
			component: _742a1682,
			name: "programmes-slug___en"
		},
		{
			path: "/",
			component: _0a3aa8d2,
			name: "index___th"
		},
		{
			path: "/en/",
			component: _0a3aa8d2,
			name: "index___en"
		}
    ],
    
    
    fallback: false
  })
}
