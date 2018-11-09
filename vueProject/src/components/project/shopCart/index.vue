<template>
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width: 20px; height: 15px;">
			<defs>
				<g id="image">
					<rect width="80" height="60" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0);"></rect>
				</g>
			</defs>
		</svg>
		<!--顶部-->
		<section style="height: 30px;">
			<span>JD</span>
			<span>购物车</span>
			<span>享受包邮</span>
		</section>
		<section v-for="(shop,index) in shopListArr">
			<div class="svgMeg">
				<input type="checkbox"  :checked="shop.checked" @click="singleShopSelect(shop)"/>
				<svg style="width: 100%; height: 100%;">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#image"></use>
				</svg>
			</div>
			<div id="shopMeg">
				<p class="shopMeg">{{shop.shopName}}</p>
				<span id="singlePrice">{{shop.shopPrice | moneyFormat(shop.shopPrice)}}</span>
				<span id="totalPrice">{{shop.shopPrice * shop.shopNumber | moneyFormat(shop.shopPrice * shop.shopNumber)}}</span>
				<div class="number">
					<button id="decrese" @click="singleShopPrice(shop,false)">-</button>
					<input value="shop.shopNumber" type="text" v-model="shop.shopNumber" />
					<button id="increse" @click="singleShopPrice(shop,true)">+</button>
				</div>
				<span @click="clickDel(shop)">删除</span>
			</div>
		</section>
		<!--底部通栏-->
			<div id="foot">
				<input type="checkbox" :checked="isSelectAll" @click="SelectAll(isSelectAll)" style="display: inline-block; float: left;"/>
				<span style="float: left;">全选</span>
				<span>总价格：{{totalPrice | moneyFormat(totalPrice)}}</span>
			</div>
			<!--弹出面板-->
			<div class="panel" :class="{'panel_is_show':isHideDelPanel}">
				<div class="panel_content">
					<div class="panel_title">
						你确定删除这个商品吗？
					</div>
					<div class="panel_footer">
						<button class="cencel" @click="isHideDelPanel = true">取消</button>
						<button class="submit" @click="delShop()">确定</button>
					</div>
				</div>
			</div>
	</div>
	
</template>

<script>
	export default{
		name:'shop',
		//购物车中的数据
	data(){
		return {
			shopListArr:[],
			//是否全选中
			isSelectAll:false,
			totalPrice:0,
			//是否隐藏删除面板
			isHideDelPanel:true,
			//要删除的东西
			currentDelShop:[]
		}
	},
	//组件已经加载完毕，请求网络数据，业务处理
	mounted(){
				//请求本地数据
				this.getLocalData();
			},
			//过滤，格式化价格
	filters:{
		moneyFormat(money){
			return '￥' + (parseFloat(money)).toFixed(2);
		}
	},
	methods:{
			//请求本地数据
			getLocalData(){
				this.$http.get('/getdata').then(response =>{
					console.log(response.body);
					this.shopListArr=response.body.data.allShops.shopList;
					console.log(11,this.shopListArr)
				},response =>{
					alert('请求失败')
				})
			},
			//单个商品加减
			singleShopPrice(shop,flag){
				if(flag){//加
					shop.shopNumber ++;
				}else{//减
					if(shop.shopNumber==1){
						shop.shopNumber=1;
					}
					else{
						shop.shopNumber --;
					}
				}
				this.getAllShopPrice()
			},
			
			SelectAll(flag){
				//控制全选
					this.isSelectAll=!flag;
					
				//连接到单选
				//遍历所有的商品数据
				this.shopListArr.forEach((shop,index)=>{
					//判段是否有这个属性
					if(typeof shop.checked==='undefined'){//商品数据的checked是否为undefined，若为则该属性不存在
						this.$set(shop,'checked',!flag);   //用$set添加属性
					}else{
						shop.checked=!flag;
					}
				})
				this.getAllShopPrice();
			},
			//计算总价格
			getAllShopPrice(){
				let totalPrice=0;
				//遍历所有的商品
				this.shopListArr.forEach((shop,index)=>{
					//判段商品是否被选中
					if(shop.checked){
						totalPrice +=shop.shopNumber * shop.shopPrice;
					}
				})
				this.totalPrice=totalPrice;
			},
			//单个商品的选中和取消
			singleShopSelect(shop){
				//首先应该判断是否有checked这个属性，否则报错
				if(typeof shop.checked==='undefined'){
					this.$set(shop,'checked',true)
				}else{
					shop.checked=!shop.checked;
				}
				//单个商品选中后，还要在调用计算总价格的方法
				this.getAllShopPrice();
				
				//判断是否全选中了
				this.hasSelectAll()
			},
			//判断是否全选中了
			hasSelectAll(){
				let flag=true;//定义一个标记，修改data属性isSelectAll
				//也是先遍历商品数据看是否被选中，然后修改其标记
				this.shopListArr.forEach((shop,index)=>{
					if(!shop.checked){
						flag=false;
					}
				})
				this.isSelectAll=flag;
			},
			//点击删除出现删除面板
			clickDel(shop){
				this.isHideDelPanel=false;
				this.currentDelShop=shop;
			},
			//删除当前的商品
			delShop(){
				//点击确定后，先把面板隐藏掉
				this.isHideDelPanel=true;
				//在把当前商品移除
					//根据索引来删除
					const SHOP_INDEX=this.shopListArr.indexOf(this.currentDelShop);
					//删除商品
					this.shopListArr.splice(SHOP_INDEX,1);
					
					//此时在计算总价格
					this.getAllShopPrice();
			}
			
	}
}
</script>

<style scoped='scoped'>
	/*@import url("../../../static/shopCart.css");*/
	@charset "utf-8";
	span{
		display: inline-block;
	}
	span:first-child{
		color: red;
		font-weight: bold;
		opacity: 0.6;
	}
	span:last-child{
		color: red;
		margin-left: 200px;
	}
	section{
		width: 366px;
		height: 100px;
		margin-top: 40px;
		border-bottom: 1px solid #dddddd;
	}
	#shopMeg{
		display: inline-block;
		float: left;
		width: 265px;
	}
	.svgMeg{
		width: 100px;
		height: 100px;
		display: inline-block;
		float: left;
	}
	#singlePrice{
		float: left;
		color: red;
	}
	input{
		width: 40px;
		text-align: center;
	}
	p{
		text-align: left;
		margin: auto;
	}
	.number{
		width: 260px;
		display: inline-block;
		float: left;
	}
	#totalPrice{
		float: right;
	}
	.panel_is_show{
		display: none;
	}
	.panel{
		background-color: floralwhite;
		width: 230px;
		height: 120px;
		line-height: 30px;
		left: 22%;
		top: 30%;
		color: black;
		z-index: 2;
		position: absolute;
		text-align: center;
	}
	.panel_content{
		margin-top: 30px;
	}
	.panel_title{
		margin-bottom: 10px;
	}
	.cencel{
		background: lightgray;
		margin-right: 20px;
	}
	.submit{
		background: red;
		color: white;
	}
	button{
		border:0;
		padding: 5px 10px;
	}

</style>