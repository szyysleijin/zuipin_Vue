<template>
	<div class='my1'>
		<headerHei :text='title'></headerHei>
		<p> <img class='mylogo' src="img/logo.png" alt=""></p>
		<div class='mylogin'>
			
			
				<input type="text" v-model="uname" value="" placeholder="请输入用户名"/>
				<input type="password" v-model="upwd" value="" placeholder='登录密码'/>
				<button @tap='register'>注册</button>
	
			
		</div>
		
		
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import headerHei from './headerHei'
	export default {
		data() {
			return {
				title:'用户注册',
				uname:'',
				upwd:''
			};
		},
		components:{
			headerHei
		},
		methods:{
			register(){
				console.log(1)
				var uname=this.uname;
				var upwd=this.upwd;
				var url='http://127.0.0.1:0729/home/register'
						
				var data={uname,upwd}
				this.axios.post(url,data).then(res=>{
					if(res.data==1){
						Toast('注册成功')
						this.$router.go(-2)
						return;
					}
					Toast(res.data)
				})
			}
		}	
		
	}
</script>

<style>

.register{
	position:fixed;
	top:1rem;
	width:100%;
	bottom:1rem;
	background:#fff;
}
</style>
