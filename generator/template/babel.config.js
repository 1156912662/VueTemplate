/*
 * @Author: yanjikun
 * @Date: 2020-10-12 10:56:39
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-19 10:06:06
 * @Description: file content
 */
module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    [
      "@vue/babel-preset-jsx",
      {
        injectH: false
      }
    ]
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
};
