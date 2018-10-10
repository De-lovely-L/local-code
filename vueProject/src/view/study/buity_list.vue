<template>
	<div>
		<ul>
			<li v-for="(hero, index) in heros" :class="{'A':'red','B':'green','C':'pink','D':'blue'}[hero.score]" :key="index">
				{{hero.name}}:{{hero.score}}
				<button @click="del(index)">删除</button>
			</li>
		</ul>
		<br />
		英雄姓名：<input type="text" v-model="name"><br />
		英雄等级：<input type="text" v-model="score">
		<i-button type="primary" @click="addHero">添加英雄</i-button>
	</div>
</template>

<script>
	export default{
		name: 'beautyList',
		data(){
			return {
				heros:[{
					id: 1,
					name: '李白',
					score: 'A'
				},{
					id: 2,
					name: '橘右京',
					score: 'B'
				},{
					id: 3,
					name: '鲁班',
					score: 'C'
				},{
					id: 4,
					name: '后羿',
					score: 'D'
				}],
				name:"",
				score:""
			}
		},
		methods:{
			addHero(){
				this.heros.push({
					name: this.name,
					score: this.score
				})
				this.name = '';
				this.score = '';
			},
			del(index){
				this.heros.splice(index, 1)
			}
		},
		created(){
			console.log(this.heros)
		}
	}
</script>

<style>
	.red{
		background: red;
	}
	.green{
		background: greenyellow;
	}
	.pink{
		background: hotpink;
	}
	.blue{
		background: skyblue;
	}
</style>