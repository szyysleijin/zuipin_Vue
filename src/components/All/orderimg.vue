<template><!-- 茶礼订制 -->

	<div class='orderimg'>
			<!-- top -->
		<headerHei :text='lp'></headerHei>
		
		<img v-for='item in list' :key='item.id' :src="item.url" alt="">
	</div>
</template>

<script>
	import headerHei from  './headerHei'
	export default {
		data() {
			return {
				lp:'茶礼订制',
				list:[
					{id:1,url:'img/wap_01.jpg'},
					{id:2,url:'img/wap_02.jpg'},
					{id:3,url:'img/wap_03.jpg'},
					{id:4,url:'img/wap_04.jpg'},
					{id:5,url:'img/wap_10.jpg'}
				]
			};
		},
		components:{
			headerHei
		}
	}
</script>

<style>
.orderimg{
}
.orderimg img{
	width:100%
}
</style>
