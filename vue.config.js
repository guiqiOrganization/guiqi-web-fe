module.exports = {
  publicPath: "./",
  outputDir: "dist",
  // where to put static assets (js/css/img/font/...)
  // 是否在保存时使用‘eslint-loader’进行检查
  // 有效值: true | false | 'error'
  // 当设置为‘error’时，检查出的错误会触发编译失败
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 19001,
    https: false, // https:{type:Boolean}
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  pwa: {
    name: "遇见"
  }
};
