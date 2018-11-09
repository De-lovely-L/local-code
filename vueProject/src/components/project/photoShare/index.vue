<template>
	<div>
		<nav-bar title='图文分享'></nav-bar>
		<div class="photo-head">
			<ul>
				<li v-for="category in categorys" :key='category.id'>
					<a @click="loadImg(category.id)">{{category.title}}</a>
				</li>
			</ul>
		</div>
		<div class="photo-list">
			<ul>
				<li v-for="img in imgs" :key='img.id' style="position: relative;">
					<a>
						<!--<img :src="img.url" />-->
						<!--图片懒加载-->
						<img v-lazy="img.url" />
						<p class="li-text">
							<span style="font-size: 25px;">{{img.title}}</span>
							<br />
							<span>{{img.content}}</span>
						</p>
					</a>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'photoShare',
		data(){
			return{
				categorys:[
				{
					"id":1,
					"title":'摄影学习'
				},
				{
					"id":2,
					"title":'健康美食'
				},
				{
					"id":3,
					"title":'前端学习'
				}],
				imgs:[
				{
					'id':1,
					'title':'李敏镐',
					'url':require('./p1.jpg'),
					'content':'The most handsome man in the world'
				},
				{
					'id':2,
					'title':'嗯嘛~',
					'url':require('@/assets/p2.jpg'),
					'content':'The most handsome man in the world'
				},
				{
					'id':3,
					'title':'大帅哥',
					'url':require('@/assets/p3.jpg'),
					'content':'The most handsome man in the world'
				}]
			}
		},
		methods:{
			loadImg(id){
				alert(id)
			}
		},
       created(){
       		this.categorys.unshift({id:0,title:'全部'})
       }
	}
</script>

<style scoped="scoped">
	.photo-head li{
		display: inline-block;
    	padding: 10px;
    	color: blue;
	}
	.photo-list{
		position: absolute;
	    padding-bottom: 168px;
	    height: 100%;
	    overflow: scroll;
	}
	/*图片懒加载样式*/
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
	.li-text{
		position: absolute;
		bottom: 10px;
		left: 10px;
		font-size: 20px;
		color: white;
	}
	img 
	{
    max-width: 100%;
    height: auto;
    display: inline-block;
	}
</style>