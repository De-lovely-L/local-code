<template>
	<div >
		<br />
		<Button @click="waitSon" type="success">爸爸等待</Button>
		<sub-vue></sub-vue>
	</div>
	
</template>

<script>
	import connector from './connect.js'
	import subVue from './subroute.vue'
	
	export default{
		name :'father',
		data(){
			return{}
		},
		components:{
			subVue
		},
		methods:{
			waitSon(){
				connector.$on('phone',function(msg){
					alert(msg)
				})
			}
		}
	}
</script>

<style>
</style>