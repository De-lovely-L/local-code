<template>
	<div>
		<header-vue :title="title"></header-vue>
		<div class="menu">
			<Menu :theme="theme1" active-name="activeName">
		            <MenuItem name="0">
		                <!-- <router-link :to="{name:'first'}">{{item.title}}</router-link> -->
						<router-link :to="{name:'first'}">文章管理</router-link>
		            </MenuItem>
					<MenuItem name="1">
		                <!-- <router-link :to="{name:'first'}">{{item.title}}</router-link> -->
						<router-link :to="{name:'second'}">评论管理</router-link>
		            </MenuItem>
	    	</Menu>
    	</div>
    	<div class="layout-content">
            <keep-alive include="v2BuildOrder">
                <router-view class="contain"></router-view>
            </keep-alive>
    	</div>
	</div>

</template>

<script>
//引入子组件对象
import headerVue from '@/view/header.vue'
import firstVue from '@/components/first.vue'
	export default{
		name:'home',
		data(){
			return{
				theme1: 'light',
				title:'解忧codeHouse',
				menusData:[
					{'title': '文章管理','type': 'md-leaf', 'link': 'first'},
					{'title': '评论管理','type': 'ios-paper', 'link': 'second'},
					{'title': '用户留存','type': 'ios-people', 'link': 'shop'},
					{'title': '流失用户','type': 'ios-analytics','link': 'fourth'},
				],
				activeName:0
			}
		},
		methods:{
		},
		components:{
			//组件名（在模板中使用）： 组件对象
			headerVue,
			firstVue
		},
		created(){
			console.log(this.$http);
			
		}
	}
</script>

<style lang="scss" src="./home.scss"></style>
