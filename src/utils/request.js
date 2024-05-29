import axios from 'axios'
import { ElMessage } from 'element-plus'


const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // baseURL: "http://127.0.0.1:4523/m1/4186373-0-default",
  timeout: 5000,
  // headers: {
  //   'Content-Type': 'application/json;charset=UTF-8'
  // },
})


// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    setTimeout(() => {
      ElMessage.success('请求成功')
    }, 300);
    

    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    setTimeout(() => {
      ElMessage.error('请求失败')
    }, 300);
    
    return Promise.reject(error)
  }
)

export default request
