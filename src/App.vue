<template>
  <div id="app">
    <button class="btn scrollTop bg-transparent text-dark">
       <font-awesome-icon :icon="['fas','chevron-up']" size="3x"></font-awesome-icon>
       <p>Top</p>
    </button>
    <Navbar></Navbar>
    <!--<banner/>-->
    <Loading :active.sync="isLoading"></Loading>
    


    <div class="container">
      <router-view/>  
    </div>
    
    <Footer/>
    




    
  </div>
</template>

<script>
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";
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
    Footer
  }
};
</script>



<style lang="scss">
@import "./assets/all.css";

.scrollTop{
  display:none;
  position:fixed; 
  right:30px; 
  bottom:200px; 
  z-index:9999;
}

</style>