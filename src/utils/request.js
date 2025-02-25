import axios from 'axios'
import { getToken, removeToken } from './token'
import router from '@/router'

const request = axios.create({
  baseURL: 'https://geek.itheima.net/v1_0',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

//添加响应拦截器
request.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  if (error.response.status === 401) {
    removeToken()
    router.navigate('/login')
    window.location.reload()
  }
  return Promise.reject(error)
})

export { request }