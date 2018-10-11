<template>
	<div>
		<mt-header title="多个按钮">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button @click="handleClose">关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<Table class="table" :columns="columns1" :data="data1"></Table>
        <Table class="table" :columns="columns1" :data="data1"></Table>
		
		<mt-swipe :auto="1000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>	
	</div>
</template>

<script>
	export default{
		name:'mintUi',
		data(){
			return{
				 columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
			}
		},
		methods:{
			handleClose(){
				
			}
		}
	}
</script>

<style>
	.table{
        display: inline-block;
        width: 50%;
        float: left;
    }
</style>
