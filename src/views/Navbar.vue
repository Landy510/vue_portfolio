<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <font-awesome-icon :icon="['fas','bars']" size="lg"></font-awesome-icon>
                </span>
            </button>
            <router-link to="/" class="mx-auto">
                    <a class="navbar-brand py-0 text-dark font-weight-bold d-block bg-transparent shadow-none" href="#">
                        <img src="../assets/img/protectionshield.svg" width="30" height="30" class="d-inline-block align-top" alt="">
                        <span class="ml-1 Brand_logo">Berserker Fitness</span>
                    </a>
            </router-link>
            <a class="nav-link text-dark d-block d-lg-none" href="#">
                <font-awesome-icon :icon="['fas', 'cart-arrow-down']" />
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/">
                            <a class="nav-link text-dark" href="#">首頁</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/">
                            <a class="nav-link text-dark" href="#">課程</a>
                        </router-link>
                    </li>
                    
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link to="/">
                            <a class="nav-link text-dark" href="#" title="據點查詢">
                                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                            </a> 
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/login">
                            <a class="nav-link login_status" href="#" title="管理者登入">
                                <font-awesome-icon :icon="['fas', 'users-cog']" />
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/">
                            <a class="nav-link text-dark" href="#" @click="signOut">登出</a>
                        </router-link>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        
                            <a class="nav-link text-dark " href="#" @click="callCart">
                                <font-awesome-icon :icon="['fas', 'cart-arrow-down']"/>
                            </a>
                        
                    </li>
                </ul>
            </div>
        </nav>
        <cartModal :cart_detail="cart"></cartModal>
    </div>
    
</template>

<script>
import $ from 'jquery';
import cartModal from "./cart_modal";
export default {
  name: 'Navbar',
  data () {
      return{
          cart:[]
      }
  },
  methods:{
      signOut:function(){
        const api = `${process.env.VUE_APP_APIPATH}/logout`; 
        this.$http.post(api).then((response)=>{
            let vm = this;
            $('.login_status').css('color', 'red');
            if(response.data.success){
                vm.$router.push('/login');
            }
        })
      },
      getList(){
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`; 
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
                console.log('購物的Modal',response.data.products);
                vm.cart = response.data.products;
            })
      },
      callCart(){
        $('.cart_list').addClass('cartOpen');
        $('.cart_list_cover').addClass('cartOpen');
        this.getList();
      }
  },
  created: function(){
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`; 
    this.$http.post(api).then((response)=>{
        if(response.data.success){
            $('.login_status').css('color', 'green');
        } else {
            $('.login_status').css('color', 'red');
        }
    })
  },
  components:{
      cartModal
  }
}
</script>

<style scoped>
    .text-danger{
        color:black;
    }
    @media(max-width:680px){
        .Brand_logo{
            display:none;
        }
    }
</style>