/* 入口文件 */
import $ from 'jquery';
// 导入样式文件
import './css/base.css';
import './css/index.scss';
import './css/add.less';
// jQuery代码控制隔行变色
$(function () {
	$('#app ul li:even').css('background-color', 'red');
	$('#app ul li:odd').css('background-color', 'green');
});
// 报错：yntaxError: Cannot use import statement outside a module

// 书写ES6,需要使用babel来
// babel 已经是前端领域的必备工具了，它可以让我们使用一些新的语法和 api，babel
// 会在编译的过程中转为目标环境的支持的语法并引入 polyfill。除此以外，babel 也提
// 供了强大的插件机制，我们可以通过它暴露出的 api 来开发各种代码转换插件
// "@babel/plugin-proposal-class-properties"解析类和静态属性
class Person {
	static info = { name: '编译新语法和api' };
}
console.log(Person.info);
