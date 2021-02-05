<template>
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <font-awesome-icon :icon="['fas','bars']" size="lg"></font-awesome-icon>
                </span>
            </button>
            <router-link to="/" class="mx-auto">
                    <a class="navbar-brand py-0 text-dark font-weight-bold d-block" href="#">
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
                            <a class="nav-link text-dark" href="#">門市查詢</a>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/">
                            <a class="nav-link text-dark" href="#">管理者登入</a>
                        </router-link>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <router-link to="/">
                            <a class="nav-link text-dark " href="#">
                               <font-awesome-icon :icon="['fas', 'cart-arrow-down']" />
                            </a>
                        </router-link>
                    </li>
                </ul>
            </div>
            </nav>
    
            <banner/>

    </div>
    
</template>

<script>
import banner from "./intro_banner.vue";
export default {
  name: 'Navbar',
  data () {
      return{

      }
  },
  components:{
      banner
  }
}
</script>
<style scoped>
@media(max-width:680px){
    .Brand_logo{
        display:none;
    }
}

</style>