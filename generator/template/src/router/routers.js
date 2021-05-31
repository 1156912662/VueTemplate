/*
 * @Author: yanjikun
 * @Date: 2020-10-15 09:57:50
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-05-31 14:41:41
 * @Description: file content
 */
import Layout from '@/layout/index.vue';
// const RouteView = {
//   name: 'RouteView',
//   render: h => h('router-view')
// };
const router = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/Main',
        name: 'Main',
        component: () => import(/* webpackChunkName: "Main" */ '../views/main/index.vue'),
        meta: { title: '主页' }
      }
    ]
  }
  // {
  //   path: "*",
  //   redirect: "/404",
  //   hidden: true
  // }
];
export default router;
