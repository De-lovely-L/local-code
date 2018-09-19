<template>
	<div>
		<div id="parent">
			<first></first>
			<second></second>
		</div>
	</div>
	
</template>

<script>
	import myfirst from './first.vue'
	import mysecond from './second.vue'
	export default{
		name:'baba',
		components:{
			'first':myfirst,
			'second':mysecond
		}
	}
</script>

<style>
</style>