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

-   测试 sass 或 scss 文件：在 src 路径下创建一个 css 文件，然后在改文件中创建一个 index.scss 文件，书写若干样式代码。这些代码在没有设置任何样式的加载器之前，是不起任何作用的。把样式文件导入到入口文件中。依次安装node-sass@4.12.0、sass-loader@7.1.0
-   测试 less 文件：在 src 路径下创建一个 css 文件，然后在改文件中创建一个 add.less 文件，书写若干样式代码。这些代码在没有设置任何样式的加载器之前，是不起任何作用的。把样式文件导入到入口文件中。依次安装 "less": "^4.1.2","less-loader": "^7.3.0"。为了兼容 css3 和压缩 css,需要安装另外两个插件autoprefixer@9.7.2和postcss-loader@4.2.0，而且这两个插件需要配合 postcs.config.js 文件使用；postcss.config.js 在根目录下创建，配置参考：[postcss.config.js 文件配置](https://www.cnblogs.com/alpiny/p/12496691.html)
-   解析 index.html 文档中的 img 标签，引入的图片，测试正则为/\.(html|htm)$/i，加载器为 html-withimg-loader
-   解析 css 的 background 属性中 url 引入的图片,需要安装 url-loader、autoprefixer、file-loader。具体可以参考文档[webpack 处理几种方式引入的图片，loader 配置](https://www.cnblogs.com/fightjianxian/p/12441638.html)
-   解析 js 或者 jsx 文件中的新语法和 api，需要使用 babel 工具转译成 IDE 能够识别的代码(以@babel/core 7 版本为例)。用到的关于 babel 的几个基本插件版本(记忆：core+babel-loader+preset-env,两个 runtime)："@babel/core": "^7.13.14","@babel/plugin-proposal-class-properties": "^7.13.0","@babel/plugin-transform-runtime": "^7.13.15","@babel/preset-env": "^7.13.15","@babel/runtime": "^7.13.10""babel-loader": "^8.2.2";当然，babel 需要在根目录下创建专门的.babelrc 配置文件

## 项目打包

### 打包命令

-   $ webpack,此命令直接打包，但是不推荐。使用下面：npm run pub 的方式
-   在根目录包管理文件 package.json 中，scripts 中增加一个节点，命名为"pub"，其值配置为"webpack --config webpack.pub.config.js"，然后项目路径下，npm run pub 就可以打包了

#### 多次打包，上次打包的旧包清理，使用clean-webpack-plugin@4.0.0插件,然后在 plugins 节点中引入一个实例对象

#### 发布策略：bundle.js 中只存放自己的代码，第三方包的代码全部抽离到一个另外 js

#### 抽离 CSS/less/sass

-   webpack4 中抽离样式，使用 mini-css-extract-plugin 插件
-   在配置文件中完成配置：先导入插件完成后，同样在 plugins 节点中实例化，传入一个对象参数，{filename:''},filename 命名了所有的 css、less、sass 打包在一个文件中文件名[name].[contenthash:8].css 报错：ValidationError: CSS Loader Invalid Options ;options should NOT have additional properties。原因是css-loader@3.0.0的版本过高。将版本降低为@0.28.7 后，问题解决
