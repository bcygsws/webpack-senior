# webpack 打包项目

## 项目构建

-   在项目根目录下，创建两个文件夹 dist 和 src。dist 用于存放打包好的 bundle 和 index.html 等文件、src 存放项目
    的源文件
-   在 src 下创建一个 main.js 文件，可先写一个测试语句(console.log('ok');)
-   在项目根目录路径下，终端执行 npm init -y,初始化生成一个 package.json 文件,用于管理所有的包
-   在 src 下创建一个 index.html 文件，实现一个隔行变色的 ul 无序列表 -在 main.js 文件中引入 jQuery，并且编写 jQuery 代码，控制 index.html 文件的样式
-   在 main.js 文件中，书写 jQuery 代码，提示语法错误：“yntaxError: Cannot use import statement outside a module”,需要使用 webpack 进行打包，开始创建并配置 webpack.config.js 文件
-   完成 webpack.config.js 的基本配置，包括 entry、output、mode 等基本节点
-   安装webpack@3.8.1,命令：$ yarn add webpack@3.8.1 -D，后面的 webpack 相关包依赖它，优先安装；然后再安装webpack-dev-server@2.9.4、html-webpack-plugin@2.30.1 (本案例使用 webpack 4 版本打包，对比 webpack3)
-   添加一个节点 plugins:[]，引入 html-webpack-plugin（作用：将 html 页面托管在内存中），生成的实例配置在 plugins 节点中，实例对象的参数也是一个对象{template:path.resolve(),filename:'index.html'}。这个配置完成后，在 package.json 文件中配置一些页面启动参
-   特别注意：webpack 升级到 4 以后，webpack 原来的一些功能分配在了 webpack-cli 上，webpack4 需要依赖 webpack-cli,因此 webpack-cli 也需要安装。具体版本： "html-webpack-plugin": "4.5.0","webpack": "4.43.0","webpack-cli": "^3.3.11"，"webpack-dev-server": "3.11.3"

## 项目启动

-   $ npm run dev

## 项目配置

### 添加 scss 样式文件

-   在 src 路径下创建一个 css 文件，然后在改文件中创建一个 index.scss 文件，书写若干样式代码。这些代码在没有设置任何样式的加载器之前，是不起任何作用的。把样式文件导入到入口文件中。依次安装node-sass@4.12.0、sass-loader@7.1.0
