<template>		<!-- 商品列表 -->

	<div class='productList' >
		<!-- 导航 -->
		<headerhei :text='text'></headerhei>
		<!-- search -->
		<div class='search'>
			<input type="text" v-model="msg" >
			<span class='mui-icon mui-icon-close-filled'></span>
			<button @tap='getdata'><span class='mui-icon mui-icon-search'></span></button>
		</div>
		<!-- order -->
		<div class='orderall'>
			<div class='order'>
				<span :class='{mte:shows===1}' @tap='sales'>销量</span>
				<span :class='{mte:shows===2}' @tap='price'>价格</span>
			</div>
		</div>

		<!-- list -->

		<div class='container'>
			<mt-loadmore :bottom-method="loadBottom"
                     :bottom-all-loaded="allLoaded" :bottomPullText='bottomText'
                     ref="loadmore"
										>
				<ul>
					<li v-for='item in list'>
						<router-link  :to='{path:"/branditem",query:{cid:item.cid}}' class='item' :key='item.cid'>
							<img :src="item.img" alt="">
							<p>{{item.title}}</p>
							<p class='elli'>{{item.subtitle}}</p>
							<p>¥ {{item.price}}</p>
							<p>{{item.buy}}人好评</p>
						</router-link>
					</li>
				  
				</ul>

			</mt-loadmore>
			
			
			
		</div>
	</div>
</template>

<script>
	import headerhei from './headerHei'
	export default {
		data() {
			return {
				bottomText:'上拉加载。。。。', //上拉文字
				allLoaded:false, //是否加载
				
				shows:0,
				text:'商品列表',
				search:'',
				list:[],
				msg:'',
			  pno:0,        //当前页码
			  pageSize:4,   //页大小
			  pageCount:1   ,//总页数
				
			};
		},
		created(){
			this.msg=this.$route.query.msg;
		  this.getdata()
		},
		methods:{
			getdata(){
				var msg=this.msg
				this.pno++;
				var url='http://127.0.0.1:729/home?msg='+decodeURIComponent(msg)+"&pno="+this.pno
				this.axios.get(url).then(res=>{
					for(var item of res.data.data){
						var url='http://127.0.0.1:729/img/Home/';
						item.img=url+item.img
					}
					this.list=this.list.concat(res.data.data);
					this.pageCount=res.data.pageCount;
				})
			},
			
			loadBottom(){
				// this.$refs.loadmore.bottomDropText=this.bottomText
				if(this.pno==this.pageCount){
					this.allLoaded = true;
				}
				// this.$refs.loadmore.onBottomLoaded()
				
					this.getdata()
			},
			// 销量排序
			sales(){
				this.shows=1;
				var url = 'http://127.0.0.1:729/home/sales?msg='+decodeURIComponent(this.msg)
				this.axios.get(url).then(res=>{
					for(var item of res.data){
						var url='http://127.0.0.1:729/img/Home/';
						item.img=url+item.img
					}
					this.list=res.data
				})
			},
			price(){
				this.shows=2;
				var url = 'http://127.0.0.1:729/home/price?msg='+decodeURIComponent(this.msg)
				this.axios.get(url).then(res=>{
					for(var item of res.data){
						var url='http://127.0.0.1:729/img/Home/';
						item.img=url+item.img
					}
					this.list=res.data
				})
			}
		},
		components:{
			headerhei
		}
	}
</script>

<style>
	.mte{
		color:red !important;
	}
	
	.loading{
		height:1rem;
		line-height: 1rem;
		text-align: center;
	}
	.mint-loadmore-bottom{
		position: absolute;
		bottom: 0;
		margin: auto;
		left:3rem;
	}
	.mint-loadmore-text{
		font-size:.24rem;
		color:#999999;
	}
	.container{
		position: relative;
		overflow: scroll;
		background: #fff;
		margin-top: .2rem;
	}
	.item p:nth-child(2){
		color:#333;
		width:3.3rem;
		margin:0 auto;
		line-height: .4rem;
		/* 文本溢出结尾显示  ... */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.elli{
		font-size: .24rem;
		color:#999;
		margin:.2rem auto;
		height:.30rem;
		line-height: .3rem;
		width:3.3rem;
		/* 文本溢出结尾显示  ... */
		text-overflow:ellipsis;

		white-space: nowrap;

		overflow: hidden;

		overflow: hidden;

		white-space: nowrap;

		text-overflow:ellipsis;
	}
	.item p:nth-child(4){
		color: #c00000;
    font-size: .28rem;
	}
	.item p:nth-child(5){
		padding: .2rem;
		color: #999;
    font-size: .24rem;
		padding-bottom:.3rem;
	}
	.item{
		height:5.1rem;
		float:left;
		width:3.75rem;
		text-align: center;
		border-bottom:1px solid #f7f7f7;
		border-right: 1px solid #f7f7f7;
	}
	.item img{
		width:2.6rem;
	}
	.order span:last-child{
		float:right
	}
	.orderall{
		background: #fff;
	}
	.order{
		background: #fff;
		width:4rem;
		margin:0 auto;
		height:.87rem;
		line-height: .87rem;
		font-size:.28rem;
		color:#666;
	}
	.search button{
		background: #F4F4F4;
		height:.64rem;
		width:1.2rem;
		border:1px solid #ccc;
		border-left:0;
		margin-left: -0.1rem;
	}
	.search{
		padding-top:.3rem;
		position: relative;
		padding-left:.7rem;
		background: #FAFAFA;
		border-bottom:1px solid #ccc;
	}
	.productList .search input{
		width:5rem;
		float: left;
		height: .64rem;
		border-radius: 7px 0 0 7px;
	}
	.mui-icon.mui-icon-close-filled{
		position: absolute;
		left:5rem;
		float:left;
		line-height: .64rem;
		color:#d3d3d3;
	}
.productList{
}

</style>
