<template>
	<view>
		<uni-nav-bar @clickLeft="skip" left-icon="back" left-text="返回" backgroundColor="#fff" color="#000" title="测额度"></uni-nav-bar>
		<view class="top">
			<view class="text">信用评估系统</view>
			<view class="number">500万</view>
			<view class="num-bottom">最高授信额度</view>
		</view>

		<view class="card">
			<uni-easyinput class="card-input" v-model="enterprise" placeholder="输入企业名称、测试融资额度"></uni-easyinput>
			<button class="card-btn" @click="submitEdu" size="default" type="primary">开始测额</button>
			<view class="btn-bottom-text">系统会根据测试额度结果，为企业智能匹配产品</view>
		</view>
	</view>
</template>

<script>
	import api from '@/common/api.js';
export default {
	data() {
		return {
			enterprise:null
		};
	},
	methods: {
		submitEdu(){
			uni.showLoading({
				title:"提交中..."
			})
			api.submitEdu(this.enterprise).then(res=>{
				uni.hideLoading()
				if(res.data.result.code==1){
					uni.showToast({
						title:res.data.result.msg
					})
				}else {
					uni.showToast({
						title:res.data.result.msg
					})
				}
				console.log(res)
			})
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
.top {
	background-color: #225dff;
	text-align: center;
	color: white;
	height: 480rpx;
	border-bottom-left-radius: 10%;
	border-bottom-right-radius: 10%;
	position: relative;
	.text {
		font-size: 50rpx;
		padding: 40rpx;
	}
	.number {
		font-size: 68rpx;
	}
	.num-bottom {
		padding: 10rpx;
		font-size: 28rpx;
	}
}

.card {
	width: 88%;
	height: 400rpx;
	position: absolute;
	left: 0;
	right: 0;
	top: 390rpx;
	background-color: #ffffff;
	margin: 0 auto;
	box-shadow: 0px 0px 0px 2px #e1e1e1;
	border-radius: 20rpx;
	text-align: center;
	.card-input {
		width: 90%;
		margin: 35px auto;
		// height: 40px;
	}
	.card-btn {
		width: 90%;
		border-radius: 100rpx;
	}
	.btn-bottom-text {
		padding: 10rpx;
		color: #e5670b;
		font-size: 26rpx;
	}
}
.uni-easyinput__content-input {
	height: 100px !important;
}
</style>
