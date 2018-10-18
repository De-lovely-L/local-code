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
		<div class="gridview">
			<Row>
		        <i-col span="8">
		        	<Icon type="logo-javascript" color="pink" size="32" />
		        	<em>javascript</em>
		        </i-col>
		        <i-col span="8">
		        	<Icon type="ios-nutrition" color="#26a2ff" size="32" />
		        	<em>jquery</em>
		        </i-col>
		        <i-col span="8">
		        	<Icon type="md-paw" color="#FEBF06" size="32" />
		        	<em>es6</em>
		        </i-col>
		    </Row>
		    <Row style="margin-top: 35px;">
		        <i-col span="8">
		        	<Badge :count="0" overflow-count="6">
			        	<Icon type="md-paper-plane" color="#FF5946" size="32"/>
			        	<em>html</em>
		        	</Badge>
		        </i-col>
		        <i-col span="8">
		        	<Badge :count="6" overflow-count="6">
		                <a href="#" class="demo-badge"></a>
		                <Icon type="md-transgender" size="32"/>
		                <em>css</em>
		          </Badge>  
		        </i-col>
		        <i-col span="8">
		        	<Icon type="md-pulse" color="#8dec14" size="32"/>
		        	<em>css3</em>
		        </i-col>
		    </Row>
	    </div>
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
	.ivu-col-span-8{
		text-align: center;
	}
	em{
		display: block;
		font-size: 18px;
	}
	.gridview{
		
	}
</style>