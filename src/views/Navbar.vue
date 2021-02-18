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

            
            <div class="d-block d-lg-none" style="position:relative">
                <button type="button" class="btn btn-transparent text-dark d-block d-lg-none" data-toggle="modal" data-target="#exampleModalLong" @click="getList">
                    <font-awesome-icon :icon="['fas', 'cart-arrow-down']" />
                </button>
                <span class="badge badge-danger rounded-circle" style="position:absolute;top:0;left:25px" v-if="product_num!==0">{{product_num}}</span>
            </div>



            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/">
                            <a class="nav-link text-dark" href="#">首頁</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/lecture/Lecture_Product">
                            <a class="nav-link text-dark" href="#">課程</a>
                        </router-link>
                    </li>
                    
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link location_search" href="#" title="了解我們">
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                        </a> 
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
                    <li class="nav-item d-none d-lg-block" style="position:relative">
                        <button type="button" class="btn btn-transparent" data-toggle="modal" data-target="#exampleModalLong" @click="getList">
                            <font-awesome-icon :icon="['fas', 'cart-arrow-down']"/>
                        </button>
                        <span class="badge badge-danger rounded-circle" style="position:absolute;top:0;left:25px" v-if="product_num!==0">{{product_num}}</span>
                    </li>
                </ul>
                
            </div>
        </nav>
        <!---->
        <div class="lecture_hide p-4 bg-light">  
            <div class="d-flex">
                    <div class="card rounded-0 border-0 mr-3 bg-light" style="width: 18rem;">
                        <img class="card-img-top" src="https://upload.cc/i1/2021/02/16/XaFwDo.jpg" alt="Card image cap">
                        <div class="card-body p-0 text-center mt-3">
                            <font-awesome-icon :icon="['fas', 'caret-right']" />
                            
                            <router-link to="/Company/CompanyDetail">
                                <a class="location_search_btn ml-2">了解Berserker Fitness</a>
                            </router-link>
                            
                        </div>
                    </div>
                
                
                    <div class="card rounded-0 border-0 bg-light" style="width: 18rem;">
                        <img class="card-img-top location_part" src="https://upload.cc/i1/2021/02/16/rcGXwH.jpg" alt="Card image cap">
                        <div class="card-body p-0 text-center mt-3">
                            <font-awesome-icon :icon="['fas', 'caret-right']" />
                            <router-link to="/Company/locationInfo">
                                <a class="location_search_btn ml-2">Berserker Fitness據點查詢</a>
                            </router-link>
                            
                        </div>
                    </div>
            </div>
            
        </div>
        

        <!--
        <div class="lecture_hide p-4">
            <div class="card rounded-0 border-0" style="width: 18rem;">
                <img class="card-img-top" src="https://upload.cc/i1/2021/02/16/XaFwDo.jpg" alt="Card image cap">
                <div class="card-body p-0 text-center">
                    <p class="card-text">了解Berserker Fitness</p>
                </div>
            </div>
            <div class="card rounded-0 border-0" style="width: 18rem;">
                <img class="card-img-top" src="https://upload.cc/i1/2021/02/16/rcGXwH.jpg" alt="Card image cap">
                <div class="card-body p-0 text-center">
                    <p class="card-text">Berserker Fitness據點查詢</p>
                </div>
            </div>
        </div>
        -->
        <!---->
        <!-- Modal -->
        
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog m-0" role="document" >
                <div class="modal-content">
                    <div class="modal-header sticky-top mr-0 bg-warning">
                        <h4 class="modal-title font-weight-bold mx-auto" id="exampleModalLongTitle">購物車</h4>
                        <button type="button" class="close p-0 m-0" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-0">
                            <div class="card px-4 border-0" v-for="(item,index) in cart" :key="index">
                                <img class="card-img-top" :src="item.product.imageUrl" alt="Card image cap">
                                <div class="card-body">
                                    <h3 class="card-title">{{item.product.title}}</h3>
                                    <h3 class="card-text">{{item.product.price}} 元</h3> 
                                    <div class="d-flex justify-content-between align-items-end">
                                        <span class="card-text h5">{{item.qty}} /{{item.product.unit}}</span>  
                                        <button class="btn btn-outline-danger" @click.prevent="delProduct(item.id)"><font-awesome-icon :icon="['fas', 'trash-alt']"/></button>  
                                    </div>  
                                </div>
                            </div>
                            <div class="bg-light p-4 h3 d-sm-flex justify-content-between mb-0" style="position:sticky; bottom:0;">總金額 {{total_price}}
                                <router-link to="/customerOrder/customer1">
                                    <button class="btn btn-warning px-5 w-100" @click="closeModal">
                                    <font-awesome-icon :icon="['fas', 'spinner']" spin v-if="Status.isUploading"/>
                                    結帳去</button>
                                </router-link>
                            </div>
                    </div>
                </div>
            </div>
            </div>
            

    
    
    </div>
    
</template>

<script>
import $ from 'jquery';

import cartModal from "./cart_modal";
export default {
  name: 'Navbar',
  props:['product_num'],
  data () {
      return{
          cart:[],
          total_price:0,
          total_length:0,
          Status:{
              isUploading:false
          },
          counter:0,
          cartLength:0
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
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            vm.Status.isUploading = true;
            this.$http.get(api).then((response) => {  
                vm.cart = response.data.data.carts;
                console.log('原始資料長度', response.data.data.carts.length);
                vm.total_length = response.data.data.carts.length;
                vm.Status.isUploading = false;
                vm.total_price = response.data.data.final_total;
                vm.getcartLength();
            })
      },
      callCart(){
        $('.cart_list').addClass('cartOpen');
        $('.cart_list_cover').addClass('cartOpen');
        this.getList();
      },
      delProduct(id){
          let vm = this;
          const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`; 
          this.$http.delete(api).then((response)=>{
            if(response.data.success){
                vm.getList();
                $('#exampleModalLong').modal('hide');
                vm.$bus.$emit('messsage:push', response.data.message, 'danger');
            } else {
                vm.getList();
                $('#exampleModalLong').modal('hide');
                vm.$bus.$emit('messsage:push', response.data.message, 'danger');
            }
          })
      },
      closeModal(){
          $('#exampleModalLong').modal('hide');
      },
      getcartLength(){
          let vm = this;
          vm.cartLength = vm.total_length;
          vm.$emit('increment', Number(vm.cartLength));
          
      }
  },
  created: function(){
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`; 
    this.$http.post(api).then((response)=>{
        if(response.data.success){
            console.log('登入囉')
            $('.login_status').css('color', 'green');
        } else {
            console.log('登出囉')
            $('.login_status').css('color', 'red');
        }
    })
    this.getList();
  },
  mounted(){
      $('.location_search').on('click', function(){
          $('.lecture_hide').slideToggle();
      })
  },
  components:{
      cartModal
  }
}
</script>

<style scoped lang="scss">
    .text-danger{
        color:black;
    }
    .lecture_hide{
        display:none;
    }
    .location_search{
        color:black;
    }
    .location_search:hover{
        color:red
    }
    .location_search_btn{
        color:#000;
    }
    .location_search_btn:hover{
        color:grey;
        transition:all .2s;
    }
    .location_part{
        height:162px;
    }
    @media(max-width:680px){
        .Brand_logo{
            display:none;
        }
    }
    @media(max-width:380px){
        .location_part{
            height:87px;
        }
    }
</style>

