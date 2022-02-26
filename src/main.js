/* 入口文件 */
import $ from 'jquery';
// 导入样式文件
import './css/index.scss';
import './css/index.less';
// jQuery代码控制隔行变色
$(function () {
	$('#app ul li:even').css('background-color', 'red');
	$('#app ul li:odd').css('background-color', 'green');
});
// 报错：yntaxError: Cannot use import statement outside a module
