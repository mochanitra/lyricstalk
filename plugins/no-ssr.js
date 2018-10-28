import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'
import VueFloatLabel from 'vue-float-label'
const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
import * as VueGoogleMaps from 'vue2-google-maps'
import WebFont from 'webfontloader'

Vue.use(VueFloatLabel)

Vue.use(VueAwesomeSwiper)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDZT6Pd5hRiz4jK6cBP5sCYcb64JeQXYwg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 500,
  scale: 0.9,
  distance: '50px',
  mobile: false
})

WebFont.load({
  google: {
    families: ['Crimson Text', 'Dancing Script',
      'Kanit'
    ]
  }
})
