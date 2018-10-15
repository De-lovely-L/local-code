<template>
	  <div>
	  	<div class="contain-head">
	      <i-input type="text" placeholder="订单号" style="width: 200px;"></i-input>
	      <i-button type="primary" >搜索</i-button>
	      <i-button type="primary">重置</i-button>
	    </div>
	    <div class="contain-main">
	        <i-table :data="data" :columns="columns">
	        </i-table>
	    </div>
    </div>
</template>

<script>
	import * as constants from './const.js'
	import {getCustomerList} from '@/api/customer'
	export default{
		name: 'custometList',
        data(){
          return {
            columns: constants.getCustomrColumns(),
            data:[]
          }
				},
        methods :{
					loadList(){
		                let _vm = this;
		                let params={
		                	actUserId : "89d8e9f2-6b84-4da2-886f-03654d0e90be",
		                	companyId : "df4201c7-e865-4231-b4cb-8e821ec4ff58",
		                	pageNum : 1,
		                	pageSize : 10,
		                	keyword: '',
		                	actCompanyId: "df4201c7-e865-4231-b4cb-8e821ec4ff58"
		                }
//		               getCustomerList(params).then((data)=>{
//		               	debugger
//		                    _vm.data = data.resultObj.dataList
//		                })
		            },
				},
				created(){
					this.loadList()
				}
	}
</script>

<style>
</style>