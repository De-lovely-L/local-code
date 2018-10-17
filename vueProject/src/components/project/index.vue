<template>
	<div>
		<mt-swipe :auto="2000">
		  <!--<mt-swipe-item v-for="(img,index) in imgMessage" :key='index'>
		  	<a :href="img.url"><img :src="img.src" /></a>
		  </mt-swipe-item>-->
		  <mt-swipe-item>
		  	<a href="https://www.iviewui.com/"><img src="@/assets/iview.png" /></a>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<a href="https://mint-ui.github.io/#!/zh-cn"><img src="@/assets/mint-ui.png" /></a>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<a href="https://cn.vuejs.org/v2/guide/index.html"><img src="@/assets/vue.png" /></a>
		  </mt-swipe-item>
		</mt-swipe>
		<Row>
	        <Col span="8">col-12</Col>
	        <Col span="8">col-12</Col>
	        <Col span="8">col-12</Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="8">col-8</Col>
	        <Col span="8">col-8</Col>
	        <Col span="8">col-8</Col>
	    </Row>
	</div>
</template>

<script>
	export default{
		name:'projectIndex',
		data(){
			return{
			}
		},
		mounted(){
		},
		 computed:{
		 	
		 },
		 watch: {
        }
	}
</script>

<style scoped>
	.mint-swipe{
		height: 187px;
	}
	img{
		max-width: 100%;
	    height: auto;
	    display: inline-block;
	}
</style>