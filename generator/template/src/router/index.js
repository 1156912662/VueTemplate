/*
 * @Author: yanjikun
 * @Date: 2020-10-12 10:56:39
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-22 13:43:04
 * @Description: file content
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
  // routes: require(`./${process.env.NODE_ENV === 'production' ? 'routers' : 'routers1'}`).default
});
export default router;
