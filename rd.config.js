module.exports = {
  server: [
    [
      'server',
      {
        root: './build',
        port: 4004
      }
    ]
  ],
  dev: [
    [
      'webpack4',
      {
        entry: "./src/index.js",
        env: 'development',
        template: "./index.html",
        watch: true,
        cssModules: true, // css 模块化时不支持 通过less 方式的主题替换
        autoOpen: true, 
        modifyVars: {  // 配置less 变量，常用于 库主题替换
          'primary-color': '#1DA57A',
        },
        devtool: true,
        chunks: true,
        folders: {
          css: 'css',
          js: 'js',
          font: 'font'
        },
        isMobile: false,
        port: 8888,
      }
    ]
  ],
  build: [
    [
      'webpack4',
      {
        entry: "./src/index.js",
        env: 'production',
        output: './build',
        template: './index.html',
        // chunks: false,
        isMobile: true,
        watch: false,
        analyze: false,  // 启动打包文件分析
        transform: false,
        folders: {
          css: 'css',
          js: 'js',
          font: 'font'
        },
        common: true,
        modifyVars: {  // 配置less 变量，常用于 库主题替换
          'primary-color': '#1DA57A',
        },
      }
    ]
  ]
}