/*
 * @Author: yanjikun
 * @Date: 2020-10-12 11:01:28
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-19 11:17:04
 * @Description: file content
 */
// vue.config.js
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== "local";
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = [/\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i];
// 本地环境是否需要使用cdn
// cdn链接
const assetsCDN = {
  // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
  externals: {
    vue: "Vue",
    vuex: "Vuex",
    "vue-router": "VueRouter",
    nprogress: "NProgress",
    lodash: "_",
    moment: "moment"
  },
  // cdn的css链接
  css: ["https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css"],
  // cdn的js链接
  js: [
    "https://cdn.bootcss.com/vue/2.6.10/vue.min.js",
    "https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js",
    "https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js",
    "https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js",
    "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.15/lodash.min.js",
    "https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.1/moment.min.js"
  ]
};
module.exports = {
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  publicPath: "/",
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: "0.0.0.0",
    port: 8080 // 服务端口
    // proxy: {
    //     "/": {
    //         //这里最好有一个 /
    //         target: "https://devpay.rydit.com.cn:8443", // 服务器端接口地址
    //         // target: "https://192.168.1.111:8443",
    //         ws: true, //如果要代理 websockets，配置这个参数
    //         secure: true,
    //         // 如果是https接口，需要配置这个参数
    //         changeOrigin: true //是否跨域
    //     }
    //  } // 设置代理
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  transpileDependencies: ["vue-echarts", "resize-detector"],
  chainWebpack: config => {
    if (isProduction) {
      // ============注入cdn start============
      config.plugin("html").tap(args => {
        // 生产环境或本地需要cdn时，才注入cdn
        if (isProduction) args[0].cdn = assetsCDN;
        return args;
      });
      // ============注入cdn start============
    }
  },
  configureWebpack: config => {
    // 用cdn方式引入，则构建时要忽略相关资源
    if (isProduction) config.externals = assetsCDN.externals;
    const plugins = []; //开启gzip
    if (isProduction) {
      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  }
};
// vue.config.js
