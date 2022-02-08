<template>
	<view>
		<uni-notice-bar showClose="true" style="margin-bottom: 0px;" showIcon="true" text="tips:点击客户号码可拨打"></uni-notice-bar>
		<uni-search-bar placeholder="请输入客户姓名" @confirm="search" @change="change" @clear="clear"></uni-search-bar>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center" width="90">姓名</uni-th>
				<uni-th align="left" width="90">手机号码</uni-th>
				<uni-th align="left" width="130">操作</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->

			<uni-tr v-for="(item, index) in customData" :key="index">
				<uni-td>{{ item.customer_name }}</uni-td>
				<uni-td>
					<view class="call-btn" @click="call(item.customer_phone)">{{ item.customer_phone }}</view>
				</uni-td>
				<uni-td>
					<button size="mini" type="primary" @click="open(item)">查看</button>
					<button size="mini" type="warn" @click="deleteClinet(item.customer_id)">删除</button>
				</uni-td>
			</uni-tr>
		</uni-table>
		<uni-popup ref="popup" type="center">
			<view class="info-card">
				<uni-forms ref="form" :modelValue="showItem" :rules="rules">
					<uni-forms-item name="name" required label="姓名:"><uni-easyinput v-model="showItem.customer_name" type="text" placeholder="请输入客户姓名" /></uni-forms-item>
					<uni-forms-item name="sex" label="性别:">
						<view class="sex-icon">{{ showItem.customer_sex }}</view>
						<!-- <uni-data-checkbox mode="button" v-model="showItem.customer_sex" :localdata="range" @change="change"></uni-data-checkbox> -->
					</uni-forms-item>
					<uni-forms-item name="phone" required label="手机号码:">
						<uni-easyinput v-model="showItem.customer_phone" type="text" placeholder="请输入客户手机号码" />
					</uni-forms-item>
					<uni-forms-item name="remark" label="备注信息:"><uni-easyinput v-model="showItem.remark" type="textarea" placeholder="请输入客户的相关信息" /></uni-forms-item>
					<uni-forms-item name="phone" label="创建时间:">
						<view class="create-time">
							{{showItem.created_at}}
						</view>
						<!-- <uni-easyinput disabled="true" v-model="" type="text" /> -->
					</uni-forms-item>
					<button class="button" type="primary" @click="updateClient(showItem.customer_id)">更新</button>
				</uni-forms>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import api from '@/common/api.js';
export default {
	data() {
		return {
			customData: {},
			showItem: {},
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
	mounted() {
		this.getClient();
	},
	methods: {
		getClient() {
			api.getClientList().then(res => {
				if(res.data.result.code==1){
					this.customData = res.data.result.data.array;
				}
				console.log(res);
			});
		},
		call(phone) {
			uni.makePhoneCall({
				phoneNumber: phone //仅为示例
			});
			console.log(phone)
		},
		open(item) {
			this.showItem = item;
			// console.log(item);
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			this.$refs.popup.open();
		},
		showInfo(id) {
			console.log(id);
		},
		deleteClinet(id) {
			var that = this
			console.log(id);
			uni.showModal({
				title: '提示',
				content: '确定要删除这个客户吗？',
				success: function(res) {
					if (res.confirm) {
						api.deleteClient(id).then(result => {
							if(result.data.result.code==1){
								uni.showToast({
									title:"删除成功"
								})
								that.getClient()
							}else {
								uni.showToast({
									title:"删除失败",
									icon:"error"
								})
							}
							console.log(result);
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		search(e) {
			console.log(e);
			api.searchClient(e.value).then(res=>{
				this.customData = res.data.result.data.array
				// console.log(res.data.result.data.array)
			})
			console.log(e);
		},
		clear(e) {
			this.getClient()
			console.log('clear:' + e);
		},
		change(e) {
			this.formData.sex = e.detail.value;
			// console.log(this.formData.sex);
		},
		updateClient(id) {
			this.$refs.form
				.validate()
				.then(res => {
					uni.showLoading({
						title: '提交中...'
					});
					api.updateClient(id,res).then(result => {
						uni.hideLoading();
						if(result.data.result.code==1){
							uni.showToast({
								title:"更新成功"
							})
							this.$refs.popup.close();
						}
						// console.log(result.data.result.code);
						
					});
					console.log(res);
				})
				.catch(err => {
					console.log('表单错误信息：', err);
				});
		}
	}
};
</script>

<style>
.cont {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.info-card {
	padding: 35px;
	border-radius: 10px;
	background-color: #fff;
}

.call-btn {
	padding: 5px;
	border: 1px solid #e1e1e1;
	border-radius: 5px;
}
.sex-icon {
	font-size: 20px;
}
.create-time {
	padding-top: 8px;
}
</style>
