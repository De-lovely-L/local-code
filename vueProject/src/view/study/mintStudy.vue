<template>
	<div>
		<mt-header title="多个按钮">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button @click="handleClose">关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		
		
		<mt-swipe :auto="1000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>	
	</div>
</template>

<script>
	export default{
		name:'mintUi',
		data(){
			return{
				
			}
		},
		methods:{
			handleClose(){
				
			}
		}
	}
</script>

<style>
</style>