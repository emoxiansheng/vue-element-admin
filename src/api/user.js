import request from '@/utils/axios'

export function login(params) {
  return request({
    url: '/test/login', // 接口地址
    method: 'get', // 请求方式
    data: params // 请求参数
  })
}