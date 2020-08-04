const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  //针对antd失效按需打包，根据import来打包（使用babel-plugin-import）
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true //自动打包相关的样式
  }),
  //使用less-loader 自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#4169E1" }
  })
);
