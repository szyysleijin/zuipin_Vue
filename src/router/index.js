import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'  //Home
import brand from './../components/All/brand'  // Home 品牌集成
import orderimg from './../components/All/orderimg' //Home 茶礼订制
import brandList from './../components/All/brandList'  // Home 商品列表
import branditem from './../components/All/branditem'  //Home 商品详情
import shopcar from './../components/shopcar'   //购物车
import classify from './../components/classify'    //分类组件
import my from './../components/my'  //my
import register from './../components/All/register' //注册
Vue.use(Router)

export default new Router({
	linkActiveClass:'active',    //切换tabbar class
	//linkExactActiveClass:'active', 
	routes:[
		{path:'*',component:Home},
		{path:'/',component:Home,meta:{requiresAuth:true,active:'/'}},  //meta:{requiresAuth:true,active:'/'  ****
		{path:'/Home',component:Home},
		{path:'/brand',component:brand,meta:{requiresAuth:true,active:'/'}},
		{path:'/orderimg',component:orderimg,meta:{requiresAuth:true,active:'/'}},
		{path:'/brandList',component:brandList,meta:{requiresAuth:true,active:'/classify'}},
		{path:'/branditem',component:branditem,meta:{requiresAuth:true,active:'/'}},
		{path:'/classify',component:classify},
		{path:'/shopcar',component:shopcar},
		{path:'/my',component:my,
			children:[ 
				
			]
		},
		{path:'/register',component:register,meta:{requiresAuth:true,active:'/my'}}
	]
})


