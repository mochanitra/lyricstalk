import Vue from 'vue'
import VueFloatLabel from 'vue-float-label'
import WebFont from 'webfontloader'
const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')

Vue.use(VueFloatLabel)

WebFont.load({
  google: {
    families: ['Kanit&subset=thai']
  }
})

Vue.use(VueAwesomeSwiper)
