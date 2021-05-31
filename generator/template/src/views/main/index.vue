<template>
  <div class="main">
    <iframe id="iframe" :src="src" class="iframe"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "http://www.baidu.com"
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;

  .iframe {
    height: 100%;
    width: 100%;
    border: 0px;
  }
}
</style>
