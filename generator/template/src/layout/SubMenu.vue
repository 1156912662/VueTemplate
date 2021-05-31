<!--
 * @Author: yanjikun
 * @Date: 2020-10-12 15:49:07
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-25 09:26:00
 * @Description: file content
-->
<template>
  <a-sub-menu :key="menuInfo.pagePath" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <a-icon :type="menuInfo.iconUrl" /><span>{{ menuInfo.title }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.pagePath">
        <!-- <a-icon type="pie-chart" /> -->
        <span>{{ item.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.pagePath" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
import { Menu } from 'ant-design-vue';
export default {
  title: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
