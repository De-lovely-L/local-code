<template>
	<div class="main">
		<nav-bar title='图片详情'></nav-bar>
		<!--v-for="(imgInfo,index) in imgInfoData" :key="index"-->
		<div class="photo-head" >
			<p class="title">{{imgInfoData.title}}</p>
			<span class="time">
				浏览日期：{{imgInfoData.time}}
			</span>
			<img :src="imgInfoData.url" />
			<p class="content">
				{{imgInfoData.content}}
			</p>
		</div>
		<!--<p>
			2、若需要在表格尾部或头部添加一行自定义的数据，需可以自定义表格，或者往后台返回的数据根据数据结构添加一行数据，直接渲染
			3、表格中on-selection-change 在多选模式下有效，只要选中项发生变化就会触发，返回值为已选项数据
			4、表格中 on-row-click 单击某一行时触发	当前行的数据 及index
		</p>-->
	</div>

</template>

<script>
	export default{
		name:'photoDetail',
		data(){
			return {
				id:'',
				//根据id返回当前图片信息
				imgInfoData:[],
				imgInfos:[
				{
					id:'1',
					url:require('./iview-table.png'),
					title:'iview 表格',
					time:'2018-11-22 12:12:12',
					content:'1、若需要排序，则在排序开始单元格添加type: index。若需要包含checkbox，则在单元格添加type: selection。若需单元格添加点击事件或做数据处理等，可以编写render函数'
				},
				{
					id:'2',
					url:require('./p1.jpg'),
					title:'如何让span中的文字垂直居中？',
					time:'2018-11-22 12:12:12',
					content:'前提使span的样式为block或者line-block；设置宽、高度；水平居中：text-align:center；垂直居中：line-height：值为span的高度；'
				},
				{
					id:'3',
					url:require('@/assets/food1.jpg'),
					title:'input框赋值 ？',
					time:'2018-11-22 12:12:12',
					content:'input框赋值  <input  id="name1"  name="teacherName" type="text"  /> ' +
					'$("#name1").val("值");   document.getElementById("name1").value="值";  document.getElementById("name1").html("值"); '+
					'document.getElementById("name1").attr("值");   document.getElementById("name1").innerText = "值";'
				},
				{
					id:'4',
					url:require('@/assets/food2.jpg'),
					title:'父子组件传值',
					time:'2018-11-22 12:12:12',
					content:'A、 父组件向子组件传值：子组件中在props中创建接受父组件值的字段，在父组件中引入注册子组件，在子组件标签中添加子组件props创建的属性，把值赋值给属性。' + 
						'B、 子组件向父组件传值：    子组件需要以某种方式例如点击事件的方法来触发一个自定义事件，将需要传的值作为$emit的第二个参数，作为实参传给响应式自定义事件的方法，第一个参数作为父子之间的介质。在父组件中注册子组件并在子组件标签上绑定自定义事件的监听。' +
						'在通信中，无论是子组件向父组件传值还是父组件向子组件传值，他们都有一个共同点就是有中间介质，子向父的介质是自定义事件，父向子的介质是props中的属性。'
				}]
				
			}
		},
		computed:{
//			time(){
//				let myDate = new Date();
//				return myDate.toLocaleDateString()+myDate.toLocaleTimeString();
//			},
//			index(){
//				debugger
//		        switch (this.id) {
//			        case "1": {
//			          return this.index = 0;
//			          break;
//			        }
//			        case "2": {
//			        	return this.index = 1;
//			          break;
//			        }
//			        case "3": {
//			        	return this.index = 2;
//			          break;
//			        }
//			        default: {
//			        	return this.index= 3;
//			          break;
//			        }
//    			}
//			}
		},
		watch:{
		},
		created(){
			if (this.$route.params.id) {
		        this.id = this.$route.params.id;
		        console.log(this.id)
		    }
			this.imgInfos.forEach( v => {
	        	if(v.id == this.id){
	        		this.imgInfoData = v
	        		console.log(this.imgInfoData)
	        	}
	        })
		},
	}
</script>

<style>
	.main{
		overflow: scroll;
	}	
	.title{
		font-size: 18px;
    	color: #249fd2;
    	display: inline-block;
    	padding: 5px;
    	height: 30px;
	}
	.time{
		float: right;
    	line-height: 30px;
	}
	.content{
		padding: 5px;
		font-size: 14px;
		text-align: justify;
	}
	
	.router-link-active{
		color: red;
	}
</style>