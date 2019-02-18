<template>
	<div class='app-Home'>
		<!-- 导航 -->
		<div class='top'>
			<img src="img/logo.png" alt="">
			<div class='top-right'>
				<span class='mui-icon mui-icon-search'></span>
				<input type="text" placeholder="武夷大红袍">
			</div>
		</div>
		<!-- 1轮播 -->
     <mt-swipe :auto="3000">
       <mt-swipe-item v-for="item in list" :key="item.id">
          <img  :src="item.imgurl"/>
       </mt-swipe-item>
     </mt-swipe>
		 <!-- 2 index-services.png -->
		 <div class='services'><img src="img/index-services.png" alt=""></div>
		 <!-- 3头条 -->
		 <div class='toutiao'>
			 醉品
			 <span>头条</span>
			 中国是茶的故乡，《茶经》有云：“茶之为饮，发乎神农氏，文娱鲁周公。”茶叶深深融入中国人生活，成为传承中华文化的重要载体。从古代丝绸之路、茶马古道、茶船古道，到今天丝绸之路经济带、21世纪海上丝绸之路，
		 </div>
		 <!-- 4     九宫格 -->
		 <div class='five'>
			 <router-link to='/brand'>
				 <div class='newone' >
				 	<img src="img/cbt_ic_01.png" alt="">
				 	<p>
				 		品牌集成
				 	</p>
				 </div>
			 </router-link>
			 
			 
			 <div class='newone' >
			 	<img src="img/cbt_ic_02.png" alt="">
			 	<p>
			 		大师名匠
			 	</p>
			 </div>
			 <router-link to='/orderimg'>
				 <div class='newone' >
				 <img src="img/cbt_ic_03.png" alt="">
				 <p>
				 	茶礼订制
				 </p>
				 </div>
			 </router-link>
			 
			 
			 <div class='newone' >
			 	<img src="img/cbt_ic_04.png" alt="">
			 	<p>
			 		醉品茶集
			 	</p>
			 </div>
			 
			 <router-link to='/classify'>
				 <div class='newone' >
				 	<img src="img/cbt_ic_05.png" alt="">
				 	<p>
				 		分类
				 	</p>
				 </div>
			 </router-link>
			 
		 </div>
		 <!-- 5 限时特价,    子组件 -->
		 <Timedspecials></Timedspecials>
		 <!-- 6 发现好茶 送礼 -->
		 <discover></discover>
		 <!-- 7 新品首发 -->
		 <newfirst></newfirst>
		 <!-- 8 热评产品 -->
		 <buzz></buzz>
		 <!-- 9 热销top类 -->
		 <topAsc></topAsc>
		<!-- 10 tannar -->
		<!-- <tabbar></tabbar> -->
	</div>
	
</template>

<script>
	import tabbar from './footer/footer.vue'
	import topAsc from './HomeComponent/topAsc'
	import buzz from './HomeComponent/buzz'
	import Timedspecials from './HomeComponent/Timedspecials'
	import discover from './HomeComponent/discover'
	import newfirst from './HomeComponent/newfirst'
	export default {
		data() {
			return {
				list:[
					{id:1,imgurl:'img/banner/swipe1.jpg'},
					{id:2,imgurl:'img/banner/swipe2.jpg'},
					{id:3,imgurl:'img/banner/swipe3.jpg'},
					{id:4,imgurl:'img/banner/swipe4.jpg'},
					{id:5,imgurl:'img/banner/swipe5.jpg'},
					{id:6,imgurl:'img/banner/swipe6.jpg'}
				],
				five:[
					{id:1,imgurl:'img/cbt_ic_01.png',msg:'品牌集成'},
					{id:2,imgurl:'img/cbt_ic_02.png',msg:'大师名匠'},
					{id:3,imgurl:'img/cbt_ic_03.png',msg:'茶礼订制'},
					{id:4,imgurl:'img/cbt_ic_04.png',msg:'醉品茶集'},
					{id:5,imgurl:'img/cbt_ic_05.png',msg:'分类'}
				],
				math:[]
			};
		},
		components:{
			Timedspecials,
			discover,
			newfirst,
			buzz,
			topAsc,
			tabbar
		},

	}
</script>

<style>

	.newone{
		float:left;
		width:1.5rem;
		height:2rem;
	}
	.newone>img{
		width:.88rem;
		height:.88rem;
		margin:.28rem 0 0 .31rem ;
	}
	.newone p {
		text-align: center;
		margin-top:.1rem;
		line-height: .24rem;
    font-size: .24rem;
    color: #666;
	}
	.five,.toutiao,.services{
		background:#fff;
	}
	.five{
		margin-top:.2rem;
	}
	.toutiao{
		font-size:.36rem;
		height:.9rem;
		line-height: .9rem;
		padding-left:.2rem;
		overflow: hidden;
	}
	.toutiao span{
		background:#FF3700;
		border:1px solid transparent;
		border-radius:.02rem ;
		color:#fff;
	}
 
	.app-Home{
	}

 .app-Home .mint-swipe{
   height:3.74rem;
 }
 .app-Home .mint-swipe img{
   width:100%;

 }
 .services{
	 border-bottom:1px solid #E6E6E6;

 }
.services img{
	height:.7rem;

} 
/* 
.mint-swipe{
 }
 .mint-swipe img{
   width:100%;
	 height:100%;
 }
 .mint-swipe-items-wrap{
	 height:1rem;
 } */
</style>
