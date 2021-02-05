import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'  
import 'jquery'
import './all.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { BCarousel } from 'bootstrap-vue'
import { BCarouselSlide } from 'bootstrap-vue'
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

library.add(faFacebookSquare)
library.add(faBars)
library.add(faInstagram)
library.add(faCartArrowDown)
library.add(faFontAwesome)
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
