/*
 * @Author: yanjikun
 * @Date: 2020-10-13 15:42:03
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-25 10:03:55
 * @Description: file content
 */
//import Vue from "vue";
import axios from 'axios';
//import store from "@/store";
import notification from 'ant-design-vue/es/notification';
import { VueAxios } from './axios';
import store from '../store';
//import { ACCESS_TOKEN } from "@/store/mutation-types";
//const ACCESS_TOKEN = "Access-Token";
// 创建 axios 实例
console.log(process.env.VUE_APP_API_BASE_URL);
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 60000 // 请求超时时间
});
// console.log("当前环境变量：" + process.env.NODE_ENV);
// console.log(process.env.VUE_APP_API_BASE_URL);
const err = error => {
  if (error.response) {
    const data = error.response.data;
    //const token = Vue.ls.get(ACCESS_TOKEN);
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      });
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      });
      //   if (token) {
      //     store.dispatch("Logout").then(() => {
      //       setTimeout(() => {
      //         window.location.reload();
      //       }, 1500);
      //     });
      //   }
    }
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(config => {
  if (store.getters.token) {
    const token = store.getters.token.token;
    if (token) {
      config.headers['Authorization'] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
  }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  return response;
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  }
};

export { installer as VueAxios, service as axios };
