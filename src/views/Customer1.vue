<template>
  <div>
    <div class="vld-parent">
        <loading :active.sync="isLoading"></loading>
    </div>
    <div class="container">
        <div class="justify-content-center align-items-center d-none d-md-flex mt-4">
            <div class="rounded-circle d-flex justify-content-center align-items-center h3 alert alert-primary " style="width:100px;height:100px;">Step1</div>
            <div style="width:200px;height:1px;border:1px solid black;"></div>
            <div class="rounded-circle d-flex justify-content-center align-items-center h3 alert alert-light border-dark" style="width:100px;height:100px;">Step2</div>
            <div style="width:200px;height:1px;border:1px solid black;"></div>
            <div class="rounded-circle d-flex justify-content-center align-items-center h3 alert alert-light border-dark" style="width:100px;height:100px;">Step3</div>
        </div>
        <div class="d-flex d-md-none justify-content-center mt-4">
            <div class="rounded-circle d-flex justify-content-center align-items-center h3 alert alert-primary " style="width:100px;height:100px;">Step1</div>
        </div>
        <h2 class="text-center">請填寫購買人資料</h2>

        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
                <div class="form-group">
                <label for="useremail">Email</label>
                <input type="email" class="form-control" name="email" id="useremail"
                    v-model="form.user.email" placeholder="請輸入 Email" required>
                <span class="text-danger"></span>
                </div>
            
                <div class="form-group">
                <label for="username">收件人姓名</label>
                <input type="text" class="form-control" name="name" id="username"
                    v-model="form.user.name" placeholder="輸入姓名">
                <span class="text-danger"></span>
                </div>
            
                <div class="form-group">
                <label for="usertel">收件人電話</label>
                <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
                </div>
            
                <div class="form-group">
                <label for="useraddress">收件人地址</label>
                <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                    placeholder="請輸入地址">
                <span class="text-danger">地址欄位不得留空</span>
                </div>
            
                <div class="form-group">
                <label for="comment">留言</label>
                <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                <button class="btn btn-danger">送出訂單</button>
                </div>
            </form>
            </div>

    </div>
  </div>
</template>

<script>
    
    export default {
        name: 'Customer1',
        data(){
            return{
               isLoading:false, 
               form:{
                    user:{
                        name:'',
                        email:'',
                        tel:'',
                        address:'',
                    },
                    message:''
                } 
            }
        },
        methods:{
            createOrder(){
                const vm = this; 
                const order = vm.form;
                vm.isLoading = true;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
                
                this.$http.post(api,{data:order}).then((response) => {  
                    console.log('訂單已建立', response);
                    vm.isLoading = false;
                })
            }
        }
        
    };
</script>
