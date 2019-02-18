<template><!--Home link 品牌集成  -->
	<div class='brand'>
		<img src="img/HomeBrand/ppgwap_02.jpg" alt="">
		<!-- :to="{path:'/brandList',query:{msg:item.msg}}"	*********骚操作********** -->	
		<router-link :to='{path:"/brandList",query:{msg:item.msg}}' v-for='item in list' :key='item.id' >
			<img :src="item.url" alt="">
		</router-link>
		<img src="img/ppgwap_09.jpg" alt="">
		<div class='jx'>
			<router-link :to="{path:'/brandList',query:{msg:item.msg}}" v-for='item in jx' :key='item.id'>
				<img :src="item.url" alt="" >
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{id:1,url:"img/ppgwap2_03.jpg",msg:'醉品朴茶'},
					{id:2,url:"img/ppgwap2_05.jpg",msg:'曦瓜'},
					{id:3,url:"img/ppgwap2_07.jpg",msg:'集韵'}
				],
				
				jx:[
					{id:1,url:"img/df.jpg",msg:'顶峰'},
					{id:2,url:"img/bg.jpg",msg:'八桂凌云'},
					{id:3,url:"img/wm.jpg",msg:'魏荫'}
				]
			};
		}
	}
</script>

<style>
	.jx img{
		margin:.2rem 0;
	}
	.brand{
		padding-bottom: 50px;;
	}
/* 	.brand{
		margin-top:1rem;
	} */
	.brand img{
		width:100%;
	}
</style>
