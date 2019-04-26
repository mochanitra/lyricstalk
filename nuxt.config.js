const pkg = require('./package');
const messages = require('./services/lang');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.title,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'title',
        name: 'title',
        content: pkg.title
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    script: [
      {
        src: '/js/polyfills.min.js',
        body: true
      },
      {
        src: '/js/offline.min.js',
        body: true
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#669146'
  },

  /*
   ** Global CSS
   */
  css: [
    {
      src: 'assets/styles/main.scss',
      lang: 'scss'
    }
  ],
  router: {
    middleware: ['router']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/ssr.js',
    '~/plugins/axios.js',
    {
      src: '~/plugins/no-ssr.js',
      ssr: false
    }
  ],
  render: {
    resourceHints: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // 'nuxt-client-init-module',
    [
      'nuxt-i18n',
      {
        seo: false,
        strategy: 'prefix_except_default',
        locales: [
          {
            code: 'th',
            iso: 'th-TH',
            name: 'TH'
          },
          {
            code: 'en',
            iso: 'en-US',
            name: 'EN'
          }
        ],
        detectBrowserLanguage: false,
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages
        }
      }
    ],
    [
      'nuxt-rfg-icon',
      {
        masterPicture: ''
      }
    ],
    'nuxt-babel',
    '@nuxtjs/toast',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
    // ['@nuxtjs/google-analytics', {
    //   id: '',
    // autoTracking: {
    //   pageviewOnLoad: false,
    //   exception: true
    // }
    // }],
  ],
  toast: {
    position: 'top-right'
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // credentials: true,
    debug: false,
    https: false,
    port: 80,
    host: pkg.apiUrl
    // prefix: '/wp-json/api/v1', moved to apiUrl.js
  },
  /*
   ** Build configuration
   */
  buildDir: 'nuxt',
  build: {
    publicPath: '/',
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['en', 'th']
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      if (!ctx.isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        );
      }
    }
  }
};
