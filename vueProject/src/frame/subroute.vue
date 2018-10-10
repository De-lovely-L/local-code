<template>
	<div>
		I'm son
		<Button @click="callDaddy" type="primary">call dad</Button>
	</div>
</template>

<script>
	import connector from './connect.js'
	
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			callDaddy(){
				connector.$emit('phone','一会就回来');
			}
		}
	}
</script>

<style>
</style>