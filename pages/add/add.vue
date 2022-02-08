<template>
	<view>
		<uni-nav-bar @clickLeft="skip" left-icon="back" left-text="返回" backgroundColor="#fff" color="#000" title="添加意向客户"></uni-nav-bar>
		<view class="form">
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item required name="name"  label="姓名:"><uni-easyinput v-model="formData.name" type="text" placeholder="请输入客户姓名" /></uni-forms-item>
				<uni-forms-item name="sex" label="性别:">
					<uni-data-checkbox mode="button" v-model="formData.sex" :localdata="range" @change="change"></uni-data-checkbox>
				</uni-forms-item>
				<uni-forms-item required name="phone"  label="手机号码:"><uni-easyinput v-model="formData.phone" type="text" placeholder="请输入客户手机号码" /></uni-forms-item>
				<uni-forms-item name="remark" label="备注信息:"><uni-easyinput v-model="formData.remark" type="textarea" placeholder="请输入客户的相关信息" /></uni-forms-item>
				<button class="button" type="primary" @click="submitClient">提交</button>
			</uni-forms>
		</view>
	</view>
</template>

<script>
import api from '@/common/api.js';
export default {
	data() {
		return {
			formData: {
				name: '',
				sex: 1,
				phone: '',
				remark: ''
			},
			rules: {
				name: {
					rules: [
						{
							required: true,
							errorMessage: '请输入客户姓名'
						}
					]
				},
				password: {
					rules: [
						{
							required: true,
							errorMessage: '请输入客户的联系方式'
						}
					]
				}
			},
			range: [{ value: 1, text: '男' }, { value: 0, text: '女' }]
		};
	},
	
	methods: {
		change(e) {
			this.formData.sex = e.detail.value
			console.log(this.formData.sex);
		},
		skip() {
			uni.navigateBack({
				delta: 1
			});
		},
		submitClient() {
			this.$refs.form
				.validate()
				.then(res => {
					uni.showLoading({
						title:"提交中..."
					})
					api.addClient(res).then(result=>{
						uni.hideLoading()
						var code = result.data.result.code
						var msg = result.data.result.msg[0]
						console.log(code);
						if(code==0){
							uni.showToast({
								title:msg,
								icon:'error'
							})
						}else {
							uni.showToast({
								title:"提交成功",
								icon:'success'
							})
							this.formData = {}
						}
						
					});
					console.log(res)
				})
				.catch(err => {
					console.log('表单错误信息：', err);
				});
		}
	}
};
</script>

<style>

.form {
	margin: 40rpx 40rpx;
}

</style>
