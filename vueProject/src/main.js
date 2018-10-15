// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   /*引入Vue框架*/
import App from './App'
import router from './router'   /*路由*/
/*import api from './config/api'
// 将API方法绑定到全局
Vue.prototype.$api = api*/

//引入
import VueResource from 'vue-resource'
//安装插件
Vue.use(VueResource);//插件挂载实例     未来可通过this.$http  vue是所有实例对象的构造函数－》Vue。protptype.$http -> 实例(this)就恶意.$http

//引入mint-ui
import MintUi from 'mint-ui';
//引入样式
import 'mint-ui/lib/style.css';
import '@/scss/common/index.scss';
//安装插件
Vue.use(MintUi);
//use 实际操作
//1：组件库，在内部注册了各种全局组件
//2：插件，挂载属性，为方便this，可以使用其功能
//3： 在实际开发过程中按需引入，减少包的大小
import { Indicator } from 'mint-ui';
//引入axios
import axios from 'axios';
Vue.prototype.$axios=axios;    //那么在其他vue组件中就可以this.$axios调用使用
//axios.default.baseURL = 'http://mtms-dev.yunba.com/api/mtms'

//定义拦截器
//在请求之前
  axios.interceptors.request.use(function(config){
 		Indicator.open('加载中。。。。');
//	 	if(config.method === 'post') {
//	    config.data = qs.stringify(config.data);
//	  }
	  return config;  //添加这一行
  })
  
 axios.interceptors.response.use(function(config){
 	Indicator.close();
})


Vue.config.productionTip = false

//引入iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)
/*Vue.use(iView, {
  i18n: function(path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) {
      return value
    }
    return ''
  }
})*/
/* eslint-disable no-new */




//定义一个全局过滤器
Vue.filter('myFilter',function(value){
	return "我是全局过滤器"
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
