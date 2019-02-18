<template>
	<div>
		<div id='footer'>
			<div >
				<router-link  to='/home'  :class="{'active':$route.meta.active === '/'}" >
					<span class="mui-icon mui-icon-home"></span>
					<span class="">首页</span>
				</router-link>
				<router-link  to='/classify' :class="{'active':$route.meta.active === '/classify'}" >
					<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
					<span class="">分页</span>
				</router-link>
				<router-link class='shopcarcount'    to='/shopcar' >
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
						<span v-if='$store.getters.islogin1' class='mui-badge'>{{$store.getters.optcartcount}}</span>
					</span>
					<span >购物车</span>
				</router-link>
				<router-link    to='/my' :class="{'active':$route.meta.active === '/my'}" >
					<span class="mui-icon mui-icon-person my"></span>
					<span >我的</span>
				</router-link>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				session:''
			};
		},
		mouted(){

		},
		methods:{
				
		},
		watch:{
			
		}
	}
</script>

<style>
.shopcarcount{
	position: relative;
}
.mui-badge{
	left:70% !important;
}
#footer{
	position:fixed;
	bottom:0;
	z-index: 1;
	height:1rem;
	width:100%;
	background:#fafafa;
	border-top:1px solid #D9D9D9;
	color:#7f7f7f;
}
#footer>div{
	display: flex;
	text-align: center;
	margin-top:.12rem;
}

.active{
	color:#FF3600 !important;

}
#footer a{
	color:#7f7f7f;


	font-size:.24rem;
	width:25%;
	display: inline-block;
	display: flex;
	flex-direction: column;
}

</style>
