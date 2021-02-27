import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay';          // 引入overlay元件
import 'vue-loading-overlay/dist/vue-loading.css';  // 引入overlay元件
import 'bootstrap'  
import './bus.js'
import currencyFilter from './filters/currency'  // 引入currency.js

import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading);  // 將overlay元件宣告成全域的元件
Vue.config.productionTip = false
axios.defaults.withCredentials = true;
Vue.filter('currency', currencyFilter);  // 啟用fiter元件-千分號效果

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

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

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
