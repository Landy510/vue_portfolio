# vue_hw

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

**作業修改進度**
* 功能部分
	* 除此之外似乎安裝了 bootstrap-vue 但卻沒有使用？若確定沒有使用請移除。 -> ok，已經移除。 2021/02/27
	* fontawesome 的引入建議寫法。 -> ok! 2021/02/27
	* rules 建議可以放在 new Vue 之前。 -> ok! 2021/02/27
	* import 時建議補上副檔名，像是import Navbar from './Navbar.vue' -> ok! 2021/02/27
	* v-for 不要跟 v-if 併用 (已修改檔案: Home.vue, Lecture_Product.vue, SelfProduct.vue) -> ok! 2021/02/27
	* v-for 請補上 :key，例如：orderList.vue。 -> ok! 2021/02/27
	* SelfProduct.vue 的 169 行可以不用寫呼叫函式因為並沒有做其他特別的處理，因此可直接綁 getProduct 即可。 -> ok! 2021/02/27
	* 該頁面若沒有使用 jQuery 請移除「import $ from 'jquery';」 (已修改檔案: orderList.vue, SelfProduct.vue, CustomerCheckout.vue) -> ok! 2021/02/27
	* 單純的 button 並沒有預設行為，因此可以不用寫 .prevent。
	* 單純的 button 按鈕請補上 type="button" 屬性。   -> ok! 2021/02/27
	* Products.vue 的 Status 建議可以改成 status 統一駝峰命名。  -> ok! 2021/02/27
	* router-link 可以直接寫內文不用再次撰寫 a 標籤。 -> ok! 2021/02/27
	* img 標籤建議盡可能去描述，而不是單純的「alt="Card image cap"」。 -> ok! 2021/02/27
	* 一個頁面只會有一個 h1 標籤。  -> ok! 2021/02/27
	* 有關陣列的filter功能改寫成比較簡短的形式。 -> ok! 2021/02/27
	* Home.vue 的 ReadWebSiteWidth 中的 if 判斷是似乎是想寫 if...else if? 在此可以考慮 switch。 -> ok! 已將那個函式刪掉了，用vue-carousel取代這個函式的swiper功能了。
	* Footer.vue 外層可以去除 div 直接 footer 即可。 -> ok! 2021/02/27
	* orderList.vue 的 th 概念類似 td 建議可以改成以下。 -> ok! 2021/02/27
	* 當宣告 const vm = this; 之後可以將 this 替換成 vm，例如： this.$http.get 改為 vm.$http.get 等。 -> ok! 2021/02/27
	* SCSS 請以縮排兩格為主 ，可參考這一篇建議規範文獻。 -> ok! 2021/02/27
* 畫面部分
	* 整體

	* 產品頁

	* 購物車
		* 因為你的購物車 icon 在右側，因此購物車的側欄從右側滑入會更符合使用者體驗。 -> OK! 2021/02/26

	* 結帳表單