<template>
	<view >
		<!-- 自定义导航位置 -->
		<!-- 页面需要的自定义导航 -->
		<uni-nav-bar border="false" backgroundColor="#fff" color="#000" title="客户管理系统"></uni-nav-bar>
		<!-- 页面 -->
		<home v-if="index === 0"/>
		<!-- <add v-if="index === 1"/> -->
		<client v-if="index === 3"/>
		<user v-if="index === 4"/>
		<!-- 底部导航 -->
		
		<foo-bar @toIndex="toIndex"></foo-bar>
	</view>
</template>

<script>
	import home from  '../home/home.vue'
	// import add from  '../add/add.vue'
	import client from  '../client/client.vue'
	import user from  '../user/user.vue'
	import fooBar from  '@/components/fooBar/fooBar.vue'
	export default {
		components:{
			home,
			// add,
			client,
			user,
			fooBar
		},
		data() {
			return {
				index: 0,
				title: '首页',
				skeletonOff: false,
			}
		},
		methods: {
			toIndex(index){
				// index 当前页面的索引
				this.index = index
				// 根据index判断页面
				// 修改自定义导航标题等
			},

		}
	}
</script>

<style>
	
</style>