<template>
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
            <router-link to="/">
                    <a class="navbar-brand py-0 text-dark font-weight-bold" href="#">
                        <img src="../assets/img/protectionshield.svg" width="30" height="30" class="d-inline-block align-top" alt="">
                        Berserker Fitness
                    </a>
            </router-link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
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
                            <a class="nav-link text-dark" href="#">管理者登入</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
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
