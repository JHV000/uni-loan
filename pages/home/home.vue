<template>
	<view class="container">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" @change="change" circular :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view class="swiper-item"><image :src="item.content" mode=""></image></view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

		<uni-group title="工具栏" mode="card">
			<view class="tools-box">
				<view class="left-tool">
					<view class="date">{{ date }}</view>
					<!-- <view class="slogan">努力工作鸭！</view> -->
				</view>  
				<view class="right-tools-box">
					<view class="right-tool-1" @click="skipPage('../add/add')">添加新客户</view>
					<view class="right-tool-2" @click="skipPage('../check/check')">额度预估</view>
				</view>
			</view>
		</uni-group>

		<!-- <uni-group title="待回访客户" mode="card">
			<view>分组2 的内容</view>
			<view>分组2 的内容</view>
		</uni-group> -->
	</view>
</template>
<script>
export default {
	data() {
		return {
			autoplay: true,
			interval: 2000,
			duration: 1000,
			info: [
				{
					content: '../../static/img1.jpeg'
				},
				{
					content: '../../static/img2.jpeg'
				},
				{
					content: '../../static/img3.jpeg'
				}
			],
			current: 0,
			mode: 'round',
			date: new Date().toLocaleDateString('fr-CA')
		};
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		},
		skipPage(address){
			uni.navigateTo({
				url:address
			})
		}
	}
};
</script>

<style>
.container {
	margin-top: 10rpx;
}

.tools-box {
	display: flex;
	justify-content: space-around;
	height: 300rpx;
}

.tools-box .left-tool,
.right-tools-box {
	width: 50%;
	height: 100%;
	/* border: 1px solid #007aff; */
	border-radius: 10rpx;
}

.left-tool {
	/* opacity: 0.4; */
	/* background-size: 100%; */
	background-color: rgba(225, 225, 225,0.5);
	text-align: center;
	padding: 4rpx;
	position: relative;
	z-index: 1;
}

.left-tool::after {
	width: 100%;
	height: 100%;
	background: url(../../static/fighting.jpg) no-repeat;
	background-size: 61%;
	background-position: 0px 47px;
	content: ''; /* 这个不要漏了 */
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1; /*-1 可以当背景*/
	opacity: 0.8;
}

.left-tool .date,
.slogan {
	padding-top: 20rpx;
	color: #000;
	font-size: 50rpx;
	font-weight: 700;
}

.right-tool-1,
.right-tool-2 {
	width: 100%;
	height: 50%;
	border: 1px solid #18bc37;
	text-align: center;
	line-height: 154rpx;
	border-radius: 10rpx;
	color: #fff;
	font-size: 35rpx;
	/* font-weight: 700; */
}

.right-tool-1 {
	background-color: #2979ff;
}
.right-tool-2 {
	background-color: #18bc37;
}
/* 轮播图样式 */
.uni-margin-wrap {
	width: 690rpx;
	width: 100%;
}
.swiper {
	height: 400rpx;
}
.swiper-item {
	display: block;
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
}

.swiper-list {
	margin-top: 40rpx;
	margin-bottom: 0;
}

.uni-common-mt {
	margin-top: 60rpx;
	position: relative;
}

.info {
	position: absolute;
	right: 20rpx;
}

.uni-padding-wrap {
	width: 550rpx;
	padding: 0 100rpx;
}
</style>
