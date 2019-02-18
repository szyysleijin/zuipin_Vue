<template>		<!--4 新品首发  Home子组件 -->
	
	<div class='buzz'>
		<h3>热评产品</h3>
		<p>
			<img class='topimg'  src="img/right_lazy.png" alt="">
			口碑精选
			<img class='topmiddle1' src="img/hot_xin.png" alt="">
			你的好茶
			<img class='topimg'  src="img/right_lazy.png" alt="">
		</p>
		<div class='buzzlist'>
			<div class='buzzitem'>
				<img src="img/2018-11-1510_05_38_747070471187.jpg" alt="">
				<div>
					收到就迫不及待的泡了一杯,感觉非常不错.香味幽深,口感醇香.很好!
				</div>
				<p class='pl'><img src="img/c.png" alt="">来自leilei的评价</p>
				<span class='buzzprice'>¥ 168.00</span>
			</div>
			<div class='buzzitem'>
				<img src="img/2018-11-1510_05_38_747070471187.jpg" alt="">
				<div>
					收到就迫不及待的泡了一杯,感觉非常不错.香味幽深,口感醇香.很好!
				</div>
				<p class='pl'><img src="img/c.png" alt="">来自leilei的评价</p>
				<span class='buzzprice'>¥ 168.00</span>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.buzzprice{
		color: #c00000;
	}
	p.pl{
		margin:.1rem 0;
		color: #999;
    font-size: .2rem;
		text-align:left;
		padding-left:.2rem;
	}
	p.pl img{
		width:.2rem;
	}
	.buzzitem div{
		width:2.4rem;
		margin-left:.18rem;
    color: #666;
    font-size: .22rem;
    line-height: 1.5;
		}
	.buzzitem img{
		width:100%;
	}
	.buzzitem{
		height:5.3rem;
		border:1px solid #e6e6e6;
		margin-left:.2rem;
		margin-top:.4rem;
		text-align: center;
		width:2.76rem;
		float:left;
	}
	.topmiddle1{
		width:.22rem;
		margin:.1rem .05rem;
		margin-bottom:.15rem;
	}
	.buzz>p{
		margin-top:.15rem;
		color: #999;
		font-size: .22rem;
		text-align: center;
	}
	.buzz>p>img{
		vertical-align:middle;
	}
	.topimg{
		width:2.3rem;
	}
	.buzz{
		height:7.2rem;
		background:#fff;
		margin:.2rem 0;
		padding-top:.3rem;
	}
	.buzz h3{
		text-align: center;
		font-size:.36rem;
		color:#424242;
	}
</style>