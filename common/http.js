/**
 * 封装wx.request请求
 * 携带token进行请求
 * 可切换线上版本和测试版本
 */


const pubUrl = "https://sale.fmujie.cn/api"//线上正式接口
// const pubUrl = "https://api.fmujie.cn/api"//测试接口
const http = (options) =>{
  return new Promise((resolve,reject) => {
    
    uni.request({
      url: pubUrl+options.url,
      method:options.method || 'get',
      data:options.data || {},
      header: options.header || {
        "Authorization": "Bearer " + uni.getStorageSync('login_status').access_token,
        'content-type':'application/x-www-form-urlencoded'
      },
      success:resolve,
      fail:reject
    })
  })
}
export {
  http,
  pubUrl
} 

