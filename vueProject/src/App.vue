<!--<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="$route.meta.keepAlive"></router-view>
	</div>
</template>-->
<template>
  <div id="app">
 	<mt-header title="DOUBLE_L"></mt-header>
 	<router-view></router-view>
 	<mt-tabbar>
	  <mt-tab-item id="首页">
	  	<img slot="icon" src="./assets/home.png">
	    首页
	  </mt-tab-item>
	  <mt-tab-item id="购物车">
	  	<img slot="icon" src="./assets/shopCar.png">
	    购物车
	  </mt-tab-item>
	  <mt-tab-item id="查找">
	  	<img slot="icon" src="./assets/search.png">
	    查找
	  </mt-tab-item>
	  <mt-tab-item id="我的">
	    <img slot="icon" src="./assets/mine.png">
	    我的
	  </mt-tab-item>
	</mt-tabbar>
   </div>
</template>

<script>
import home from './components/home.vue';
 
export default{
    components: {
        home: home,
      }
}
 
</script>

<script>
	export default{
		data(){
			return{
			}
		}
	}
</script>

<style scoped>
</style>