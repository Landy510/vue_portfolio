import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';          // 引入overlay元件
import 'vue-loading-overlay/dist/vue-loading.css';  // 引入overlay元件
import 'bootstrap'  
import './all.js'
import './bus.js'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { faUsersCog} from '@fortawesome/free-solid-svg-icons'
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
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading);  // 將overlay元件宣告成全域的元件

library.add(faTrashAlt)
library.add(faSpinner)
library.add(faTicketAlt)
library.add(faListAlt)
library.add(faBoxOpen)
library.add(faMapMarkerAlt)
library.add(faUsersCog)
library.add(faChevronUp)
library.add(faLongArrowAltLeft)
library.add(faLongArrowAltRight)
library.add(faFacebookSquare)
library.add(faBars)
library.add(faInstagram)
library.add(faCartArrowDown)
library.add(faFontAwesome)
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
axios.defaults.withCredentials = true;



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
        if(response.data.success){
          next();
        } else {
          next({
            path:'/login',
          })
        }
      }
    )
  } else {
    next();
  }
})


Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
