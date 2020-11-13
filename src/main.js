import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lightbox from 'vue-easy-lightbox'// 有使用?
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '../src/plugins/vuetify'
import { VueMasonryPlugin } from 'vue-masonry'// 瀑布排版
import VuePageTransition from 'vue-page-transition'// vue的跳頁動畫
import VueParallaxJs from 'vue-parallax-js'// 視差效果

import '@babel/polyfill'
import 'mutationobserver-shim'// ?
import './plugins/bootstrap-vue'
import './registerServiceWorker'// ?
import './assets/css/app.scss'

// axios 預設傳送認證資訊
axios.defaults.withCredentials = true

Vue.config.productionTip = false
Vue.use(Lightbox)
Vue.use(VueAxios, axios)
Vue.use(VueMasonryPlugin)
Vue.use(VuePageTransition)
Vue.use(VueParallaxJs)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
