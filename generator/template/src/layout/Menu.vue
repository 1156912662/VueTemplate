<!--
 * @Author: yanjikun
 * @Date: 2020-10-12 15:48:21
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-25 18:01:55
 * @Description: file content
-->
<template>
  <a-layout-sider v-model="collapsed" style="background: #fff" class="menu">
    <!-- <a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button> -->
    <a-menu
      :defaultSelectedKeys="[$route.name]"
      :selectedKeys="[$route.name]"
      mode="inline"
      theme="light"
      @select="clickmenu"
      :selectable="true"
    >
      <template v-for="item in menulist">
        <a-menu-item v-if="!item.children" :key="item.pagePath">
          <a-icon :type="item.iconUrl" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu :menu-info="item" :key="item.pagePath" v-else />
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from './SubMenu';
import { mapState } from 'vuex';
export default {
  components: {
    'sub-menu': SubMenu
  },
  computed: {
    defaultOpenKeys() {
      console.log(this.$route);
      return this.$route.path.split('/');
    },
    ...mapState({
      menulist: state => state.Users.menuList
    })
  },
  data() {
    return {
      collapsed: true,
      Managementlist: [],
      openKeys: []
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    clickmenu({ key }) {
      // console.log(`${item.parentMenu.eventKey || ""}/${key}`);
      this.$router.push({ name: `${key}` });
    }
  },
  mounted() {}
};
</script>
<style lang="less">
.menu {
  height: 100%;
  overflow-y: auto;
}
</style>
