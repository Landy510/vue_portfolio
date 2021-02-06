<template>
    <div>
        <Navbar/>
        <div class="container-fluid">
          <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div class="position-sticky pt-3">
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span><font-awesome-icon :icon="['fas', 'users-cog']"/> 管理者頁面</span>
                  <a class="link-secondary" href="#" aria-label="Add a new report">
                    <span data-feather="plus-circle"></span>
                  </a>
                </h6>
                <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin">
                      <font-awesome-icon :icon="['fas', 'box-open']" />
                      DashBoard
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/admin/products">
                      <font-awesome-icon :icon="['fas', 'box-open']" />
                      產品列表
                    </router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/admin/order">
                      <font-awesome-icon :icon="['fas', 'list-alt']" />
                      訂單列表
                      </router-link> 
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/admin/coupon">
                      <font-awesome-icon :icon="['fas', 'ticket-alt']" />
                      優惠券
                      </router-link> 
                  </li> 
                </ul>
              </div>
            </nav>
            <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <router-view/>  
              
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import Navbar from './Navbar'
  export default {
    data() {
      return {
        
      }
    },
    created(){
      const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)Berserkertoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      console.log('myCookie', myCookie);
      this.$http.defaults.headers.common.Authorization = myCookie;
    },
    components:{
        Navbar
    }
  }
</script>
