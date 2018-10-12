<template>
	  <div>
        <div class="contain-main">
            <i-table :data="data" :columns="columns">
            </i-table>
        </div>
    </div>
</template>

<script>
	import * as constants from './const.js'
	import * as $api from '@/api/customer.js'
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
                	company_id : "df4201c7-e865-4231-b4cb-8e821ec4ff58",
                	pageNum : 1,
                	pageSize : 10,
                	keyword: '',
                	actCompanyId: "df4201c7-e865-4231-b4cb-8e821ec4ff58"
                }
               $api.getCustomerList(params).then((data)=>{
                    _vm.data = data.resultObj.dataList
                })
            },
		},
		created(){
			this.loadList()
		}
	}
</script>

<style>
</style>