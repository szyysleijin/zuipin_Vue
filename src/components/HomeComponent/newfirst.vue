<template>		<!-- 3新品首发 home组件 -->
	<div class='newfirst'>
		<h3>新品首发</h3>
		<p>
			<img class='topimg'  src="img/right_lazy.png" alt="">
			茶界新品<img class='topmiddle new' src="img/center_lazy.png" alt="">
			新鲜直达
			<img class='topimg'  src="img/right_lazy.png" alt="">
		</p>
		<!-- 3 -->
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in math'>
					<router-link :to='{path:"/branditem",query:{cid:item.cid}}'>
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">{{item.subtitle}}</p>
							<p class='price'>¥ {{item.price.toFixed(2)}}</p>
						</div>
					</router-link>

				
				</li>
				
				
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				math:[]
			}
		},
		methods:{
			getMath(){
				var url='http://127.0.0.1:0729/Home/math';
				this.axios.get(url).then(res=>{
				for(var item of res.data){
					var url='http://127.0.0.1:729/img/Home/';
					item.img=url+item.img
				}
					this.math=res.data;
					// console.log(this.math)
				})
			}
		},
		created(){
			this.getMath()
		}
	}
</script>
<style>
	.mui-media-body{
	  overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
	}
	img.new{
		margin-left:.1rem;
		margin-bottom:.1rem;
	}
	.mui-table-view-cell:after{
		background:#fff !important;
	}
	.mui-table-view:before{
		background:#fff !important;
	}
	.price{
		color: #c00000;
    font-size: .3rem;
    line-height: .3rem;
    margin-top: .4rem;
	}
	.mui-ellipsis{
		margin-top:.3rem;
		color: #999;
    font-size: .22rem;
	}
ul.mui-table-view img.mui-media-object{
	max-width:20rem;
}
	div.newfirst .mui-table-view img.mui-media-object.mui-pull-left{
		width:2rem;
		height:2rem;
		}
	ul.mui-table-view{
		margin-top:.1rem;
		border:0
	}
	.topmiddle{
		width:.19rem;
		margin:0 .05rem;
	}
	.newfirst>p{
		margin-top:.15rem;
		color: #999;
    font-size: .22rem;
		text-align: center;
	}
	.newfirst>p>img{
		vertical-align:middle;
	}
	.topimg{
		width:2.3rem;
	}
	.newfirst{
		background:#fff;
		margin:.2rem 0;
		padding-top:.3rem;
	}
	.newfirst h3{
		text-align: center;
		font-size:.36rem;
		color:#424242;
	}
</style>
