import Vue from 'vue'
import axios from 'axios'
import vm from '../main'

let instance = axios.create({
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})
// ajax拦截器-请求前request阶段（请求阶段）
instance.interceptors.request.use(function (config) {
  vm.$loading.show()
  return config
}, function (error) {
  vm.$loading.hide()
  return Promise.reject(error)
})

// ajax拦截器-请求后response阶段（响应阶段）
instance.interceptors.response.use(function (response) {
  vm.$loading.hide()
  return response
}, function (error) {
  vm.$loading.hide()
  return Promise.reject(error)
})
Vue.prototype.$http = instance

export default instance
