module.exports = {
  dev: [
    [
      'webpack4',
      {
        // __path__: '../rd-mid-webpack4/lib/index.js',
        entry: "./src/index.js",
        template: "./src/assets/index.html",
        cssModules: true, // css 模块化时不支持 通过less 方式的主题替换
        devtool: true, // 是否开启调试
        watch: true, //
        common: false,
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
        // __path__: '../rd-mid-webpack4/lib/index.js',
        entry: "./src/index.js",
        output: './build',
        template: './src/assets/index.html',
        common: false,
        cssModules: true,
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