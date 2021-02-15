<template>
  <div>
    <div class="jumbotron rounded-0 bg-cover intro_image d-flex justify-content-center align-items-center mb-0">
      <div class="intro_content">
        <h1 class="display-4">It Is Time To Transform Your Physics</h1>
      </div>
    </div>
  </div>
  
</template>

<script>
  import $ from 'jquery';
  export default {
    props:['introImage'],
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    mounted(){
      let vm = this;
      $('.intro_image').css('background-image',`url(${vm.introImage})`);
     
      //$('.intro_image').css('background-image','https://upload.cc/i1/2021/02/04/XVGje1.jpg');
    }
  }
</script>

<style scoped>
  .intro_image{
    height: 650px;
    /*background-image:url(https://upload.cc/i1/2021/02/04/XVGje1.jpg);*/
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