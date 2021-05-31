/*
 * @Author: yanjikun
 * @Date: 2020-10-12 10:56:39
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-25 16:06:29
 * @Description: file content
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/andv_use';
import '@/style/index.less';
import VueAMap from 'vue-amap'; //高得地图

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: 'f10b49584b3a0d083ec5e643047f698c',
  plugin: ['AMap.Geolocation', 'AMap.Geocoder', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
Vue.prototype.AMap = VueAMap;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
