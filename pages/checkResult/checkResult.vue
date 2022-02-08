<template>
	<view>
		<uni-nav-bar @clickLeft="skip" left-icon="back" left-text="返回" backgroundColor="#fff" color="#000" title="额度结果"></uni-nav-bar>
		<view class="top">
			<view class="text">{{ compeny.enterprise }}</view>
			<view class="number">{{ compeny.quota }}万</view>
			<view class="num-bottom">最高授信额度</view>
		</view>
		<view class="card">
			<view class="info">按日计息，随用随借，支持提前还款</view>
			<button class="card-btn" @click="submitEdu" size="default" type="primary">贷款咨询</button>
			<view class="icon-info">
				<view class="icon"><image src="../../static/edu.png" mode=""></image>
				<view class="font">
					额度高
				</view>
				</view>
				<view class="icon"><image src="../../static/fk.png" mode=""></image>
				<view class="font">
					放款快
				</view></view>
				<view class="icon"><image src="../../static/order.png" mode=""></image>
				<view class="font">
					门槛低
				</view></view>
			</view>
		</view>
		<!-- <button class="card-btn" size="default" type="primary">贷款咨询</button> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			compeny: null
		};
	},
	onLoad: function(option) {
		//option为object类型，会序列化上个页面传递的参数
		this.compeny = JSON.parse(option.item);
		console.log(option.item); //打印出上个页面传递的参数。
	},
	methods: {
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
	height: 500rpx;
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
.info {
	padding: 60rpx 0px;
	font-size: 26rpx;
}
.icon-info {
	display: flex;
	justify-content: space-around;
	margin-top: 40rpx;
	.icon image{
		width: 35px;
		height: 35px;
	}
	.font {
		// font-weight: 600;
	}
}
.uni-easyinput__content-input {
	height: 100px !important;
}
</style>
