<template>
    <footer class="bg-light text-muted py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="text-center text-lg-left mb-2">© Copright 2021 Berserker Fitness運動有限公司</div>
                    <div class="d-flex justify-content-center justify-content-lg-start">
                        <p class="mr-3">
                            <a class="text-info text-dark" href="#" title="facebook粉絲團">
                                <font-awesome-icon :icon="['fab','facebook-square']" size="3x"></font-awesome-icon>
                            </a>
                        </p>
                        <p>
                            <a class="text-info text-dark" href="#" title="IG粉絲團">
                                <font-awesome-icon :icon="['fab','instagram']" size="3x"></font-awesome-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <p class="text-center text-md-left d-none d-lg-block">Contact us</p>
                    <p class="text-center text-lg-left d-block d-lg-none text-dark">如有任何疑問歡迎隨時與我們聯繫。</p>
                    <div class="d-flex align-items-lg-start flex-column flex-lg-row align-items-center">
                        <p class="text-dark mr-4 footer-tel">0800-123-4567</p>
                        <div class="d-flex flex-lg-column flex-row">
                            <small class="text-dark">服務時間</small>
                                <small>08:00-18:00</small>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </footer>
</template>

<script>


export default {
  name: 'Footer',
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
.footer-tel{
  font-size: 25px;
}
@media(max-width:768px){
  .footer-tel{
    font-size: 20px;
  }
}
</style>