<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="$route.meta.keepAlive"></router-view>
	</div>
</template>

<!--<template>
  <div id="app">
 	
   </div>
</template>
 -->
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

<style>
</style>