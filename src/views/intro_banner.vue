<template>
  <div>
    <!--
    <div class="jumbotron rounded-0 bg-cover intro_image d-flex justify-content-center align-items-center mb-0">
      <div class="intro_content">
        <h1 class="display-4">It Is Time To Transform Your Physics</h1>
      </div>
    </div>
    -->
    <div class="swiper-container">
    　　<div class="swiper-wrapper">
       　　 <div class="swiper-slide bg-cover intro_image d-flex justify-content-center align-items-center">
              <div class="intro_content">
                <h1 class="display-4">It Is Time To Transform Your Physics</h1>
              </div>
            </div>
           <div class="swiper-slide bg-cover intro_image1 d-flex justify-content-center align-items-center">
            <div class="intro_content">
                <h1 class="display-4">最專業的師資</h1>
            </div>
           </div>
           <div class="swiper-slide bg-cover intro_image2 d-flex justify-content-center align-items-center">
            <div class="intro_content">
                <h1 class="display-4">邁向你想要的體態</h1>
            </div>
           </div>
        </div>
        <!--分頁器-->
    　  <div class="swiper-pagination"></div>
        <!-- 上下頁按鈕
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        -->
　　</div>

  </div>
  
</template>

<script>
  import $ from 'jquery';
  
  import Swiper from 'swiper'
　import 'swiper/css/swiper.min.css'

  export default {
    props:['introImage', 'introImage_1', 'introImage_2'],
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted(){
      let vm = this;
      $('.intro_image').css('background-image',`url(${vm.introImage})`);
      $('.intro_image1').css('background-image',`url(${vm.introImage_1})`);
      $('.intro_image2').css('background-image',`url(${vm.introImage_2})`);
      
      const mySwiper = new Swiper('.swiper-container',{
　　　　　　loop:true,
           observer:true,
           observerParents:true,
           //autoplay:true,
    　　　　pagination: {
  　　　　　　 el: '.swiper-pagination',
              clickable: true
    　　　　}
　　　　})
    }
  }
  
</script>

<style scoped>
  .intro_image{
    height: 650px;
  }
  .intro_content{
    background:rgba(255,255,255,0.5)
  }
  @media(max-width:568px){
    .intro_image{
      height:480px;
    }
  }
</style>