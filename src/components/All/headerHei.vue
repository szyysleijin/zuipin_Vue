<template>
	<header id="header" class="mui-bar mui-bar-nav">
			<h1 class="mui-title" >{{text}}</h1>
							<!-- mui-action-back 删了 -->
			<a @tap='his' class=" mui-icon mui-icon-left-nav mui-pull-left">返回</a>  
	</header>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			his(){
				history.go(-1)
			}
		},
		props:['text']
	}
</script>

<style>
#header{
	background-color: #1b1b20;
	position: fixed;
	top:0;
	z-index: 10000;
	height:1rem;
	line-height: 1rem;
}
#header h1{
	width:5rem;
	font-size:.36rem;
	color:#fff;
	line-height: 1rem;
	margin:0 auto;
}
#header a{
		font-size:.24rem;
    color: #fff;
		line-height: 1rem;
		margin-left: .1rem;
		padding:0;
}
</style>
