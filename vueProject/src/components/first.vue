<template>
	<!--一个组件下只能有一个并列的 div,-->
	<div id="example">
			<h1>{{msg}}</h1>
			<Menu mode="horizontal" :theme="theme1" active-name="1"><!--mode 菜单类型 可选水平和垂直（vertical）-->
				<router-link to="/first">
					<MenuItem name="1">
						<Icon type="ios-paper"></Icon>
						第一页
					</MenuItem>
				</router-link>
				<router-link to="/">
					<MenuItem name="2">
						<Icon type="ios-people"></Icon>
						第二页
					</MenuItem>
				</router-link>
				<Submenu name="3">
		            <template slot="title">
		                <Icon type="stats-bars"></Icon>
		                to the child components
		            </template>
		            <MenuGroup title="一到三">
		                <MenuItem v-for="(item,index) in menuList" :key="item.id" :name="index+1">
		                	<router-link :to="item.url">{{item.name}}</router-link>
		                </MenuItem>
		            </MenuGroup>
		        </Submenu>
			</Menu>
	</div>
</template>
<script>
	export default {
	 	name: 'first',
		data () {
		    return {
		  	  msg: 'this is first page',
		  	  theme1:'dark',
		  	  menuList:[{
		  	  	name:"one",
		  	  	id:"1",
		  	  	url:"/one"
		  	  },{
		  	  	name:"two",
		  	  	id:"2",
		  	  	url:"/user/two"
		  	  },{
		  	  	name:"three",
		  	  	id:"3",
		  	  	url:"/user/three"
		  	  },{
		  	  	name:"购物车",
		  	  	id:"4",
		  	  	url:"/shop"
		  	  }
		  	  ]
	    	}
		},
		methods:{
			toOne:function(name){
				this.$router.push(name)
			}
		}
		
		
	}
</script>

<style>
	#example{
		width: 500px;
		position: static;
		text-align: center;
	}
</style>