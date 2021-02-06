import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import Login from '../views/Login'
import DashBoard from '../views/DashBoard';
import Products from '../views/Products';
import '../../node_modules/vue-loading-overlay/dist/vue-loading'



Vue.use(VueRouter)
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);


const routes = [
  {
    path:'*',
    redirect:'login'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'DashBoard',
    component: DashBoard,
    meta: { requiresAuth: true },
    children:[
      {
        path:'products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true },
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
