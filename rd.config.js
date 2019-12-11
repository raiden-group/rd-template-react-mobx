module.exports = {
  dev: [
    [
      'webpack4',
      {
        entry: "./src/index.js",
        template: "./src/assets/index.html",
        cssModules: true, // css 模块化时不支持 通过less 方式的主题替换
        devtool: true, // 是否开启调试
        chunks: true, 
        isMobile: false, // 是否是移动端，移动端自动开启 px2vw 转换
        watch: true, //
        autoOpen: true, // 本地开发是否自动在浏览器中打开
        port: 8888, // 本地服务端口
        modifyVars: {  // 配置less 变量，常用于 库主题替换
          'primary-color': '#1DA57A',
        }
      }
    ]
  ],
  build: [
    [
      'webpack4',
      {
        entry: "./src/index.js",
        output: './build',
        template: '.src/assets/index.html',
        chunks: true,
        isMobile: true,
        analyze: false,  // 启动打包文件分析
        transform: false,
        folders: {
          css: 'css',
          js: 'js',
          font: 'font'
        },
        modifyVars: {  // 配置less 变量，常用于 库主题替换
          'primary-color': '#1DA57A',
        },
      }
    ]
  ]
}