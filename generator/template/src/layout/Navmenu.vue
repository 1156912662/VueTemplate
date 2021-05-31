<template>
  <a-menu
    theme="dark"
    mode="horizontal"
    :defaultSelectedKeys="['2']"
    :style="{ lineHeight: '64px' }"
  >
    <a-sub-menu style="float:right">
      <span slot="title" class="submenu-title-wrapper">
        <a-popover title trigger="click" placement="bottom">
          <template slot="content">
            <a-tree
              :treeData="menulist"
              defaultExpandAll
              :defaultSelectedKeys="['100']"
              :replaceFields="{ title: 'title', key: 'key' }"
              style="text-align:left"
              @select="onSelect"
            ></a-tree>
          </template>
          <a-icon type="setting" style="font-size:24px" />
        </a-popover>
      </span>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  props: {
    menulist: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    onSelect() {}
  },
  mounted() {
    console.log(this.menulist);
  }
};
</script>

<style></style>
