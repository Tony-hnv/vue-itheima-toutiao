/**
 * 请求模块
 */

import axios from 'axios'
import store from '@/store'
import JSONBing from 'json-bigint'

// JSON.parse()
// JSON.stringfy()

// JSONBig 可以处理数据中超出 JavaScript 安全整数范围的问题

// JSONBig.parse() // 把 JSON 格式的字符串转化为 JavaScript 对象
// 使用的时候需要把 BigNumber 类型的数据转化为字符串来使用
// 如：const jsonStr = '{ "art_id": 12232423123142232212}'
// console.log(JSONBig.parse(jsonStr).art_id.toString())

// JSONBig.stringfy()  // 把 JavaScript 对象转化为 JSON 格式的字符串

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net', // 基础路径

  // 自定义后端返回的原始数据
  // data: 后端返回的原始数据，说白了就是 JSON 格式的字符串
  transformResponse: [function (data) {
    try {
      return JSONBing.parse(data)
    } catch (err) {
      return data
    }
  }]
})

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // 请求发起会经过这里
  // config：本次请求的请求配置对象
  // console.log(config)
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }

  // 注意： 这里务必要返回 config 配置对象，否则请求就停在这里出不去了
  return config
}, function (error) {
  // 如果请求出错（还没发出去）会进入这里
  return Promise.reject(error)
})
// 相应拦截器

export default request
