<template>
	<div class='myshopcar'>
		<headerHei :text='t'></headerHei>
		<p><span>已满足满59包邮</span><span>编辑</span></p>
		 <!-- 商品列表 -->
		 <div class='carcontainer'>
			 <div class='caritem' v-for="item of list">
			 				 <!-- img/cart-check.png 没选中 -->
			 				 <!-- 选中框 -->
			 				 <img src="img/cart-checked.png" @tap='checked' alt="">
			 				 <!-- 购物车图片 -->
			 				 <img :src="item.img" alt="">
			 				 <!-- 购物车详情 -->
			 				 <div>
			 					 <p >{{item.title}}</p>
			 					 <p class='carprice'><span>¥ {{item.price}}.00</span>
			 						<span class="mui-numbox">
			 							<button @tap='cartSub' :data-iid="item.iid"  class="mui-btn mui-btn-numbox-minus" >-</button>
			 							<input  class="mui-input-numbox" type="number" :value="item.count">
			 							<button @tap="cartAdd" :data-iid="item.iid" class="mui-btn mui-btn-numbox-plus" >+</button>
			 						</span>
			 				  </p>
			 				 </div>
			 </div>
		 </div>
			 
			
		 
		 			 <!-- toggle -->
		 <div class='toggle'>
			 <img src="img/cart-checked.png" alt="">
				 <span>已选 ({{list.length}})</span>
				 <span>¥ {{toggle}}</span>
				 <span class=''>结算</span>
		 </div>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import headerHei from './All/headerHei'
	export default {
		data() {
			return {
				selectedFoodArr:[],
				t:'购物车',
				list:[]
			};
		},
		components:{
			headerHei
		},
		methods:{
			checked(e){
				if(e.target.src=='http://localhost:8080/img/cart-checked.png'){
					console.log(1)
						e.target.src='http://localhost:8080/img/cart-check.png'
				}	else{
					e.target.src='http://localhost:8080/img/cart-checked.png'
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
			islogin(){
				if(!sessionStorage.uname){
					Toast('请先登录')
					this.$router.push('/my')
				}
			},
			getMove(){
				var uid=this.$store.getters.getuid
				var url='http://127.0.0.1:0729/home/getCarts?uid='+uid;
				this.axios.get(url).then(res=>{
					//console.log(res)
					for(var item of res.data.data){
						item.img='http://127.0.0.1:729/img/Home/'+item.img
					}
					
					// 去除相同数据  count累加		很刁钻
					var res=res.data.data;
					console.log(res)
					var obj={}
					var arr=[]
					for(var i=0;i<res.length;i++){
						if(!obj[res[i].title]){		//如果obj 没有title属性
							obj[res[i].title]=res[i].title;
							arr.push(res[i])
						}else{											//如果有相同的title属性 count累加
							for(var j=0;j<arr.length;j++){
								var aj=arr[j];   //当前元素
								if(aj.title==res[i].title){
									aj.count+=res[i].count;
									break;
								}
							}
						}
					}
				  this.list=arr
					
				})
			},
			updateCart(iid,count){
        var url = "http://127.0.0.1:0729/home/";
        url +="updateCart?iid="+iid;
        url +="&count="+count;
        this.axios.get(url).then(result=>{
           if(result.data.code == 1){
             Toast(result.data.msg);
           }else{
             Toast(result.data.msg);
           }
        });
      },
			cartSub(e){
				var iid =  e.target.dataset.iid;
			
        //修改当前购物车项数量
        //1:创建循环list
        for(var item of this.list){
         //2:判断当前元素iid是否是iid
        if(item.iid == iid && item.count > 1){
          //3:当前数据减1
          item.count--;
					
          this.updateCart(iid,item.count);
					this.$store.commit('substract')
          //4:跳出循环
          break;
        }
        }
        //5:更新数据库值减
			},
			cartAdd(e){
			 var iid = e.target.dataset.iid;
       for(var item of this.list){
         if(item.iid == iid && item.count < 999){
               item.count++;
							 this.updateCart(iid,item.count)
							 this.$store.commit('increment',1)
               break;
         }
       }
			}
		},
		mounted(){
			this.islogin()
			this.getMove()
			
		},
		created(){
				
		},
		computed:{
			
			toggle(){
				var sum=0;
				for(var item of this.list){
					sum+=item.price*item.count
				}
				return sum
			}
		}
	}
</script>

<style>
	.carcontainer{
		margin-bottom:2rem;
	}
	.toggle{
		width:100%;
		height:1rem;
		position:fixed;
		bottom:1.01rem;
		line-height: 1rem;
		border-top:1px solid #E0E0E0;
		background:#fff;
		
	}
	.toggle img{
		width:.4rem;
		height:.4rem;
		margin-left:.3rem;
	}
	.toggle span{
		vertical-align: middle;
		font-size:.28rem
	}
	.toggle span:nth-child(2){
		margin-left:.5rem;
	}
	.toggle span:nth-child(3){
		color: #c00000;
		display: inline-block;
		width:1.5rem;
		text-align: center;
	}
	.toggle span:nth-child(4){
		display: inline-block;
		margin-left:.3rem;
		width:3.35rem;
		background: #FF3600;
		font-weight: bold;
		color:#fff;
		text-align:center;
		font-size:.32rem;
	}
/* 	.mui-numbox{
		width:2rem !important;
		height:.54rem !important;
		background: #F9F9F9 !important;
	}

	.mui-numbox button{
		width:.54rem !important;
		height:.54rem !important;
	} */
/* 	.mui-numbox input{
		width:.54rem !important;
		height:.54rem !important;
	} */
	.myshopcar{
		background:#f4f4f4;
		width:100%;
		height:100%;
	}
	.caritem>div>p:nth-child(1){
		width:4.5rem;
	}
	.mui-numbox{
		
		background: #fff !important;
		padding:0 .56rem 0 .56rem !important;
		height:.56rem !important;
		width:2rem !important;

	}
	.mui-btn-numbox-plus,.mui-btn-numbox-minus{
		width:.56rem !important;
		height:.54rem !important;
		line-height: .54rem !important;
	}
	.carprice>span:nth-child(1){
		margin-top:.15rem;
		width:1.5rem;
	}
	.carprice{
		display: flex;
		margin-top:.4rem;
	}
	.caritem{
		display: flex;
		height:2rem;
		align-items: center;
		background:#fff;
	}
	.caritem>img:nth-child(2){
		width:1.6rem;
		height:1.6rem;
		margin:0 .1rem;
	}
	.caritem>img:nth-child(1){
		width:.4rem;
		height:.4rem;
		margin-left:.3rem;
	}
	.myshopcar{
		
	}
	
	.myshopcar>p{
		width:100%;
		padding:.3rem .5rem;
		display: flex;
		justify-content: space-between;
		background:#F5F5F5;
	}
	.myshopcar>p>span:nth-child(1){
		color:#FF3600;
		font-size:.24rem;
		padding-top:.05rem;
	}
	.myshopcar>p>span:nth-child(2){
		font-size:.3rem;
		color:#333;
	}
	.carlist{
		display: flex;
		flex-direction: column;
	}
</style>

