<template>
  <div id="app">
    <Navbar></Navbar>
    <!--<banner/>-->
    <Loading :active.sync="isLoading"></Loading>
    


    <div class="container">
      <router-view/>  
    </div>
    
    
    




    <footer class="bg-light text-muted py-5">
      <div class="container">
        <ul class="list-inline text-center">
          <li class="list-inline-item">© Copright 2017 六角血拼賣賣</li>
          <li class="list-inline-item">
            <a class="text-info" href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i> Instagrame</a>
          </li>
          <li class="list-inline-item">
            <a class="text-info" href="#">
              <i class="fa fa-facebook-square" aria-hidden="true"></i> Facebook</a>
          </li>
          <li class="list-inline-item">
            <a class="text-info" href="#">About</a>
          </li>
        </ul>
        <p class="text-center">Made with Bootstrap4</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "./views/Navbar";
//import banner from "./views/intro_banner.vue";
export default {
  name: 'App',
  data() {
    return {
      cart: {
        carts: [],
      },
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      const vm = this;
      vm.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      this.$http.get(url).then((response) => {
        if (response.data.data.carts) {
          vm.cart = response.data.data;
        }
        vm.isLoading = false;
        console.log('取得購物車', response.data.data);
      });
    },
    removeCart(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then((response) => {
        vm.isLoading = false;
        vm.getCart();
        console.log('刪除購物車項目', response);
      });
    },
  },
  created() {
    this.getCart();
  },
  components:{
    Navbar,
    
  }
};
</script>



<style lang="scss">
@import "./assets/all.css";


</style>