<template>
	<view>
		<uni-nav-bar @clickLeft="skip" left-icon="back" left-text="返回" backgroundColor="#fff" color="#000" title="测额结果"></uni-nav-bar>
		<uni-card class="edu-card" v-for="(item,index) in compenyList" :key="index" :title="item.status==0 ? '未出额' : '已出额'" :thumbnail="item.status==0 ? '../../static/uncheck.png' : '../../static/check.png'" shadow="0px 0px 3px 1px rgba(0, 0, 0, 0.08)"  extra="点击查看结果" @click="showResult(item)">
		    <view>{{item.enterprise}}的额度预测结果</view>
			<view>{{item.created_at}}</view>
		</uni-card>
		
	</view>
</template>

<script>
	import api from '@/common/api.js';
export default {
	data() {
		return {
			compenyList: []
			
		};
	},
	onLoad() {
		this.getEduList()
	},
	methods: {
		getEduList(){
			api.getEduList().then(res=>{
				this.compenyList = res.data.result.data.array
				console.log(res)
			})
		},
		showResult(item){
			if(item.status==0){
				uni.showToast({
					title : "还未出额度",
					icon:"error"
				})
			}else {
				uni.navigateTo({
					url:'../checkResult/checkResult?item='+JSON.stringify(item),
				})
			}
			
		},
		skip() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style lang="scss">
// .edu-card {
// 	color: #FFFFFF;
// 	background-color: #d1f2d7;
// }
</style>
