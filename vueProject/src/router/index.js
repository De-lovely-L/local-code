import Vue from 'vue'
import Router from 'vue-router'

/*定义组件*/
//import first from '@/components/first'  //或者可以直接定义：const first={template:'<div><h2>i’m first page</h2></div>'}
const routerView = () => import('@/common/router-view');
const home = () => import('@/view/home'),
	notFound = () => import('@/common/notFound'),
	first = () => import('@/components/first'),
	second = () => import('@/components/second'),
	beautyList = () => import('@/view/study/buity_list'),
	father =() => import('@/frame/father'),
	mintUi =() => import('@/view/study/mintStudy');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',   
      name: 'login',
      component: (resolve)=>require(['@/view/login'],resolve)
	},
	{
	  path: '/',   
	  //  重定向    redirect:'/login',
      redirect: {name: "login"},//为后期更好维护，写成name形式
	},
    {
    	path:'/home',
		name:'home',
		component:home,
    	children:[
			//如果这里是写／xx具体的名称，其路径就是绝对路径，若写成xx   ，就是相对路径
			{name: 'first', path: 'first', component: first},
			{name: 'second', path: 'second', component: second},
		]
    },
    {
		  path: '/user',
		  name:'user',
		  component: routerView,//引入子路由
//引入子页面
		  children: [
		    {path: 'list',name:'list',component:(resolve)=>require(['../components/user/list'],resolve)},
		    {path: 'details/:id',name:'details',component:(resolve)=>require(['../components/user/details'],resolve)},
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
			path:'/shop',
			name:'shop',
			component:(resolve)=>require(['@/components/shop'],resolve)
		},
		{
			path:'/beautyList',
			name:'beautyList',
			component:beautyList
		},
		{
			path:'/father',
			name:'father',
			component:father
		},
		//mint-ui
		{
			path:'/mint-ui',
			name:'mintUi',
			component:mintUi
		},
		{
			path:'*',
			component:notFound
		}
  ]
})

