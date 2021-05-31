<!--
 * @Author: yanjikun
 * @Date: 2020-10-12 10:56:39
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-22 13:39:23
 * @Description: file content
-->
<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default {
  components: {},
  data() {
    return {
      locale: zhCN
    };
  }
};
</script>
<style lang="less">
body,
html,
#app {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
#app {
  min-width: 1600px;
  min-height: 900px;
  overflow: auto;
}
</style>
