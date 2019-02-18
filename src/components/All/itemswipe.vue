<template>

 <div class='branditem'>
	 
	 <mt-swipe :auto="3000">
		<mt-swipe-item v-for='item of child'>
				<img  :src='item'/>
		</mt-swipe-item>
	 </mt-swipe>
	 
	
 </div>
		 
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['child'],
		created(){
			// console.log(this.child)
		},
		methods:{
			gg(){
				
			}
		}
	}
</script>

<style>
.branditem .mint-swipe{
   height:7.5rem !important
}

.branditem .mint-swipe img{
	height:7.5rem;
	width:7.5rem;
}
</style>
