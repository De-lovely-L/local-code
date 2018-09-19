<template>
	<div>
		<div class="head">
			<h1>解忧codeHouse</h1>
			<!--<img src="../assets/u=639605140,3340384717&fm=26&gp=0.jpg"  width="100px" height="100px"/>-->
			<div class="fl">
			    <RadioGroup v-model="theme1" size="large">
			        <Radio label="light"></Radio>
			        <Radio label="dark"></Radio>
			    </RadioGroup>
		    </div>
		</div>
		<div>
		<Menu :theme="theme1" active-name="1">
	        <MenuGroup title="内容管理">
	            <MenuItem name="1">
	                <Icon type="md-document" />
	                文章管理
	            </MenuItem>
	            <MenuItem name="2">
	                <Icon type="md-chatbubbles" />
	                评论管理
	            </MenuItem>
	        </MenuGroup>
	        <MenuGroup title="统计分析">
	            <MenuItem name="3">
	                <Icon type="md-heart" />
	                用户留存
	            </MenuItem>
	            <MenuItem name="4">
	                <Icon type="md-leaf" />
	                流失用户
	            </MenuItem>
	        </MenuGroup>
    	</Menu>
    	</div>
    	<div class="layout-content">
            <keep-alive include="v2BuildOrder">
                <router-view class="contain"></router-view>
            </keep-alive>
    	</div>
	</div>
	

</template>

<script>
	export default{
		name:'home',
		data(){
			return{
				theme1: 'light',
			}
		}
	}
</script>

<style lang="scss" src="./home.scss"></style>
