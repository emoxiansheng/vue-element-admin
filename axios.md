# 这是一个axios安装说明文档

## 1、首先，安装axios
```
yarn add axios
```
### 查看package.json文件  "axios": "^0.21.1"

### 安装成功

## 2、使用

### 在src中创建utils文件夹，其中创建axios.js文件

### utils是存放一些公共方法（一般情况）
```
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
```

### 接下来就是api方法的引用

## 3、src下创建api文件夹

### 模块接口写在一起

### 示例：user.js

```
import request from '@/utils/axios'

export function login(params) {
  return request({
    url: '/test/login', // 接口地址
    method: 'get', // 请求方式mock.js
    data: params // 请求参数
  })
}
```

::: 那么接下里就来学习一下前端模拟数据接口工具mock.js
