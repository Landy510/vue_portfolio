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

* 畫面部分
	* 整體

	* 產品頁

	* 購物車
		* 因為你的購物車 icon 在右側，因此購物車的側欄從右側滑入會更符合使用者體驗。 -> OK! 2021/02/26

	* 結帳表單