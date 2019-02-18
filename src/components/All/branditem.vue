<template>
	<div class='app-item' @touchmove='event'>
		<headerHei :text='text'></headerHei>
		<itemswipe :child='banner'></itemswipe>
		<div class='app-item-list'>
			<p>{{data.title}}</p>
			<p>醉品价 &nbsp;<span>¥&nbsp;&nbsp;{{price.toFixed(2)}}</span></p>
		</div>
		<div class='promotion'>
			<div>
				促销
			</div>
			<div>
				<p><span>直降</span>全场8.8折</p>
				<p><span>直降</span>全场在线支付满59元免运费</p>
			</div>
		</div>
		
		<div class='promotionFw'>
			<div>
				服务
			</div>
			<div>
				<ul>
					<li><span></span>全场商品90天保价</li>
					<li><span></span>满59元免运费</li>
				
				</ul>
			</div>
			<div>
				<ul>
					<li><span></span>30天无忧退换货</li>
					<li><span></span>2000城市货到付款</li>
				</ul>
			</div>
		</div>
		
		<div class='count'>
			数量
			<div class="mui-numbox">
				<button @click='getcount(-1)' class="mui-btn mui-btn-numbox-minus" type="button">-</button>
				<input class="mui-input-numbox" type="number" v-model="ipt">
				<button @click='getcount(1)' class="mui-btn mui-btn-numbox-plus" type="button">+</button>
			</div>
		</div>
		<div class='itemoption'>
				<div id='nav-wrap' class="nav-wrap ">
					<mt-navbar v-model="selected">
						<mt-tab-item id="1">详情</mt-tab-item>
						<mt-tab-item id="2">规格</mt-tab-item>
						<mt-tab-item id="3">评论</mt-tab-item>
					</mt-navbar>
				</div>
		
		<div class='itemoptiondiv' >
			<mt-tab-container v-model="selected" swipeable >
				<mt-tab-container-item id="1">
					<img v-for='item in banner' :src="item" alt="">
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<p><span>商品编号</span>  <span>8699842</span></p>
					<p><span>规格</span>  <span>100g/罐</span></p>
					<p><span>产地</span>  <span>8699842</span></p>
					<p><span>食品生产</span> 
									<br>
							<span>许可证</span>
					 <span id='SC'>SC1143333333</span>
					 </p>
					<p><span>采摘季节</span>  <span>8699842</span></p>
					<p><span>储存方法</span>  <span>8699842</span></p>
					<p><span>保质期</span>  <span>8699842</span></p>
					<p><span>等级</span>  <span>8699842</span></p>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
				3
				</mt-tab-container-item>
			</mt-tab-container>
		</div>	
				
				<!--  -->
		</div>
		
		
		<!-- 立即购买 加入购物车 -->
		<div class='shopcarfather'>
			<div class='shopcar'>
				<!-- 返回首页 -->
				<div @tap='gohome'>
					<span class="mui-icon mui-icon-home"></span>
					<p >返回首页</p>
				</div>
				<!-- 购物车 -->
				<div @tap='shop'>
					<span class="mui-icon-extra mui-icon-extra-cart"></span>
					<p >购物车 ({{$store.getters.optcartcount}})</p>
				</div>
				<!-- 立即购买 -->
				<div>
					立即购买
				</div>
				<!-- 加入购物车 -->
				<div @tap="addCart">
					加入购物车
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import itemswipe from './itemswipe'		//引入轮播组件
	import headerHei from './headerHei'
	import {Toast} from 'mint-ui'
	export default {
		data() {
			return {
				banner:[],
				text:'',
				
				price:0,
				data:{},
				ipt:1,
				selected:'1'
			};
		},
		created(){
			this.getData()
		},
		methods:{
			// 跳首页
			gohome(){
				this.$router.push('/home')
			},
			// 跳转购物车
			shop(){
				if(!sessionStorage.uname){
					Toast('未登录')
					return
				}else{
					this.$router.push('/shopcar')
				}
				
			},
			//滑动固定
			event(){
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				var nav=document.getElementById('nav-wrap')
				if(scrollTop>=643){
					nav.setAttribute('class',`nav-wrap gogogo`)
				}
				if(scrollTop<=643){
					nav.setAttribute('class',`nav-wrap`)
				}
			},
			getcount(n){
				this.ipt=parseInt(this.ipt)
				n=parseInt(n)
				if(this.ipt>=1) {
					this.ipt+=n
					if(this.ipt==0){
						this.ipt=1
					}
				}
				if(this.ipt>998)
					this.ipt=999;
			},
			getData(){
				var url='http://127.0.0.1:0729/home/getitem?cid='+this.$route.query.cid
				this.axios.get(url).then(res=>{
					this.text=res.data[0].title;
					var url='http://127.0.0.1:729/img/Home/';
					var imglist=res.data[0].imgswipe.split(',')
					for(var item of imglist){
						item=url+item
						this.banner.push(item)
					}
					this.data=res.data[0]
					this.price=res.data[0].price
// 					console.log(res.data[0])
// 					console.log(this.banner)
				})
			},
			addCart(){
				if(!sessionStorage.uname){
					Toast('未登录')
					return
				}
				var pid=this.$route.query.cid;    //商品id
				var count= this.ipt;
				var uid=this.$store.getters.getuid
// 				var data=JSON.stringify({pid,count,uid})
// 				data=decodeURIComponent(data)
// 				console.log(data)
				var url=`http://127.0.0.1:0729/home/addCart?pid=${pid}&count=${count}&uid=${uid}`
				
				this.axios.get(url).then(res=>{
					// this.$store.commit('increment',this.ipt)
					this.$store.commit('increment',this.ipt)
					Toast(res.data.msg)
					console.log(res)
				})
			}
		},
		components:{
			itemswipe,
			headerHei
		}
	}
</script>

<style>

	.shopcar{
		width:100%;
		display: flex;
		height:1rem;
		justify-content: center;
		align-items: center;
		background: #fff;
		color:#757575;
		font-size:.22rem;
		border-top:1px solid #D9D9D9;
		position:fixed;
		bottom:0rem;
		z-index: 99999999;
	}
	.shopcar>div:nth-child(1){
		height:1rem;
		padding-top:.11rem;
		border-right:1px solid #D9D9D9;
	}
	.shopcar>div:nth-child(1),.shopcar>div:nth-child(2){
		color:#757575;
		font-size:.22rem ;
		width:18%;
		text-align: center;
	}
	.shopcar>div:nth-child(1) p,.shopcar>div:nth-child(2) p{
		color:#757575;
		font-size:.22rem;
		margin-top:.1rem;
	}
	.shopcar>div:nth-child(4){
		background:#FF3600 !important;
	}
	.shopcar>div:nth-child(3),.shopcar>div:nth-child(4){
		height:1rem;
		line-height: 1rem;
		width:32%;
		text-align: center;
		color:#fff;
		background:#FF8766;
		font-weight: bold;
		font-size:.28rem;
	}
	#SC{
		position: relative;
		bottom:.4rem;
		left:.3rem
	}
	.mint-tab-container-item{
		background: #fff;
	}
	.mint-tab-container-item p{
		text-align: left;
		font-size: .28rem;
		padding-left:.2rem;
		line-height: .8rem;
		color:#757575;
		border-bottom:1px solid #eee;
		}
		.mint-tab-container-item p span{
			display: inline-block;
			width:1.5rem;
		}
		.mint-tab-container-item p span:first-child{
			margin-right:.3rem;
		}
		.mint-tab-container-item p span:last-child{
			width:5rem;
		}
	.gogogo{
		position: fixed;
		top:1rem;
		z-index: 888;
	}
	.mint-tab-container,.mint-tab-container-wrap,.mint-tab-container-item{
		width:100% !important;
	}
	.mint-tab-container-item img{
		width:100%;
	}
	.itemoptiondiv{
		width:7.5rem !important;
	}
	.itemoptionimg{
		width:100%;
	}
	.mint-tab-item-label{
		width:100% !important;
	}
	.mint-tab-item{
		color:#333;
	}
	div.itemoption .mint-tab-item.is-selected{
		text-align: center !important;
		border:0;
		color: #ff3600 !important;
	}
	.mint-navbar{
		width:100% !important;
		background:#fafafa !important;

	}
	.itemoption .nav-wrap{
		width:100%;
		border-bottom:1px solid #eee;
	
		}
	.itemoption{
		margin-top:.2rem;
		background:#FAFAFA;
	}
	.itemoption div{
		width:33%;
		float:left;
		text-align: center;
	}
	.mui-numbox{
		margin-left:.3rem;
	}
	.count{
		background: #fff;
		padding:.2rem;
	}
		
	
	.app-item{
		padding-bottom: 50px;
	}
	
	
	
	
	
	
	
	
	
	.promotionFw div:nth-child(2) ul{
		margin-left:.41rem;
	}
	.promotionFw ul li{
		color: #999;
		font-size: .24rem;
		padding-left: .2rem;
		position: relative;

	}
	.promotionFw ul li:before{
		content:'';
		display: inline-block;
		width:.1rem;
		height:.1rem;
		background:#bb131b;
		border-radius:50% ;
		line-height: .24rem;
		position: absolute;
		top:.06rem;
		left:0;
	}

	.promotionFw ul li:first-child{
		margin-bottom:.2rem;
	}
	.promotionFw{
		padding-top:.2rem;
		padding-left:.2rem;
		background:#fff;
		padding-bottom:.2rem;
		border-bottom:1px solid #E0E0E0;
	}
	.promotionFw div{
		float:left
	}
	.promotionFw div ul{
		width:2.9rem;
	}
	.promotion{
		background:#fff;
		padding:.2rem 0 .2rem .2rem;
		 border-bottom:1px solid  #E0E0E0;
		}
		.promotion div:last-child{
			margin-left: .4rem;
		}
		.promotion div{
			float:left;
		}
		.promotion div:last-child p{
			color: #999;
			font-size: .24rem;
		}
		.promotion div:last-child p:first-child{
			margin-bottom:.15rem;
		}
   .promotion div:last-child p span{
		  background-color: #bb131b;
			padding: 0.04rem .08rem 0;
			border-radius: 3px;
			-webkit-border-radius: 3px;
			font-size: .24rem;
			color: #fff;
			margin-right: .2rem;
			display: inline-block;
			height: 0.3rem;
			line-height: 0.3rem;
			word-break: keep-all;
			margin-right:.3rem;
	 }
	.app-item-list {
		padding-top:.2rem;
		color:#333;
		background:#fff;
		padding-left:.2rem;
		min-height: 1.4rem;
		padding-bottom:.3rem;
		border-bottom:1px solid #E0E0E0;
	}
	.app-item-list p{
		color:#333;
	}
	.app-item-list p:nth-child(1){
		width:6rem;
		min-height:.4rem;
		line-height: .4rem;
	}
	.app-item-list p:nth-child(2){
		margin-top:.2rem;
	}
	.app-item-list p:nth-child(2) span{
		color:#c00000;
	}
</style>
