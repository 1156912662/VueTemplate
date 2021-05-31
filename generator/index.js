/*
 * @Author: yanjikun
 * @Date: 2021-05-31 15:13:03
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-05-31 15:50:56
 * @Description: file content
 */
// generator.js
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    // 命令
    scripts: {
      serve: "vue-cli-service serve --mode local",
      build: "vue-cli-service build --report --mode production",
      "test:unit": "vue-cli-service test:unit",
      lint: "vue-cli-service lint",
      "build:dev": "vue-cli-service build --report --mode dev"
    },
    dependencies: {
      "@vue/babel-helper-vue-jsx-merge-props": "^1.2.1",
      "@vue/babel-preset-jsx": "^1.2.4",
      "ant-design-vue": "^1.6.5",
      axios: "^0.21.0",
      "babel-plugin-import": "^1.13.1",
      "core-js": "^3.6.5",
      lodash: "^4.17.21",
      "lodash.get": "^4.4.2",
      vue: "^2.6.11",
      "vue-amap": "^0.5.10",
      "vue-router": "^3.2.0",
      vuex: "^3.4.0"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.5.0",
      "@vue/cli-plugin-eslint": "~4.5.0",
      "@vue/cli-plugin-router": "~4.5.0",
      "@vue/cli-plugin-unit-jest": "~4.5.0",
      "@vue/cli-plugin-vuex": "~4.5.0",
      "@vue/cli-service": "~4.5.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "@vue/test-utils": "^1.0.3",
      "babel-eslint": "^10.1.0",
      "compression-webpack-plugin": "^1.1.12",
      eslint: "^6.7.2",
      "eslint-plugin-prettier": "^3.1.3",
      "eslint-plugin-vue": "^6.2.2",
      less: "^3.0.4",
      "less-loader": "^5.0.0",
      prettier: "^1.19.1",
      "vue-template-compiler": "^2.6.11"
    }
  });
  // 复制template模版
  // 删除 vue-cli3 默认目录
  api.render(files => {
    console.log(files);
    Object.keys(files)
      .filter(path => path.startsWith("public/"))
      .forEach(path => delete files[path]);
  });
  api.render("./template");
};
