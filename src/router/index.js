import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import Login from '../views/Login'
import DashBoard from '../views/DashBoard';
import Products from '../views/Products';
import Coupon from '../views/Coupon';
import Lecture from '../views/Lecture';
import SelfProduct from '../views/SelfProduct';
import customerOrder from '../views/CustomerOrder';
import Customer1 from '../views/Customer1';
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
    path: '/lecture',
    name: 'Lecture',
    component: Lecture,
    children:[
      {
        path:':LectureId',
        name: 'SelfProduct',
        component: SelfProduct
      }
    ]
  },
  {
    path: '/customerOrder',
    name: 'CustomerOrder',
    component: customerOrder,
    children:[
      {
        path:'customer1',
        name:'customer1',
        component: Customer1
      }
      
    ]
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
      },
      {
        path:'Coupon',
        name: 'Coupon',
        component: Coupon,
        meta: { requiresAuth: true },
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
