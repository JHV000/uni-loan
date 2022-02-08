<template>
	<view>
		<view class="header">
			<image src="../../static/user.png" mode=""></image>
			<view class="user-name" style="font-size: 40rpx;color:#FFFFFF;">{{ username }}</view>
		</view>
		<view class="list-card">
			<uni-list class="list">
				<uni-list-item :show-extra-icon="true" :extra-icon="eduIcon" title="额度预测" link to="../mycheck/mycheck"></uni-list-item>
				<uni-list-item :show-extra-icon="true" :extra-icon="shareIcon" title="分享给同事" clickable @click="copyLink"></uni-list-item>
				<uni-list-item :show-extra-icon="true" :extra-icon="feedBack" title="意见反馈"></uni-list-item>
				<uni-list-item :show-extra-icon="true" :extra-icon="aboutUs" title="关于我们"></uni-list-item>
			</uni-list>
		</view>
		<view class="login-out-btn"><button type="primary" @click="loginOut">退出登录</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			eduIcon: { color: '#f87e0c', size: '22', type: 'vip-filled' },
			shareIcon: { color: '#8dde83', size: '22', type: 'redo-filled' },
			feedBack: { color: '#108ee9', size: '22', type: 'chatboxes-filled' },
			aboutUs: { color: '#6a90ff', size: '22', type: 'info-filled' }
		};
	},
	mounted() {
		var username = uni.getStorageSync('login_status').username;
		this.username = username;
		console.log(username);
	},
	methods: {
		copyLink() {
			uni.setClipboardData({
				data: 'https://sale.fmujie.cn/staff/',
				success: function() {
					uni.showToast({
						title: '链接已复制'
					});
					console.log('success');
				}
			});
		},
		loginOut() {
			uni.showModal({
				title: '提示',
				content: '确定要退出吗？',
				success: function(res) {
					if (res.confirm) {
						uni.reLaunch({
							url: '../login/login'
						});
						uni.removeStorageSync('login_status');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style>
@import '@/static/icon/iconfont.css';
.header {
	background-color: #007aff;
	height: 300rpx;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	text-align: center;
	padding-top: 40rpx;
}

.header image {
	width: 150rpx;
	height: 150rpx;
}

.list {
	width: 90%;
	margin: 30px auto;
	border-radius: 10px;
	/* border: 1px solid #e1e1e1; */
	box-shadow: 0px 0px 15px 4px #e1e1e1;
}

.login-out-btn {
	width: 90%;
	margin: 100rpx auto;
}
</style>
