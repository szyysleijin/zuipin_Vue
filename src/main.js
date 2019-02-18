 import Vue from 'vue'
import App from './App.vue'
import router from './router'
 Vue.config.productionTip = false
 
 
 //Vuex 
import Vuex from 'vuex'		//引入
// console.log(Vuex)
Vue.use(Vuex) 	//注册Vuex组件 全局
var store = new Vuex.Store({		//创建Vuex实例对象
	state:{
		cartcount:0			,//购物车中数量
		islogin:false    ,//是否登录
		uid:0							//用户id	
	},
	mutations:{	//修改共享数据方法				..  this.$store.commit('loginuid',123)
		increment(state,count){state.cartcount+=count},
		substract(state){state.cartcount--},
		clear(state){state.cartcount=0},
		
		upislogin(state){state.islogin=true},
		logout(state){state.islogin=false},
		
		loginuid(state,id){state.uid=id}
		// 登录之后购物车数量
		// logininit(state,count){state.cartcount+=count}
	},
	getters:{
		optcartcount(state){		//获取共享数据方法
			return state.cartcount				
		},
		islogin1(state){
			return state.islogin
		},
		// 获取登录后的用户id
		getuid(state){
			return state.uid
		}
	}
})
 
 
 
import './lib/mui/css/mui.css'	//mui的css
// import './lib/mui/js/mui.js'   //报错  
import './assets/css/reset.css'   //公共样式
import { Swipe, SwipeItem, Loadmore,Navbar,TabItem,TabContainer, TabContainerItem} from 'mint-ui';	//swipe  mint-ui
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name,Loadmore)	//下拉加载

import { Tabbar } from 'mint-ui';  
Vue.component(Tabbar.name, Tabbar);


Vue.component(Navbar.name,Navbar)  //选项卡 123
Vue.component(TabItem.name,TabItem)//选项卡 123//选项卡 123
Vue.component(TabContainer.name, TabContainer);//选项卡 123
Vue.component(TabContainerItem.name, TabContainerItem);//选项卡 123

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
//console.log(InfiniteScroll)

import 'mint-ui/lib/style.css'  //******************mint-ui css********老是忘记
import './lib/mui/css/icons-extra.css'// 还需要加载图标字体文件..导入 MUI 的样式表，扩展图标样式，购物车图标
import mui from './lib/mui/js/mui.js'  //mui JS
Vue.prototype.mui=mui;							





import axios from 'axios';
Vue.prototype.axios=axios;
// console.log(axios)


router.afterEach((to,from,next)=>{		//解决跳转高度问题
	window.scrollTo(0,0)
})


new Vue({
  render: h => h(App),
	router,
	store  				//将Vuex对象注册 Vue实例
}).$mount('#app')
 

