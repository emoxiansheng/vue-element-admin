import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

// 创建实例
let service = axios.create({
  baseURL: testApi, // 接口地址
  timeout: 5000 // 请求超时时间
})

// 请求拦截器（request)
service.interceptors.request.use(config => {
  if (token) { // 此处是登陆返回的token，添加到请求头
    config.headers = {
      'Authorization': "Token " + token // token值，具体规则和后端定义
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器（respone)
service.interceptors.response.use( response => {
  let res = response.data
  if (res.code !== 200) { // 具体的参数值按定义修改
    Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })
    // 按照后端约定处理错误信息
    if (res.code === 500) {
      // 逻辑代码
    } 
    return Promise.reject('error')
  } else { // res.code === 200, 成功返回data
    return response.data
  }
},
error => {
  Message({
    message: error.message,
    type: "error",
    duration: 5 * 1000
  })
  return Promise.reject(error) // 抛出错误信息到前端
})
export default service // 暴露service文件
