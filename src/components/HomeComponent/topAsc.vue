<template><!-- 5热销top  Home子组件-->
	<div class='topasc'> 
		<h3>TOP8茶叶类目</h3>
		<p>
			<img class='topimg topimg'  src="img/right_lazy.png" alt="">
			品八大茗茶<img class='topmiddle char' src="img/center_lazy.png" alt="">
			享闲雅之意
			<img class='topimg topimg'  src="img/right_lazy.png" alt="">
		</p>
		<div class='images'>
			<router-link :to='{path:"/brandList",query:{msg:"铁观音"}}'>
				<img src="img/安溪铁观音.jpg" alt="">
			</router-link>
			
			<router-link :to="{path:'/brandList',query:{msg:'大红袍'}}">
				<img class='dt' src="img/dahongpao.jpg" alt="">
			</router-link>
			
		</div>
		<div class='images imageslist'>
			<router-link v-for='item in list1' :to="{path:'/brandList',query:{msg:item.msg}}">
				<img :src="item.url" alt="">
			</router-link>
		</div>
		
		<div class='images imageslist'>
			<router-link v-for='item in list2' :to="{path:'/brandList',query:{msg:item.msg}}">
				<img :src="item.url" alt="">
			</router-link>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list1:[
					{id:1,url:'img/zs.jpg',msg:'正山小种'},
					{id:2,url:'img/jjun.jpg',msg:'金骏眉'},
					{id:3,url:'img/baicha.jpg',msg:'白茶'}
				],
				list2:[
					{id:1,url:'img/pe.jpg',msg:'普洱'},
					{id:2,url:'img/danc.jpg',msg:'单从'},
					{id:3,url:'img/lg.jpg',msg:'龙井'}
				]
			}
		}
	}
</script>

<style>
	.dt{
		width:2.5rem !important;
		border-right:0 none !important;
	}
	.kong{
		height:50px;
	}
	.topasc{
		margin-bottom:50px;
	}
	.imageslist img:first-child{
		border:0 !important;
	}
	.imageslist img:not(:first-child){
		border-left:1px solid #e6e6e6;
	}
	.imageslist{
		margin-top:0 !important;
	}
	.imageslist img{
		width:2.48rem !important;
	}
	.images{
		margin-top:.2rem;
		border-bottom:1px solid #e6e6e6; 
	}
	.images img:last-child{
		width:2.46rem;
	}
	.images img:first-child{
		width:5rem;
		border-right: 1px solid #e6e6e6;
	}
	img.char{
		margin-left:.1rem;
		margin-bottom:.1rem;
	}
	img.topimg{
		width:2rem;
		}
	.topmiddle{
		width:.19rem;
		margin:0 .05rem;
	}
	.topasc>p{
		margin-top:.15rem;
		color: #999;
		font-size: .22rem;
		text-align: center;
	}
	.topasc>p>img{
		vertical-align:middle;
	}
	.topimg{
		width:2.3rem;
	}
	.topasc{
		margin-bottom:50px;
		background:#fff;
		margin:.2rem 0;
		padding-top:.3rem;
	}
	.topasc h3{
		text-align: center;
		font-size:.36rem;
		color:#424242;
	}
</style>

