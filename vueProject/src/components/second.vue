<template>
	<div>
		<div class="contain-head">
			<RadioGroup type="button" size="large">
		        <Radio label="第一页">
		            <router-link to='/first'>第一页</router-link>
		        </Radio>
		        <Radio label="第二页">
		            <router-link to='/'>第二页</router-link>
		        </Radio>
		        <Radio label="第三页">
		            <router-link to='/project/index'>第三页</router-link>
		        </Radio>
		        <Radio label="第四页">
		        	<router-link to='/fourth'>第四页</router-link>
		      	</Radio>
		    </RadioGroup>
		</div>
		<div class="contain-main">
			<p>v-model指令在表单元素上实现双向绑定，p元素上的内容随着文本框的值改变</p>
			<span>{{message}}</span>
			<input type="text" v-model="message" />
			<br /><br />
			<span>{{counter}}</span>
			<i-button type="primary" @click="counter1()">add once each time</i-button>
			
			<br />
			请输入内容(实现内容翻转)：
			<input type="text" v-model="text" />
			显示：{{text | myFilter}}
			<br />
			<h4 v-show="age >= 23">age:{{age}}</h4>
			<!--<h4 v-else>sex:{{sex}}</h4>-->
			<h1>====================</h1>
			<h5 v-if="name.indexOf('li') >= 0">Name:{{name}}</h5>
			<h5 v-else>sex:{{sex}}</h5>
		</div>
		
	</div>
</template>

<script>
	export default {
	 	name: 'second',
		data () {
		    return {
		    	message:'hello filter',
		  	    counter:0,
		  	    text: '',
		  	    index:0,
		  	    yes:true,
				no:false,
				age:21,
				name:'lwzq',
				sex:'man',
				whats:''
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
		},
		mounted(){
			console.log(11,this.whats)
		},
		computed:{
		 	whatsFunction(){
		 		return this.$route.params.id
		 	}
		},
		watch: {
            $route (to,from){
                // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
                console.log(to);
                console.log(from);
                this.whats = to.params.id;
                console.log(this.whats)
            }
		}
  	}
	
</script>

<style scoped>
	.contain-main{
		font-size: 20px;
	}
</style>