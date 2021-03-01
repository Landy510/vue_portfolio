import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DashBoard from '../views/DashBoard.vue';
import Products from '../views/Products.vue';
import orderList from '../views/OrderList.vue';
import Coupon from '../views/Coupon.vue';
import Lecture from '../views/Lecture.vue';
import SelfProduct from '../views/SelfProduct.vue';
import Company from '../views/Company.vue';
import locationInfo from '../views/LocationInfo.vue';
import CompanyDetail from '../views/CompanyDetail.vue';
import Lecture_Product from '../views/Lecture_Product.vue';
import customerOrder from '../views/CustomerOrder.vue';
import Customer1 from '../views/Customer1.vue';
import Customer2 from '../views/Customer2.vue';
import CustomerCheckout from '../views/CustomerCheckout.vue';
import '../../node_modules/vue-loading-overlay/dist/vue-loading'



Vue.use(VueRouter)
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lecture',
    name: 'Lecture',
    component: Lecture,
    children:[
      {
        path:'Lecture_Product',
        name: 'Lecture_Product',
        component: Lecture_Product
      },
      {
        path:':LectureId',
        name: 'SelfProduct',
        component: SelfProduct
      }
    ]
  },
  {
    path: '/Company',
    name: 'Company',
    component: Company,
    children:[
      {
        path:'locationInfo',
        name: 'locationInfo',
        component: locationInfo
      },
      {
        path:'CompanyDetail',
        name: 'CompanyDetail',
        component: CompanyDetail
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
      },
      {
        path:'customer2',
        name:'customer2',
        component: Customer2
      },
      {
        path:'CustomerCheckout/:orderId',
        name:'CustomerCheckout',
        component: CustomerCheckout
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
        path:'orderList',
        name: 'orderList',
        component: orderList,
        meta: { requiresAuth: true },
      },
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
  },
  {
    path:'*',
    redirect:'/'
  },
]

const router = new VueRouter({
  routes
})

export default router
