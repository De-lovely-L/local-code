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
	  <mt-tab-item>
	  	<img slot="icon" src="./assets/home.png">
	  	<router-link :to="{name: 'projectIndex'}">首页</router-link>
	  </mt-tab-item>
	  <mt-tab-item>
	  	<img slot="icon" src="./assets/shopCar.png">
	   <router-link :to="{name: 'proShopCart'}"> 购物车</router-link>
	  </mt-tab-item>
	  <mt-tab-item>
	  	<img slot="icon" src="./assets/search.png">
	    <router-link :to="{name: 'proSearch'}">查找</router-link>
	  </mt-tab-item>
	  <mt-tab-item>
	  	<img slot="icon" src="./assets/mine.png">
	    <router-link :to="{name: 'proMine'}">我的</router-link>
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
	.router-link-active{
		color: red;
	}
</style>