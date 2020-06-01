import Vue from 'vue'
import App from './App.vue'
import router from './router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRandom, faStepBackward,faPlayCircle,faStepForward,faSyncAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon)

import store from './store'

import VueMeta from 'vue-meta';
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

new Vue({
  el: '#app',
  store,
  router,
  axios,
  template: '<router-view/>',
  // render: h => h(App)
})
