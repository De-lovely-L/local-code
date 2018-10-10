<template>
	<div>
		<div class="head">
			通过router-link传递参数进入详情页查看英雄具体信息
		</div>
		<div class="body">
			<ul>
				<li v-for="(hero, index) in heros" :key="index">
					{{hero.name}}
					<!--/details?id=xxx-->
					<!--<router-link :to="{name:'details',query:{id:index}}">query参数查看</router-link>-->
					<!--/details/id=xxx-->
					<router-link :to="{name:'details',params:{id:index}}">params参数查看</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				heros:[{
					name: '李白',
				},{
					name: '橘右京',
				},{
					name: '鲁班',
				},{
					name: '扁鹊',
				}],
			}
			
		}
	}
</script>

<style scoped="scoped">
	.head{
		height: 50px;
		background: skyblue;
		font-size: 25px;
		text-align: center;
	}
	.body{
		background: pink;
		font-size: 15px;
	}
	ul{
		list-style-type: none;
		margin-left: 30px;
	}
</style>