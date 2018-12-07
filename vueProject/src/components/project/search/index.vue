<template>
	<div>
		<div class="contain-main">
			<Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="80">
				<FormItem label="评论：" prop="discuss">
		            <Input v-model="formData.discuss" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入您的见解..."></Input>
		        </FormItem>
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formData')">发表</Button>
		            <Button @click="handleReset('formData')" style="margin-left: 8px">取消</Button>
		        </FormItem>
	        </Form>
		</div>
		
	</div>

</template>

<script>
	export default{
		data(){
			return {
				formData:{
					discuss:''
				},
				ruleValidate:{
					discuss: [
                        { required: true, message: '这是必填项' }
                    ],
				}
			}
		},
		methods:{
			handleSubmit(){
				
			},
			handleReset(){}
		}
	}
</script>

<style>
	.contain-main{
		padding: 20px 20px;
	}
</style>