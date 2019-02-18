<template> 						<!--1限时特价 home组件  -->
	<div class='Timedspecials'>
		<div>
			<a class="active"><span class="mui-icon-extra mui-icon-extra-outline"></span></a>
			<h3>限时<span>特价</span></h3>
		</div>
		<div class='timelist'>
			<!-- item start-->
			<!-- Swiper -->
			
			<!-- 						<router-link  to='/Home' >
										<div class='timeitem'>
										<img :src="item.img" alt="">
										<div class='timeout'>
											<img src="img/timeout.png" alt="">
										</div>
										<p>{{item.title}}</p>
										<h3>¥&nbsp;{{item.price}} <span>¥{{item.price*1.1}}</span></h3>
										</div>
									</router-link> -->
									
									
								 <div class="swiper-container">
										<div id='swiper-wrapper' class="swiper-wrapper" >
											<div class="swiper-slide" v-for='item of list' >
												<router-link  :to='{path:"/branditem",query:{cid:item.cid}}'  >
													<div class='timeitem'>
													<img :src="item.img" alt="">
													<div class='timeout'>
														<img src="img/timeout.png" alt="">
													</div>
													<p>{{item.title}}</p>
													<h3>¥&nbsp;{{item.price}} <span>¥{{item.price}}</span></h3>
													</div>
												</router-link>
											</div>
										</div>
									  <!-- <div class="swiper-pagination"></div> -->
								</div> 
								
								  
		</div>
		
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import './../../../node_modules/swiper/dist/css/swiper.css'
	// console.log(Swiper)
	export default {
		data() {
			return {
				list:[]
			};
		},
		methods:{
			getTimeProduct(){
				var url = 'http://127.0.0.1:0729/Home/mathTow';
				this.axios.get(url).then(res=>{
					this.list=res.data
					for(var item of this.list){
						item.price=parseInt(item.price).toFixed(2);
						item.img='http://127.0.0.1:729/img/Home/'+item.img
						//console.log(item)
					}
				})
			},
			initSwiper(){
				 var swiper = new Swiper('.swiper-container', {
					 init:false,
   					slidesPerView: '2',
//   					spaceBetween: 30,
//  					observer:true,
// 					observeParents:true,
				});
				setTimeout(function () {
					swiper.init();
				},50)
			},
// 			setSwiper(){
// 				var swi=document.getElementById('swiper-wrapper')
// 				//console.log(swi)
// 				swi.style.transform='translate3d(0px, 0px, 0px)'
// 			}
		},
		mounted(){
			
			this.getTimeProduct()
			this.initSwiper();
			// this.setSwiper()

		},
		created(){
			
		},
		destroyed(){
			
		}
	}
</script>

<style>


	.timeitem>h3>span{
		font-size: .2rem;
    color: #adadad;
    margin-left: .05rem;
		text-decoration: line-through;
	}
	.timeitem>h3{
		color: #c00000;
    font-size: .3rem;
		margin-top:.2rem;
		padding-left:.1rem;
	}
		
	.timeitem{
		position: relative;
		width:2.42rem;
		float:left;
		margin-right: .5rem;
	}
	.timeitem>div>img{
		width:.56rem;
		position: absolute;
		top:0;
		right:0;
	}
	.Timedspecials div.timelist{
		margin-top:.5rem;
		padding-left:.4rem;
		height:4rem;
	}
	.timeitem>p{
		width:2.42rem;
		color: #333;
    font-size: .26rem;
		height:.66rem;
		line-height: .33rem;

	/* 文本溢出结尾显示  ... */
	overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
	}

	.timeitem>img{
		width:2.4rem;
		height:2.4rem;
	}
	.Timedspecials{
		margin-top:.2rem;
		background:#fff;
		padding: .36rem .2rem;
		}

		.Timedspecials>div{
			height:.48rem;
			line-height: .48rem;
		}
	.Timedspecials>div>h3{
		float:left;
		font-style:italic;
		font-size:.36rem;
		color:#333;
		margin-top:.05rem;
	}
	.Timedspecials>div>h3 span{
		color:#FF3700;
	}

	
a.active{
	float:left;
	color:#FF3700
	}
</style>
