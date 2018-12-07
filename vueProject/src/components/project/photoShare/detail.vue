<template>
	<div class="main">
		<nav-bar title='图片详情'></nav-bar>
		<!--v-for="(imgInfo,index) in imgInfoData" :key="index"-->
		<div class="photo-head" >
			<p class="title" v-html='imgInfoData.title'></p>
			<span class="time">
				浏览日期：{{imgInfoData.time}}
			</span>
			<img :src="imgInfoData.url" />
			<p class="content" v-html='imgInfoData.content'>ghrthrtth
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
					content:'1、若需要排序，则在排序开始单元格添加type: index。<br> 若需要包含checkbox，则在单元格添加type: selection。<br> 若需单元格添加点击事件或做数据处理等，可以编写render函数'
				},
				{
					id:'2',
					url:require('@/assets/p2.jpg'),
					title:'如何让span中的文字垂直居中？',
					time:'2018-11-22 12:12:12',
					content:'前提使span的样式为block或者line-block；<br>设置宽、高度；<br>水平居中：text-align:center；<br>垂直居中：line-height：值为span的高度；'
				},
				{
					id:'3',
					url:require('@/assets/p3.jpg'),
					title:'input框赋值 ？',
					time:'2018-11-22 12:12:12',
					content:'input框赋值  <input  id="name1"  name="teacherName" type="text"  /> ' +
					'$("#name1").val("值");   document.getElementById("name1").value="值";  document.getElementById("name1").html("值"); '+
					'document.getElementById("name1").attr("值");   document.getElementById("name1").innerText = "值";'
				},
				{
					id:'4',
					url:require('@/assets/food1.jpg'),
					title:'父子组件传值',
					time:'2018-11-22 12:12:12',
					content:'A、 父组件向子组件传值：子组件中在props中创建接受父组件值的字段，在父组件中引入注册子组件，在子组件标签中添加子组件props创建的属性，把值赋值给属性。<br>' + 
						'B、 子组件向父组件传值：    子组件需要以某种方式例如点击事件的方法来触发一个自定义事件，将需要传的值作为$emit的第二个参数，作为实参传给响应式自定义事件的方法，第一个参数作为父子之间的介质。在父组件中注册子组件并在子组件标签上绑定自定义事件的监听。<br>' +
						'在通信中，无论是子组件向父组件传值还是父组件向子组件传值，他们都有一个共同点就是有中间介质，子向父的介质是自定义事件，父向子的介质是props中的属性。'
				},
				{
					id:'5',
					url:require('@/assets/food2.jpg'),
					title:'js保留两位小数',
					time:'2018-11-22 12:12:12',
					content:'A、四舍五入的情况：   var num = 3.656 ; <br> num = num.toFixed(2)   //num = 3.66 <br>' + 
					'B、不是四舍五入  先把小数变整数  <br> Math.floor(15.4485 * 100) / 100       // 15.44 <br>' + 
					'C、<br>Number(15.7784514000.toString().match(/^\d+(?:\.\d{0,2})?/))   //15.77'
				},
				{
					id:'6',
					url:require('@/assets/food3.jpg'),
					title:'坑  <a href="https://blog.csdn.net/OBKoro1/article/details/78517739">params与query的区别</a> ',
					time:'2018-11-22 12:12:12',
					content:'&nbsp;&nbsp;&nbsp;&nbsp;在tms  车辆对账详情的时候，用params 传递参数跳转页面时，此时定义路由的时候后面需加上参数且需与params 的传递的参数字段名保持一致。 </br>' + 
						'&nbsp;&nbsp;&nbsp;&nbsp;遇到一个问题：其中一个值为空时（order_no），路由信息会被清空，则重定向到默认页面。<span style="color: red">!!!!params传递参数时，值必须一致且不为空。</span>  </br>'	 +
						'<span style="color: red">query 传递参数时可以，不一定所有的参数都得带上值，且query 传递时不需要在路由里定义参数。</span>  </br>' +
						'<em style="font-weight:bold">总结：</em>a、params是路由的一部分,必须要有。query是拼接在url后面的参数，没有也没关系。 </br>' +
						'params一旦设置在路由，params就是路由的一部分，如果这个路由有params传参，但是在跳转的时候没有传这个参数，会导致跳转失败或者页面会没有内容。 </br>'+
						'b、params、query不设置也可以传参，但是params不设置的时候，刷新页面或者返回参数会丢失，query并不会出现这种情况，这一点的在上面说过了'
				}
				]
				
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
		    }
			this.imgInfos.forEach( v => {
	        	if(v.id == this.id){
	        		this.imgInfoData = v
	        	}
	        })
		},
	}
</script>

<style lang='scss'>
	.main{
		height: auto;
		    width: 100%;
	    overflow-y: scroll;
	    overflow-x: hidden;
	    position: absolute;
	    padding-bottom: 100px;
	    top: 45px;
	    bottom: 60px;
	    .photo-head{
	    	padding: 10px 20px 0;
	    }
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