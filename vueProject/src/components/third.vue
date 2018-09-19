<template>
	<div>
		<h1>this is third page</h1>
		<h4 v-show="age >= 23">age:{{age}}</h4>
		<!--<h4 v-else>sex:{{sex}}</h4>-->
		<h1>====================</h1>
		<h5 v-if="name.indexOf('li') >= 0">Name:{{name}}</h5>
		<h5 v-else>sex:{{sex}}</h5>
		<router-link to='/first'>第一页</router-link>
		<router-link to='/' exact>登录页</router-link>
		<router-link to='/third'>第三页</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'third',
		data(){
			return{
				yes:true,
				no:false,
				age:21,
				name:'lwzq',
				sex:'man',
				whats:''
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

<style>
</style>