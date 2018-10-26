<template>
	<div class="">
		<nav-bar title="js列表"></nav-bar>
		<div class="">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="{'name':'jsDetails'}" class="flex">
						<img class="mui-media-object mui-pull-right" src="../../../assets/变量设置模板.svg">
						<div class="mui-media-body">
							变量提升
							<p class='mui-ellipsis'>在ES6之前，JavaScript没有块级作用域(一对花括号{}即为一个块级作用域)，只有全局作用域和函数作用域。变量提升即   将变量声明提升到它所在作用域的最开始的部分。</p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link :to="{'name':'jsDetails'}" class="flex">
						<img class="mui-media-object mui-pull-right" src="../../../assets/循环.svg">
						<div class="mui-media-body">
							map() 
							<p class='mui-ellipsis'>方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。(参数也是函数提供)</p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link :to="{'name':'jsDetails'}" class="flex">
						<img class="mui-media-object mui-pull-right" src="../../../assets/js.svg">
						<div class="mui-media-body">
							js的作用
							<p class='mui-ellipsis'>一个页面的交互，不能完全使用css或者html实现，需要一些js配合</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{

		}
	},
	components:{
		
	}

}
</script>

<style scoped>
	.mui-table-view{
		margin: 20px auto;
	}
	.mui-table-view-cell{
		margin: 25px auto;
	}
	.flex{
		display: flex;
	}
	.mui-media-object{
		margin-right: 10px;
	    display: inline-block;
	    width: 50px;
	    height: 50px;
	    margin-left: 10px;
	}
	.mui-media-body{
		display: inline-block;
	    font-size: 18px;
	    color: #2d2c2c;
	    width: 100%;
	}
	.mui-ellipsis{
		color: #8f8f94;
    	font-size: 15px;
    	width: 80%;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	
</style>