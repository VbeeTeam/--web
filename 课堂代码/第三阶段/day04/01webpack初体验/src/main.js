/**
 * 项目的入口文件
 */

// 1.导入jquery  ES6模块化导入
// import *** from ***
import $ from "jquery";
// Cannot use import statement outside a module 不能识别import语法
// 由于ES6模块化语法太高级了，浏览器解析不了
$(function(){
    $("li:odd").css("background-color", "yellow");
    $("li:even").css("background-color", "pink")
})

// 导入工具函数
// 通过*来批量接收，as 来指定接收的名字
// import * as obj from "./js/tools";
// console.log(obj);
// console.log(obj.myfn(2, 3));

import {name, age, fn} from "./js/tools";
console.log(name, age, fn(3, 5));

// 导入ES6默认导出的方法
import myObj from "./js/utils";
console.log(myObj(5, 3));
// console.log(myObj.myFn(),myObj.myName);

// 经过刚才的演示webpack可以做什么事情？
// 1.webpack可以处理js文件之间的依赖关系
// 2.webpack可以处理js兼容问题，把高级的语法转为浏览器可以识别的语法,ES6转ES5
// 3.生产环境比开发环境多一个压缩 js 代码
// webpack ./src/main.js -o ./dist --mode=development 
// webpack 要打包的文件路径 -o 输出的文件路径 打包模式为开发环境
// webpack ./src/main.js -o ./dist --mode=production
// webpack 要打包的文件路径 -o 输出的文件路径 打包模式为生产环境

//一直输入这么长的命令太麻烦 我想直接输入webpack进行打包
// 配置webpakc.config.js

