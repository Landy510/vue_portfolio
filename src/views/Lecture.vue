<template>
    <div>
        <Navbar/>
        <router-view/>
    </div>
</template>

<script>
  import Navbar from './Navbar'
  export default {
    data(){
        return{
            itemId:''
        }
    },
    components:{
        Navbar
    }
  }

</script>