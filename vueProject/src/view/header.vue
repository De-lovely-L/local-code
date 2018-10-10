<template>
	<div class="head">
		<h1>{{title}}</h1>
		<div class="fl">
		    <RadioGroup v-model="theme" size="large">
		        <Radio label="light"></Radio>
		        <Radio label="dark"></Radio>
		    </RadioGroup>
	    </div>
	</div>
</template>

<script>
	export default{
		//接收父组件值参数的设置
		props:[
			'title'
		],
		data(){
			return{
				theme: 'light'
			}
		}
	}
</script>

<style scoped lang="scss">
.head{
        background-color: cornflowerblue;
        height: 50px;
	h1 {
	    color: white;
	    font-family: "blackadder itc";
	    margin-left: 20px;
	    line-height: 50px;
	    display: inline-block;
	    width: 50%;
	}
	.fl{
	    float: right;
	    line-height: 45px;
	}
}
</style>