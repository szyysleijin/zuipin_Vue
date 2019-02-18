<template>
	<div id='classify'>
		<headerHei :text='text'></headerHei>
		<!-- serch -->
		<div class='search'>
			<input type="text" placeholder="搜索想要的产品">
			<span class='mui-icon mui-icon-close-filled'></span>
			<button><span class='mui-icon mui-icon-search'></span></button>
		</div>
		<!-- list -->
		
			<div class='classify-item' v-for='arr of list'>
				<p>{{arr[0].name}}</p>
				<div class='classifyf-father'>
					<router-link :to='{path:"/brandList",query:{msg:item.msg}}' v-for='item of arr.slice(1)'>
							<p><img :src='item.img_url' alt=""></p>
							<p>{{item.title}}</p>
					</router-link>
				</div>
			</div>
		<!-- <tabbar></tabbar> -->
	</div>
</template>

<script>
	import tabbar from './footer/footer.vue';
	import headerHei from './All/headerHei'
	export default {
		data() {
			return {
				text:'商品分类',
				list:[]
			};
		},
		components:{
			headerHei,
			tabbar
			
		},
		methods:{
			getlist(){
				var url='http://127.0.0.1:729/classify';
				this.axios.get(url).then(res=>{
					//console.log(res.data)
					this.list=res.data
				})
			}
		},
		created(){
			this.getlist()
		},
	
		
	}
</script>

<style>
	#classify{
		padding-bottom: 50px;
	}
	.classifyf-father>a{
		border-right:1px solid #E0E0E0;
		border-bottom:1px solid #e0e0e0;
	}
	.classifyf-father>a:nth-child(3n){
		border-right:0 none;
	}
	.classifyf-father>a>p:last-child{
		color:#333;
		margin-top:.1rem
	}
	.classifyf-father{
		display: flex;
		width:100%;
		flex-flow: wrap;
		}
	.classifyf-father>a{
		width:33.333%;
		height:2.3rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.classifyf-father>a>p>img{
		width:1.10rem;
		height:1.10rem;
	}
	.classify-item{
		background:#fff;
		margin-top:.2rem;
		margin-bottom:.2rem;
	}
	.classify-item>p{
		background: #EFEFF4;
		height:.64rem;
		line-height: .64rem;
		text-align: center;
		font-size: .32rem;
		color:#000;
		border-bottom:1px solid #e0e0e0;
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
	#classify .search input{
		width:5rem;
		padding-bottom: .23rem;
		font-size: .24rem;
		color:#959595;
		float: left;
		height: .64rem;
		border-radius: 7px 0 0 7px;
		line-height: 14rem;;
	}
	.mui-icon.mui-icon-close-filled{
		position: absolute;
		left:5rem;
		float:left;
		line-height: .64rem;
		color:#d3d3d3;
	}
</style>
