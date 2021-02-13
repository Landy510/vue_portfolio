<template>
    <div>
        <Navbar :product_num="product_length" v-on:increment="CounterCoupute"></Navbar>
        <div class="vld-parent">
            <loading :active.sync="isLoading"></loading>
        </div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent border border-bottom">
                <li class="breadcrumb-item">
                    <router-link to="/">
                        <a href="#" class="text-muted">首頁</a>
                    </router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/lecture">
                        <a href="#" class="text-muted">課程</a>
                    </router-link>
                </li>
                <li class="breadcrumb-item active text-dark" aria-current="page">{{lecture.title}}</li>
            </ol>
        </nav>
        <div class="container mb-4">
            <div class="row">
                <div class="col-md-6">
                    <img :src="lecture.imageUrl" class="img-fluid" alt="Responsive image">
                </div>
                <div class="col-md-4">
                    <h2>{{lecture.title}}</h2>
                    <small>{{lecture.description}}</small>
                    <div class="d-flex justify-content-between align-items-end mb-4">
                        <small class="card-text text-muted">原本售價 NT<del>{{lecture.origin_price}}</del></small>
                        <strong class="card-text text-muted ml-auto">現在售價 NT<span class="h4 text-danger">{{lecture.price}}</span></strong>
                    </div>
                    <h5>數量</h5>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-grey border border-dark rounded-0" @click="CalQty(1)">+</button>
                        </div>
                        <input type="text" class="form-control text-center qty" placeholder="0" aria-label="1" aria-describedby="basic-addon1" v-model="qty">
                        <div class="input-group-append">
                            <button class="btn btn-grey border border-dark rounded-0" @click="CalQty(-1)">-</button>
                        </div>
                    </div>
                    <button class="btn btn-warning btn-lg w-100 rounded-0" @click="addToCart(lecture.id)"><font-awesome-icon :icon="['fas', 'cart-arrow-down']" class="mr-2" />加入購物車</button>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-light py-5">
            <div class="container">
                <div class="row">
                <div class="col-md-6">
                    <h3>運動的好處多多</h3>
                    <h5>很多人都希望單靠節食的方式來維持自己的身材。但其實，利用運動有效的提高自身的TDEE，飯而能讓你吃的更多，瘦得更健康。以下是運動的幾點好處:</h5>
                    <ul class="list-group">
                        <li class="list-group-item border-0 bg-transparent px-0 h5">可以有效的強化你的肌肉</li>
                        <li class="list-group-item border-0 bg-transparent px-0 h5">減緩老年癡呆</li>
                        <li class="list-group-item border-0 bg-transparent px-0 h5">提升記憶力</li>
                        <li class="list-group-item border-0 bg-transparent px-0 h5">減輕壓力</li>
                    </ul>
                </div>
                <div class="col-md-6 h-100">
                    <img src="https://upload.cc/i1/2021/02/07/jnkI6B.jpg" class="img-fluid advance_image" alt="Responsive image">
                </div>
                </div>
            </div> 
        </div>

        <div class="container-fluid py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 h-100">
                        <img src="https://upload.cc/i1/2021/02/07/Oj078N.jpg" class="img-fluid advance_image" alt="Responsive image">
                    </div>
                    <div class="col-md-6">
                        <h3>最專業的師資</h3>
                        <h5>在Berserker Fitness中，我們擁有最專業的師資，來輔導您，讓你可以學到最正確的健身知識，以下是您一定要來Berserker的原因:</h5>
                        <ul class="list-group">
                            <li class="list-group-item border-0 bg-transparent px-0 h5">最正確的運動姿勢</li>
                            <li class="list-group-item border-0 bg-transparent px-0 h5">你的進步你看的到</li>
                            <li class="list-group-item border-0 bg-transparent px-0 h5">幫助您飲食控制</li>
                            <li class="list-group-item border-0 bg-transparent px-0 h5">和同儕一起進步</li>
                        </ul>
                    </div>
                
                </div>
            </div> 
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3>關聯的課程</h3>
                    
                    <div class="row flex-md-nowrap py-2 Recommended_class_frame">
                        <div class="col-md-3 Recommended_class mb-2 mb-md-0" v-for="(item, index) in sameCategory" v-if="index<4">
                        <div class="card h-100" >
                            <div class="h-60 card_image">
                                <img class="card-img-top h-100" :src="item.imageUrl" alt="Card image cap">
                            </div>
                            
                            <div class="card-body">
                                <p class="card-text mb-0">{{item.title}}</p>
                                <p class="card-text mb-0">{{item.description}}</p>
                            </div>
                            <button class="btn btn-outline-dark" @click="getRelateLecture(item.id)">前往課程一覽</button>
                        </div>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import Navbar from "./Navbar";
  export default {
    data(){
         return{
            orderId:'',
            sameCategory:[],
            lecture:{},
            qty:0,
            isLoading:false,
            product_length:0
        }
    },
    methods:{
        getProduct(id){
            const vm = this;
            vm.isLoading = true;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
            this.$http.get(api).then((response)=>{
                console.log(response);
                if(response.data.success){
                    vm.lecture = response.data.product;
                    vm.isLoading = false;
                    this.getRelateProducts();
                }
            })
            
        },
        getList(){
                const vm = this;
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
                
                this.$http.get(api).then((response) => {  
                    console.log('購物的Modal',response);
                    vm.product_length = response.data.data.carts.length;
                    console.log('長度', vm.product_length);
                })
        },
        getRelateProducts(){
            const vm =this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
            this.$http.get(api).then((response)=>{
                
                if(response.data.success){
                    vm.sameCategory = response.data.products.filter(function(item){
                        if(item.category === vm.lecture.category && item.title!==vm.lecture.title){
                            return true;
                        }
                    })
                }
            })
        },
        getRelateLecture(id){
            
            this.getProduct(id);
        },
        CalQty(qty = 0){
            let num = this.qty;
            num += qty;
            if(num<0)return;
            this.qty += qty;
        },
        addToCart(id){
            const vm = this;
            vm.isLoading = true;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            this.$http.post(api,{data:{product_id:id, qty: vm.qty}}).then((response)=>{
                if(response.data.success){
                   vm.isLoading = false;
                   vm.$bus.$emit('messsage:push', response.data.message, 'success');
                   this.getList();
                } else {
                    vm.isLoading = false;
                   vm.$bus.$emit('messsage:push', response.data.message, 'danger');
                }
            })
        },
        CounterCoupute(cart_total_length){
            this.product_length = cart_total_length;
        }
    },
    created(){
        this.orderId = this.$route.params.LectureId;
        this.getProduct(this.orderId);
        
    },
    components:{
        Navbar
    }
  }
</script>

<style scoped>
.advance_image{
    border-radius:50px;
}
.card{
    border:0px;
    cursor:pointer;
}
.card_image{
    overflow:hidden;
}
.card:hover img{
    transition:all .5s;
    transform:scale(1.2);
}
@media(max-width:680px){
    .advance_image{
        border-radius:0px;
    }
}
</style>