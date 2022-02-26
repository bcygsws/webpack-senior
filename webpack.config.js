const path = require('path');
// 在内存中生成html页面
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// 告诉webpack是开发环境还是生产环境
	mode: 'development', // 其他值包括"production","none"
	// 入口起点，可以指定多个入口。声明使用绝对路径，保证不出错
	entry: path.resolve(__dirname, 'src/main.js'),
	// 输出配置
	output: {
		// 输出，只能指定一个输出路径
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		// 相对于html页面，解析的输出目录
		publicPath: '/',
		// 关于library和libraryTarget参考文档：https://segmentfault.com/a/1190000017960583
		// 事实上，你可以选择的选项有：
		// commonjs/commonjs2: 将你的library暴露为CommonJS模块
		// amd: 将你的library暴露为amd模块
		// umd: 将你的library暴露为所有的模块定义下都可运行的方式
		library: 'my-library', // 导出库的名称
		libraryTarget: 'umd' // 默认值是var,将组件库的入口起点设置为一个变量。assign则是生成一个全局变量
		// 配置输出模块的编码格式，umd表示universal module definition ，即支持所有情况的自定义，可以是var,window,global,umd等其他值
	},
	plugins: [
		new htmlWebpackPlugin({
			// 托管的模板
			template: path.resolve(__dirname, 'src/index.html'),
			// 托管后文件名仍叫做index.html
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			// 配置解析样式或其他文件的loader
			// .css文件
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss|sass$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: true,
							import: true
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						// 参考文档：https://blog.csdn.net/m0_45315697/article/details/106446801
						options: {
							url: true,
							import: true
							// url: true, //启用url，默认true，如果设置false，则页面只是默认样式
							// import: true, //禁止或启用@import, 默认true
							// minimize: false, //压缩css代码, 默认false
							// 注意 : minimize这个属性移除了，这里设置不生效。
							// 如果要对css代码压缩，可以使用插件optimize-css-assets-webpack-plugin
							//  root: '/', //修改css中url指向的根目录, 默认值为/, 对于绝对路径, css-loader默认是不会对它进行处理的
							// modules: false, //开启css-modules模式, 默认值为flase
							// localIdentName: ‘[name]-[local]-[hash:base64:5]‘, //设置css-modules模式下local类名的命名
							// camelCase: false, //导出以驼峰化命名的类名, 默认false
							// sourceMap: false, //禁止或启用sourceMap, 默认false
							// importLoaders: 0, //在css-loader前应用的loader的数目, 默认为0
							// alias: {} //起别名, 默认{}
						}
					},
					// 需要配合postcss.config.js里面的autoprefixer使用
					// autoprefixer为样式添加前缀，压缩css文件等都需要postcss-loader
					'postcss-loader',
					'less-loader'
				]
			}
		]
	}
};
