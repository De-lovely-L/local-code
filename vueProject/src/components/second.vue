<template>
	<div id="example2">
		<p>{{message}}</p>
		<input type="text" v-model="message" />   <!--v-model指令在表单元素上实现双向绑定，p元素上的内容随着文本框的值改变-->
		<span>add once each time</span>&nbsp;&nbsp;<button @click="counter1()">{{counter}}</button>
		<router-link to='/first'>第一页</router-link>
		<router-link to='/'>第二页</router-link>
		<router-link to='/third'>第三页</router-link>
		<router-link to='/fourth'>第四页</router-link>
		<hr />
		请输入内容：
		<input type="text" v-model="text" />
		显示：{{text | myFilter}}
	</div>
</template>

<script>
	export default {
	 	name: 'second',
		data () {
		    return {
		    	message:'hello filter',
		  	    counter:0,
		  	    text: ''
	    	}
		},
		methods:{
			counter1:function(){
				return this.counter+=1
			} 
		},
		filters:{
			myFilter(value){
				//转换成数组，反转数组，转换成字符串
				
				return value.split('').reverse().join('');
			}
		}
		
  	}
	
</script>

<style>
</style>