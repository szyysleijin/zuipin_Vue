<template>
	<div class='my1'>
		<headerHei :text='t'></headerHei>
		<p> <img class='mylogo' src="img/logo.png" alt=""></p>
		<div class='mylogin'>
			<p><span>密码登录</span> <span>短信登录</span></p>
			
				<input type="text" v-model="uname" value="" placeholder="请输入用户名"/>
				<input type="password" v-model="upwd" value="" placeholder='登录密码'/>
				<button id="islogin" @tap='mylogin'>立即登录</button>

			<div class='reg'>
				<span @tap='goregister'>立即注册</span>
				<span>忘记密码?</span>
			</div>
		</div>
		<div @tap='logout' class='logout'>退出登录</div>
	</div>
</template>

<script>
	import tabbar from './footer/footer.vue'
	import {Toast} from 'mint-ui'
	import headerHei from './All/headerHei'
	export default {
		data() {
			return {
				uname:'',
				upwd:'',
				t:'用户登录',
				count:0
			};
		},
		methods:{

			
			
			goregister(){
				this.$router.push('/register')
			},
			mylogin(e){
				// e.preventDefault();
				var uname=this.uname;
				var upwd=this.upwd;
				var data={uname,upwd}
				var url = 'http://127.0.0.1:0729/home/login'
 				this.axios.post(url,data).then(res=>{
						if(res.data){
							Toast('登录成功')
							sessionStorage.uname=uname
							var uid=res.data[0].id
							this.$store.commit('loginuid',uid)
							this.getMove(uid)
							this.$store.commit('upislogin')
						
							if(localStorage.uname){
								e.target.disabled=true
								this.uname=''
								this.upwd=''
								e.target.innerHTML='已经登录了'
							}

							//this.$router.go(-1)				//登录成功 返回后一步
							 //history.go(-1)
						}else{
							Toast('账号或密码错误')
						}
					

 				})
			},
			logout(e){
				e.preventDefault();
				if(sessionStorage.uname){
					Toast('退出登录')
					sessionStorage.uname='';
					this.$store.commit('logout')     //隐藏购物车小红点
					this.$store.commit('clear')			//购物车数量清0
					var islogin=document.getElementById('islogin')
					islogin.disabled=false;
					
					//this.$router.go('/home');
				}else{
					Toast('还没登录呢！')
				}

			},
			// 查询购物车数量
			getMove(uid){
				var uid=uid;
				var url='http://127.0.0.1:0729/home/getCarts?uid='+uid;
				this.axios.get(url).then(res=>{
					var sum=0;
					for(var item of res.data.data){
						sum+=item.count
					}
 					this.$store.commit('increment',sum)
				})
			}
		},

		

		components:{
			tabbar,
			headerHei
		},
		mounted(){
			var islogin=document.getElementById('islogin')
			if(sessionStorage.uname){
					islogin.disabled=true;
					islogin.innerHTML='已经登录'
			}
		}
	}
</script>

<style>
	.logout{
		position: fixed;
		bottom:1rem;
		left:.2rem;
		width:95%;
		background:#FF3600;
		text-align: center;
		border-radius: 5px;
		height:1rem;
		line-height: 1rem;
		color:#fff;
		font-weight: bold;
	}
	.reg{
		margin-top:.3rem;
		font-size:.28rem;
		display: flex;
		justify-content: space-between;
		
		}
	.mylogin  button{
		width:95%;
		background:#FF3600;
		text-align: center;
		border-radius: 5px;
		height:1rem;
		line-height: 1rem;
		color:#fff;
		font-weight: bold;
	}
	.mylogin  input{
		width:95% !important;
		border-radius:5px !important ;
	}
	.mylogin {
		margin-top:.5rem;
	}
	
	.mylogin{
		margin-top:.2rem;
		text-align: center;
	}
	.mylogin>p{
		margin-bottom:.3rem;
		margin-left:1.75rem;
		width:4rem;
		display: flex;
		justify-content: space-between;
	}
	.mylogin>p span{
		color:#333;
		font-size:.32rem;
		display: inline-block;
		height:.7rem;
		border-bottom:2px solid red;
		line-height: .7rem;
	}
	.my1{
		background:#fff;
	}
	.my1>p{
		text-align: center;
	}
	.mylogo{
		margin-top:.4rem;
		width:2.6rem;
	}
</style>
