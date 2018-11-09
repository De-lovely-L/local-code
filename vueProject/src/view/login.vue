<template>
	<div>
		<div class="login">
			<div class="login-icon">
				<Card style="width:400px; margin: 200px auto; height: 300px;">
			        <p slot="title">
			            <Icon type="ios-film-outline"></Icon>
			            欢迎登录
			        </p>
			        <i-form ref="loginForm" :rules="loginForm" :model="user">
			        	<div><span class="fc3">手机号</span> / PhoneNumber </div>
		                <Form-item prop="user_mobile">
		                    <i-input type="text" placeholder="请输入用户名" v-model="user.user_mobile" @on-enter="doLogin">
		                        <Icon type="ios-person-outline" slot="prepend"></Icon>
		                    </i-input>
		                </Form-item>
		                <div><span class="fc3">密码</span> / Password</div>
		                <Form-item prop="user_pwd">
		                    <i-input type="password" placeholder="请输入密码" v-model="user.user_pwd" @on-enter="doLogin">
		                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
		                    </i-input>
		                </Form-item>
		                <div class="mb20">
		                    <Checkbox-group v-model="staticLogin">
		                        <Checkbox label="1">自动登录</Checkbox>
		                    </Checkbox-group>
		                </div>
		                <i-button type="primary" size="large" long @click="doLogin">登录</i-button>
		            </i-form>
			    </Card>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return{
				user:{
					user_mobile:'',
					user_pwd:'',
				},
				loginForm: {
	                user_mobile: [
	                    { required: true, message: '账号不能为空', trigger: 'blur' }
	                ],
	                user_pwd: [
	                    { required: true, message: '密码不能为空', trigger: 'blur' }
	                ]
	            },
	            staticLogin:[]
			}
		},
		methods:{
			doLogin(){
	            this.$refs.loginForm.validate((valid) => {
	                if (valid) {
	                	this.$Message.success('登录成功!')
	                    this.$router.push({name:"home"}) 
	                }
	            })
			}
		}
	}
</script>

<style scoped>
	.login-icon{
		background: url(../assets/p2.jpg);
	}
</style>