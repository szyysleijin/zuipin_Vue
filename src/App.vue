<template>
  <div id='app'>
		<!-- 导航 -->
		
		
		<!-- 占位 -->
		<router-view></router-view>
		
		<!-- footer -->
		<myfooter></myfooter>
		
  </div>
</template>
<script>
	import myfooter from './components/footer/footer'
	export default {
		data(){
			return{
			
			}
		},
		components: {
			myfooter
		},
		methods:{
			
		},
		created(){
			//在页面加载时读取localStorage里的状态信息
			localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
 
			//在页面刷新时将vuex里的信息保存到localStorage里
			window.addEventListener("beforeunload",()=>{
			localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
			})
		},
		mounted(){
		
		}
	}
</script>
<style>
	.mint-tabbar{
		display: fixed;
		bottom:50px;
		background:#fff;
		z-index: 888;
	}
	#app{
		padding-top:.96rem;
	/* 	padding-bottom:50px; */
	}
	span.mui-icon{
		font-size:.48rem; 
	}
	a.mui-tab-item span:first-child{
		margin-bottom: .1rem;
	}
.top>img{
	width:1.7rem;
	margin:.2rem;
	float:left;
}
.top>.top-right{
	position: relative;
	float: left;
}
.top>.top-right>span{
	position: absolute;
	left: .1rem;
	top:.25rem;
	color:#c9c9c9;
}
.top>.top-right>input{
	background:#F0F0F0;
	width:5rem;
	height:.56rem;
	line-height: .56rem;
	border-radius:.2rem;
	margin:.2rem;
	margin-top:.2rem;
	font-size: .24rem;
	color: #adadad;
	padding:0;
	padding-left:.6rem;
	margin-left:0;
	border:0;
}
.top{
	width:100%;
	border-bottom: 1px solid #e0e0e0;
	background: #fff;
	position:fixed;
	z-index: 1000;
	
	background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 10000;
    border-bottom: 1px solid #e0e0e0;
}

</style>
