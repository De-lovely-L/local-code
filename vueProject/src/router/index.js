import Vue from 'vue'
import Router from 'vue-router'

/*定义组件*/
//import first from '@/components/first'  //或者可以直接定义：const first={template:'<div><h2>i’m first page</h2></div>'}
const home = () => import('@/view/home');
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',   
      name: 'login',
      component: (resolve)=>require(['@/view/login'],resolve)
    },
    {
    	path:'/home',
    	name:'home',
    	component:home
    },
    {
      path: '/second',   
      name: 'second',
      component: (resolve)=>require(['@/components/second'],resolve)
    },
    //重定向，如果没有这个，则login的path在调用时为/，重定向以后就可以写/  or   /login
    {
    	path:'',
    	redirect:(resolve)=>require(['@/view/login'],resolve)
    },
    {
    	path:'/first',
    	name:'first',
    	component:(resolve)=>require(['@/components/first'],resolve)//把这个组件作为默认首页 
    	/*beforeRouterLeave(to, from, next){
    		//设置下一个路由的meta
    		to.meta.keepAlive=true;
    		next();
    	}*/
    },
    {
		  path: '/user',
		  component: (resolve)=>require(['../frame/subroute.vue'],resolve),//引入子路由
//引入子页面
		  children: [
		    {path: '/one',component:(resolve)=>require(['../components/user/one'],resolve)},
		    {path: '/user/two',component:(resolve)=>require(['../components/user/two'],resolve)},
		    {path: '/user/three',component:(resolve)=>require(['../components/user/three'],resolve)}
	  	],
		},
		{
			path:'/third',
			name:'third',
			component:(resolve)=>require(['@/components/third'],resolve),
			/*beforeRouterLeave(to, from, next){
    		//设置下一个路由的meta
    		to.meta.keepAlive=false;
    		next();
    	}*/
		},
		{
			path:'/fourth',
			name:'fourth',
			component:(resolve)=>require(['@/components/fourth'],resolve)
		},
		{
			path:'/baba',
			name:'baba',
			component:(resolve)=>require(['@/components/baba'],resolve)
		},
		{
			path:'/shop',
			name:'shop',
			component:(resolve)=>require(['@/components/shop'],resolve)
		},
  ]
})

