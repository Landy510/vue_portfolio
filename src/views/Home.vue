<template>
  <div>
    <div class="container main-content mb-3">
      <Loading :active.sync="isLoading"></Loading>
      <div class="row mb-5">
        
        <div class="col-12 text-center" style="position:relative">
          <button class="btn btn-outline-dark btn-transparent MoveToLeft d-none d-md-block" style="position:absolute; left:-10px; top:150px; z-index:2;">  <font-awesome-icon :icon="['fas','long-arrow-alt-left']" size="2x"></font-awesome-icon> </button>
          <button class="btn btn-outline-dark btn-transparent MoveToRight" style="position:absolute; right:-20px; top:150px; z-index:2;"><font-awesome-icon :icon="['fas','long-arrow-alt-right']" size="2x"></font-awesome-icon></button>
          <small class="text-muted">教練推薦課程</small>
          <p class="h2 mb-4 font-weight-normal">Recommended</p>
          <div class="row flex-md-nowrap py-2 Recommended_class_frame">
            <div class="col-md-4 Recommended_class mb-2 mb-md-0">
              <div class="card h-100 border-0">
                <img class="card-img-top h-60" src="https://upload.cc/i1/2020/12/26/y5BPdl.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text mb-0">自由馬拉松</p>
                  <small class="card-text text-muted">NT$ 4000</small>
                </div>
                <div class="card-footer p-0 border-0 bg-transparent">
                  <button class="btn btn-outline-dark btn-lg rounded-0">前往課程介紹</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 Recommended_class mb-2 mb-md-0">
              <div class="card h-100 border-0">
                <img class="card-img-top h-60" src="https://upload.cc/i1/2020/12/24/6CAbc3.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text mb-0">瑜珈課程</p>
                  <small class="card-text text-muted">NT$ 500</small>
                </div>
                <div class="card-footer p-0 border-0 bg-transparent">
                  <button class="btn btn-outline-dark btn-lg rounded-0">前往課程介紹</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 Recommended_class mb-2 mb-md-0">
                  <div class="card h-100 border-0">
                <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/04/CQFhfR.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text mb-0">飲食控制套餐</p>
                  <small class="card-text text-muted">NT$ 1000</small>
                </div>
                <div class="card-footer p-0 border-0 bg-transparent">
                  <button class="btn btn-outline-dark btn-lg rounded-0">前往課程介紹</button>
                </div>
              </div>
            </div>

            <div class="col-md-4 Recommended_class mb-2 mb-md-0">
              <div class="card h-100 border-0">
                <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/s3GHBq.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text mb-0">挺舉 Clean and Jerk</p>
                  <small class="card-text text-muted">NT$ 1000</small>
                </div>
                <div class="card-footer p-0 border-0 bg-transparent">
                  <button class="btn btn-outline-dark btn-lg rounded-0">前往課程介紹</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 Recommended_class mb-2 mb-md-0">
              <div class="card h-100 border-0">
                <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/HRgYB3.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text mb-0">戰繩 Battle Rope</p>
                  <small class="card-text text-muted">NT$ 3000</small>
                </div>
                <div class="card-footer p-0 border-0 bg-transparent">
                  <button class="btn btn-outline-dark btn-lg rounded-0">前往課程介紹</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 Recommended_class mb-2 mb-md-0">
              <div class="card h-100 border-0">
                <img class="card-img-top h-60" src="https://upload.cc/i1/2020/12/26/z5e1qK.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text mb-0">深蹲 Squat</p>
                  <small class="card-text text-muted">NT$ 4000</small>
                </div>
                <div class="card-footer p-0 border-0 bg-transparent">
                  <button class="btn btn-outline-dark btn-lg rounded-0">前往課程介紹</button>
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
                  <div class="col-md-4 mb-2">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/04/CQFhfR.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">飲食套餐 Diet</p>
                        <small class="card-text text-muted">NT$ 300</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-2">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/6lcXf2.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">拳擊 Boxing</p>
                        <small class="card-text text-muted">NT$ 1000</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-2">
                        <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/4rZItp.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">游泳 Swim</p>
                        <small class="card-text text-muted">NT$ 1000</small>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 mb-2">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/HRgYB3.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">戰繩 Battle Rope</p>
                        <small class="card-text text-muted">NT$ 3000</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-2">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2020/12/26/z5e1qK.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">深蹲 Squat</p>
                        <small class="card-text text-muted">NT$ 4000</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-2">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2020/12/16/8xAIVN.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">減脂套餐 Cutting Fat</p>
                        <small class="card-text text-muted">NT$ 400</small>
                      </div>
                    </div>
                  </div>
                </div>


                
            </div>
            <div class="tab-pane fade" id="list-Workout" role="tabpanel" aria-labelledby="list-Workout-list">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2020/12/26/z5e1qK.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">深蹲 Squat</p>
                        <small class="card-text text-muted">NT$ 4000</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/3EOzWP.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">相撲硬舉 Sumo Deadlift</p>
                        <small class="card-text text-muted">NT$ 500</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                        <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/s3GHBq.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">挺舉 Clean and Jerk</p>
                        <small class="card-text text-muted">NT$ 1000</small>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="tab-pane fade" id="list-women" role="tabpanel" aria-labelledby="list-women-list">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/HRgYB3.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">戰繩 Battle Rope</p>
                        <small class="card-text text-muted">NT$ 3000</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/S7TgVl.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">慢跑 Jogging</p>
                        <small class="card-text text-muted">NT$ 500</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                        <div class="card h-100 border-0 Lecture">
                      <img class="card-img-top h-60" src="https://upload.cc/i1/2021/02/05/4rZItp.jpg" alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text mb-0">游泳 Swim</p>
                        <small class="card-text text-muted">NT$ 1000</small>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>
          </div>

          <router-link to="Products">
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
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      products: [],
      searchText: '',
      categories: [],
      isLoading: false,
    };
  },
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
}
.MoveToLeft{
  transition:all .5s;
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