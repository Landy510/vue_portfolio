<template>
  <div>
    <div class="vld-parent">
        <loading :active.sync="isLoading"></loading>
    </div>
    <Navbar :product_num="product_length" v-on:increment="CounterCoupute" ></Navbar>
    <banner :introImage="image_website"></banner>
    <alert/>
    <div class="container main-content mb-3">
      <div class="row mb-5">
        
        <div class="col-12 text-center" style="position:relative">
          <button class="btn btn-outline-dark btn-transparent MoveToLeft d-none d-md-block"  @click="RollToLeft">  <font-awesome-icon :icon="['fas','long-arrow-alt-left']" size="2x"></font-awesome-icon> </button>
          <button class="btn btn-outline-dark btn-transparent MoveToRight" @click="RollToRight"><font-awesome-icon :icon="['fas','long-arrow-alt-right']" size="2x"></font-awesome-icon></button>
          <small class="text-muted">教練推薦課程</small>
          <p class="h2 mb-4 font-weight-normal">Recommended</p>
          <div class="row flex-md-nowrap py-2 Recommended_class_frame">
            <div class="col-md-4 Recommended_class mb-2 mb-md-0" v-for="(item, index) in products">
              <div class="card h-100 border-0">
                <img class="card-img-top h-60" :src="item.imageUrl" alt="Card image cap">
                <div class="card-body p-0">
                  <p class="card-text mb-0">{{item.title}}</p>
                  <p class="card-text mb-0">{{item.description}}</p>
                  <div class="d-flex justify-content-between align-items-end">
                    <small class="card-text text-muted" v-if="item.origin_price!==item.price">原本售價<del>{{item.origin_price}}</del></small>
                    <strong class="card-text text-muted ml-auto">現在售價 <span class="h4 text-danger">{{item.price}}</span></strong>
                  </div>
                  
                </div>
                <div class="card-footer p-0 border-0 bg-transparent">
                  <button class="btn btn-outline-dark btn-lg rounded-0" @click="getProduct(item.id)">前往課程介紹</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row flex-column mb-3">
        <div class="col-12 text-center">
          <small class="text-muted">課程選擇</small>
          <p class="h2 mb-4 font-weight-normal">Lecture</p>

          <div class="list-group flex-row lecture_option mx-auto mb-3" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active border-0 text-dark" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">All</a>
            <a class="list-group-item list-group-item-action border-0 text-dark" id="list-Workout-list" data-toggle="list" href="#list-Workout" role="tab" aria-controls="Workout">Workout</a>
            <a class="list-group-item list-group-item-action border-0 text-dark" id="list-women-list" data-toggle="list" href="#list-women" role="tab" aria-controls="profile">Aerobic</a>
          </div>
          <div class="tab-content mb-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
              <div class="row">

                <div class="col-sm-6 col-md-4 mb-2 " v-for="(item, index) in products" v-if="index>=4 && index<=9">
                  <div class="card h-100 border-0">
                    <img class="card-img-top h-60" :src="item.imageUrl" alt="Card image cap">
                    <div class="card-body p-0">
                      <p class="card-text mb-0">{{item.title}}</p>
                      <p class="card-text mb-0">{{item.description}}</p>
                      <div class="d-flex justify-content-between align-items-end">
                        <small class="card-text text-muted" v-if="item.origin_price!==item.price">原本售價<del>{{item.origin_price}}</del></small>
                        <strong class="card-text text-muted ml-auto">現在售價 <span class="h4 text-danger">{{item.price}}</span></strong>
                      </div>
                      <button class="btn btn-outline-dark rounded-0 btn-md-lg rounded-0 w-100" @click="getDetail(item.id)"><font-awesome-icon :icon="['fas', 'cart-arrow-down']" class="mr-2" />加入購物車</button>
                    </div>
                    
                  </div>
                </div>
              </div>


                
            </div>
            <div class="tab-pane fade" id="list-Workout" role="tabpanel" aria-labelledby="list-Workout-list">
                <div class="row">
                  <div class="col-sm-6 col-md-4 mb-2" v-for="(item, index) in workout_prodcuts" v-if="index<3">
                    <div class="card h-100 border-0">
                      <img class="card-img-top h-60" :src="item.imageUrl" alt="Card image cap">
                      <div class="card-body p-0">
                        <p class="card-text mb-0">{{item.title}}</p>
                        <p class="card-text mb-0">{{item.description}}</p>
                        <div class="d-flex justify-content-between align-items-end">
                          <small class="card-text text-muted" v-if="item.origin_price!==item.price">原本售價<del>{{item.origin_price}}</del></small>
                          <strong class="card-text text-muted ml-auto">現在售價 <span class="h4 text-danger">{{item.price}}</span></strong>
                        </div>
                        <button class="btn btn-outline-dark rounded-0 btn-md-lg rounded-0 w-100" @click="getDetail(item.id)"><font-awesome-icon :icon="['fas', 'cart-arrow-down']" class="mr-2" />加入購物車</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
            </div>
            <div class="tab-pane fade" id="list-women" role="tabpanel" aria-labelledby="list-women-list">
                <div class="row">
                  <div class="col-sm-6 col-md-4 mb-2" v-for="(item, index) in aerobic_prodcuts" v-if="index>=3 && index<7">
                    <div class="card h-100 border-0">
                      <img class="card-img-top h-60" :src="item.imageUrl" alt="Card image cap">
                      <div class="card-body p-0">
                        <p class="card-text mb-0">{{item.title}}</p>
                        <p class="card-text mb-0">{{item.description}}</p>
                        <div class="d-flex justify-content-between align-items-end">
                          <small class="card-text text-muted" v-if="item.origin_price!==item.price">原本售價<del>{{item.origin_price}}</del></small>
                          <strong class="card-text text-muted ml-auto">現在售價 <span class="h4 text-danger">{{item.price}}</span></strong>
                        </div>
                        <button class="btn btn-outline-dark rounded-0 btn-md-lg rounded-0 w-100" @click="getDetail(item.id)"><font-awesome-icon :icon="['fas', 'cart-arrow-down']" class="mr-2" />加入購物車</button>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>
          </div>

          <router-link to="/lecture/Lecture_Product">
            <a class="btn btn-outline-dark btn-lg d-block" href="#">前往課程頁一覽</a>
          </router-link>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-12">
          <small class="text-muted">大家都怎麼推薦</small>
          <p class="h2 mb-4 font-weight-normal">How is Everyone feeling</p>

          <div class="row">
            <div class="col-md-4">
              <div class="card h-100 border-0 text-justify">
                <img class="card-img-top mx-auto" src="https://randomuser.me/api/portraits/women/10.jpg" alt="Card image cap" style="width:100px; height:100px; border-radius:50%;">
                <div class="card-body">
                  <p class="card-text mb-0 text-center font-weight-bold">來自深淵的女子</p>
                  <small class="card-text text-muted">Berser Fitness真的解救了我多年來苦惱的肉肉，看著肉肉越來越少，褲子越來越鬆，我的身心靈彷彿就得到了淨化，
                  強烈推薦你/妳來Berserker體驗練到腿軟的滋味。</small>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 border-0 text-justify">
                <img class="card-img-top mx-auto" src="https://randomuser.me/api/portraits/men/3.jpg" alt="Card image cap" style="width:100px; height:100px; border-radius:50%;">
                <div class="card-body">
                  <p class="card-text mb-0 text-center font-weight-bold">基隆的嗨先生</p>
                  <small class="card-text text-muted">Berser Fitness無話可說無可救藥的<strong class="h2">就是讚!!!</strong></small>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 border-0 text-justify">
                <img class="card-img-top mx-auto" src="https://randomuser.me/api/portraits/men/90.jpg" alt="Card image cap" style="width:100px; height:100px; border-radius:50%;">
                <div class="card-body">
                  <p class="card-text mb-0 text-center font-weight-bold">來自日本的小林先生</p>
                  <small class="card-text text-muted"><strong class="h2">紅豆泥!!!</strong>你/妳還沒有加入Berserker Fitness的健身房，妳是不是阿搭麻
                  控估力</small>
                </div>
              </div>
            </div>
          </div>
        </div>
     
     
      </div>
    </div>

    <!--Modal-->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                <div class="modal-header text-dark">
                    <h3 class="modal-title" id="exampleModalLabel">
                    <span class="font-weight-bold">{{product_detail.title}}</span>
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <img class="card-img-top" :src= "product_detail.imageUrl" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{product_detail.description}}</h5>
                            <div class="d-flex justify-content-between align-items-end">
                                <del class="h4">原價{{product_detail.origin_price}}元</del>
                                <strong class="h2">現在只要{{product_detail.price}}元</strong>
                            </div>

                            <div class="form-group mt-3">
                                <!--
                                <select class="form-control form-control-lg" aria-label="Default select example" v-model="product_detail.num">
                                    <option selected >Open this select menu</option>
                                    <option :value="num" v-for="num in 10" :key="num">選購{{num}} {{product_detail.unit}}</option>
                                </select>
                                -->
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">Example select</label>
                                  <select class="form-control form-control-lg" aria-label="Default select example" v-model="product_detail.num">
                                    <option :value="num" v-for="num in 10" :key="num">選購{{num}} {{product_detail.unit}}</option>
                                    
                                  </select>
                                </div>
                            </div> 
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <span class="h4 text-muted">小計 {{product_detail.price*product_detail.num}} 元</span>
                    <button type="button" class="btn btn-primary" @click="addToCart(product_detail.id, product_detail.num)">加到購物車</button>
                </div>
                </div>
            </div>
        </div>
    <!--Modal-->

  </div>
</template>

<script>
import Navbar from './Navbar'
import banner from "./intro_banner";
import alert from "./AlertMessage";
import $ from "jquery";
export default {
  name: 'Home',
  data() {
    return {
      products: [],
      product_detail:[],
      workout_prodcuts:[],
      aerobic_prodcuts:[],
      searchText: '',
      categories: [],
      isLoading: false,
      status:{
          loadingItem: ''
      },
      carts:[],
      product_length:0,
      image_website:'https://upload.cc/i1/2021/02/04/XVGje1.jpg'
    };
  },
  methods:{
    getProducts(page=1){
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`; 
      vm.isLoading = true;
      this.$http.get(api).then((response)=>{
            if(response.data.success){
              vm.products = response.data.products;
              vm.workout_prodcuts = vm.products.filter((item)=>{
                if(item.category === '重訓'){
                  return true;
                }
              })
              vm.aerobic_prodcuts = vm.products.filter((item)=>{
                if(item.category === '有氧'){
                  return true;
                }
              })
            }
            vm.isLoading = false;
        })
    },
    getProduct(id){
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/${id}`;
      this.$router.push(`/lecture/${id}`);
    },
    ReadWebSiteWidth: function(value, direction){
        if(value>1024){
            let scale = (direction==='L')? -380 : 370;
            return scale;
        } else if(value<=1024 && value>=768){
            let scale = (direction==='L')? -320 : 310;
            return scale;
        } else {
            let scale = (direction==='L')? -230 : 230;
            return scale;
        }
    },
    RollToLeft:function(){
      let vm =this;
      let scrollScale = 0;
      scrollScale = 0;
      scrollScale += vm.ReadWebSiteWidth(document.body.clientWidth, 'L');
      console.log(scrollScale)
      scrollScale = scrollScale*3;
      console.log(scrollScale)
      $('.Recommended_class').css("transform","translateX(" + scrollScale + "px)");
      $('.MoveToRight').css('opacity', '1');    
      $('.MoveToLeft').css('opacity', 0);
    },
    RollToRight:function(){
      let vm =this;
      let scrollScale = 0;
      scrollScale = 0;
      //scrollScale += vm.ReadWebSiteWidth(document.body.clientWidth, 'R');
      $('.Recommended_class').css("transform","translateX(" + scrollScale + "px)");   
      $('.MoveToLeft').css('opacity', '1');    
      $('.MoveToRight').css('opacity', 0); 
    },
    getDetail(id){
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(api).then((response) => {
          $('#productModal').modal('show');
          vm.product_detail = response.data.product;
          
          vm.status.loadingItem = '';
      })
    },
    addToCart(id, qty = 1){
        const vm = this;
        vm.isLoading = true;
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        this.$http.post(api,{data:{product_id:id, qty:qty}}).then((response)=>{
            console.log(response);
            if(response.data.success){
                vm.isLoading = false;
                $('#productModal').modal('hide');
                vm.$bus.$emit('messsage:push', response.data.message, 'success');
                this.getCart();
            } else {
                vm.isLoading = false;
                $('#productModal').modal('hide'); 
                vm.$bus.$emit('messsage:push', response.data.message, 'danger'); 
                            
            }
        })
        
    },
    getCart() {
      const vm = this;
      vm.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      this.$http.get(url).then((response) => {
        if (response.data.data.carts) {
          vm.carts = response.data.data.carts;
          vm.product_length = response.data.data.carts.length;
        }
        vm.isLoading = false;
        console.log('在Home中取得購物車', vm.carts);
      });
    },
    activeCart(){
      $('.cart_list_cover').fadeToggle();
    },
    CounterCoupute(cart_total_length){
      this.product_length = cart_total_length;
    }
  },
  created(){
    this.getProducts();
    this.getCart();
  },
  components:{
    alert,
    banner,
    Navbar,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Lecture:hover{
  cursor:pointer;
  box-shadow:3px 3px grey;
  transition: all .5s;
}
.list-group-item.active{
  background:transparent;
  font-weight:600;
}
.lecture_option{
  width:50%;
}
.Recommended_class_frame{
  overflow:hidden;
}
.Recommended_class{
   transform:translateX(0px);
   transition:all .5s;
}

.MoveToRight{
  opacity:0;
  transition:all .5s;
  position:absolute; 
  right:-20px; 
  top:150px; 
  z-index:2;
}
.MoveToLeft{
  transition:all .5s;
  position:absolute; 
  left:-20px; 
  top:150px; 
  z-index:2;
}
.Recommended_class{
  .card-footer{
    .btn{
      width:60%;
      font-size:10px;
      color:grey;
    }
    .btn:hover{
      color:white;
    } 
  }
}
@media(max-width:768px){
  .Recommended_class{
  .card-footer{
    .btn{
      width:100%;
    }
  }
}
}
@media(max-width:680px){
  .lecture_option{
    width:100%;
  }
}
</style>