<template>
	<div id="example4">
		<h1>this is fourth page</h1>
		<fieldset>
			<legend>Person录入系统</legend>
			<div>
				<span>姓名：</span>
				<input type="text" placeholder="请输入姓名" v-model="newPerson.name">
			</div>
			<div>
				<span>年龄：</span>
				<input type="text" placeholder="请输入年龄" v-model="newPerson.age">
			</div>
			<div>
				<span>性别：</span>
				<select v-model="newPerson.sex">
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</div>
			<button @click="createPerson()">create</button>
		</fieldset>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>Sex</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(p,index) in people">
					<td>{{p.name}}</td>
					<td>{{p.age}}</td>
					<td>{{p.sex}}</td>
					<td :class="'text-center'"><button @click="deletePerson(index)">Delete</button></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default{
		name:'fourth',
		data(){
			return{
				newPerson:{
					name:'',
					age:0,
					sex:'Male'
				},
				people:[{
					name: 'Jack',
                    age: 30,
                    sex: 'Male'
				},{
					name:'rose',
					age:29,
					sex:'Female'
				}]
			}
		},
		methods:{
			createPerson:function(){
				//判断是否为空
				if(this.newPerson.name === ''){
					alert('姓名不能为空');
					return;//添上return，不然之前写的东西也会被清空
				}
				//往数组里添加记录
				this.people.push(this.newPerson);
				//清空表单
				this.newPerson={name:'',age:0,sex:'Male'}
			},
			deletePerson:function(index){
				this.people.splice(index,1)
			}
		}
	}
</script>

<style>
	@import '../../static/fourth.css'
</style>