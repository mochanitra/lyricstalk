import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import VeeValidate from 'vee-validate';
import VueScrollTo from 'vue-scrollto';
import VModal from 'vue-js-modal/dist/ssr.index';
import Transitions from 'vue2-transitions';
import moment from 'moment';
import VueClipboard from 'vue-clipboard2';

import SocialSharing from 'vue-social-sharing';

require('moment/locale/th');

Vue.use(VueScrollTo);
Vue.use(VeeValidate);
// VueLazyLoad
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/images/error.png',
  loading: '/images/loading.gif',
  attempt: 1
});
Vue.use(require('vue-moment'), {
  moment
});
Vue.use(VModal, {
  dialog: true
});
Vue.use(Transitions);
Vue.use(VueClipboard);
Vue.use(SocialSharing);
