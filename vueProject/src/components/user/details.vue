<template>
	<div>
	{{this.heros[this.id.id].detail}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				heros:[{
					id:0,
					name: '李白',
					detail:'他是个刺客'
				},{
					id:1,
					name: '橘右京',
					detail:'他也是个刺客'
				},{
					id:2,
					name: '鲁班',
					detail:'他是个adc'
				},{
					id:3,
					name: '扁鹊',
					detail:'他是个辅助'
				}],
				id:	''
			}
		},
		//数据初始化完成，dom还未生成
		created(){
			//获取路由参数，vue-router中挂载两个对象的属性：$route(信息数据) $router(功能函数)
//			console.log(this.$route.query)//所带参数用query 就获取query
			this.id = this.$route.params
		},
		//已经将数据装载到页面上，dom已经生成
		mounted(){}
	}
</script>

<style>
</style>