import Vue from 'vue'
import Router from 'vue-router'

/*定义组件*/
//import first from '@/components/first'  //或者可以直接定义：const first={template:'<div><h2>i’m first page</h2></div>'}
const routerView = () => import('@/common/router-view');
const home = () => import('@/view/home'),
    login =() => import('@/view/login.vue'),
	notFound = () => import('@/common/notFound'),
	first = () => import('@/components/first'),
	second = () => import('@/components/second'),
	beautyList = () => import('@/view/study/buity_list'),
	father =() => import('@/frame/father'),
	mintUi =() => import('@/view/study/mintStudy'),
	photoShare = () => import('@/components/project/photoShare/index.vue'),
	custometList =() => import('@/components/customer/index'),
	photoDetail =() => import('@/components/project/photoShare/detail');
	

Vue.use(Router)

export default new Router({
//	linkActiveClass:'xxx',  可以在这里面添加某个样式类，这样的话默认全局根据路由来添加样式
  routes: [
//	{
//	  path: '/login',   
//	  //  重定向    redirect:'/login',
//    redirect: {name: "login"},//为后期更好维护，写成name形式
//	},
	{
		path:'/login',
		name:'login',
		component:login,
	},
	//默认项目地址
	{
		path:'/projectIndex',
		name:'projectIndex',
		component:(resolve)=>require(['@/components/project/index'],resolve),
	},
	{
		path:'/project/shopCart',
		name:'proShopCart',
		component:(resolve)=>require(['@/components/project/shopCart/index'],resolve),
	},
	{
		path:'/project/search',
		name:'proSearch',
		component:(resolve)=>require(['@/components/project/search/index'],resolve),
	},
	{
		path:'/project/mine',
		name:'proMine',
		component:(resolve)=>require(['@/components/project/mine/index'],resolve),
	},
	{
		path:'/project/jsIndex',
		name:'jsList',
		component:(resolve)=>require(['@/components/project/js/index'],resolve),
	},
	{
		path:'/project/jsDetails/:jsId',
		name:'jsDetails',
		component:(resolve)=>require(['@/components/project/js/details'],resolve),
	},
	{
		path:'/project/photoShare',
		name:'photoShare',
		component:photoShare
	},
	{
		path:'/project/photoDetail/:id',
		name:'photoDetail',
		component:photoDetail
	},
    {
    	path:'/home',
		name:'home',
		component:home,
    	children:[
			//如果这里是写／xx具体的名称，其路径就是绝对路径，若写成xx   ，就是相对路径
			{name: 'first', path: 'first', component: first},
			{name: 'second', path: 'second', component: second},
			{
				path:'beautyList',
				name:'beautyList',
				component:beautyList
			},
			{
				path:'custometList',
				name:'custometList',
				component:custometList
			}
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

