import {http} from "./http.js"

//登录
const login = (formData) => {
  return http({
    url: '/auth/login',
    data: formData,
    method: "POST"
  })
}

//注册
const register = (formData) => {
  return http({
    url: '/auth/register',
    data: formData,
    method: "POST"
  })
}

//添加新客户
const addClient = (formData) => {
  return http({
    url: '/staff/addcus',
    data: formData,
    method: "POST"

  })
}

//获取客户列表
const getClientList = () => {
  return http({
    url: '/staff/cuslist',
    data: {},
    method: "GET"

  })
}

//更新客户信息
const updateClient = (id,formData) => {
  return http({
    url: '/staff/upcus/' + id,
    data: formData,
    method: "POST"
  })
}

//删除客户
const deleteClient = (customer_id) => {
  return http({
    url: '/staff/delcus',
    data: {customer_id:customer_id},
    method: "POST"

  })
}

//查询客户
const searchClient = (key) => {
  return http({
    url: '/staff/selcus?name=' + key,
    data: {},
    method: "GET"

  })
}

//提交测额度信息
const submitEdu = (enterprise) => {
  return http({
    url: '/staff/addquo',
    data:{enterprise:enterprise},
    method: "POST"

  })
}

//获取额度结果列表
const getEduList = () => {
  return http({
    url: '/staff/quolist',
    data: {},
    method: "GET"

  })
}


// 将方法导出，实现复用
export default {
  //个人信息接口
  login,
  register,
  addClient,
  getClientList,
  deleteClient,
  searchClient,
  updateClient,
  submitEdu,
  getEduList

}






/**
 * 班级模块接口
 */

//提交创建班级的申请
const submitStore = (formData) => {
  return http({
    url: '/manage/audit/store',
    data: formData,
    method: "POST"
  })
}

//老师查看自己申请的班级
const showSelfStore = (num)=>{

  return http({
    url:'/manage/audit/selfShow',
    data:{
      inquire:num
    },
    method:"GET"
  })
}

//老师查看班级成员
const vstudent = (id)=>{

  return http({
    url:'/manage/vstudent',
    data:{
      class_id:id
    },
    method:"GET"
  })
}

//老师查看学生申请进入班级
const showStudentStore = ()=>{

  return http({
    url:'/manage/vapply',
    data:{},
    method:"GET"
  })
}

//老师审核学生申请
const verifyStudentStore = (formData) => {
  return http({
    url: '/manage/papply',
    data: formData,
    method: "POST"
  })
}

//管理员查看审核列表
const showStore = ()=>{

  return http({
    url:'/manage/audit/show',
    data:{},
    method:"GET"
  })
}

//管理员审核申请
const verifyStore = (formData) => {
  return http({
    url: '/manage/audit/verify',
    data: formData,
    method: "POST"
  })
}

//学生加入班级
const joinClass = (form) => {

  return http({
    url: '/manage/audit/jclass',
    data: {
      class_uid:form
    },
    method: "POST"

  })
}

/**
 * 个人信息接口
 */

//获取个人信息
const getMyInfo = () => {

  return http({
    url: '/auth/me',
    data: {
      // username
    },
    method: "POST"

  })
}



//老师发布作业
const setAssignment = (form) => {

  return http({
    url: '/manage/task/assign',
    data:form,
    header:{
      "Authorization": "Bearer " + wx.getStorageSync('access_token').access_token,
      "content-type":'application/json'
    },
    method: "POST"

  })
}

//老师查看自己发布的作业
const showAssignment = ()=>{

  return http({
    url:'/manage/task/showAssignments',
    data:{},
    method:"POST"
  })
}

//学生提交作业
const submitAssignment = (form) => {

  return http({
    url: '/manage/task/submit',
    data: form,
    method: "POST"

  })
}

//学生查看自己未提交的作业
const showNoAssignment = ()=>{

  return http({
    url:'/manage/task/selfShow',
    data:{},
    method:"GET"
  })
}

//学生查看自己已提交的作业
const showHasSubmitAssignment = ()=>{

  return http({
    url:'/manage/task/hasSubmit',
    data:{},
    method:"GET"
  })
}

