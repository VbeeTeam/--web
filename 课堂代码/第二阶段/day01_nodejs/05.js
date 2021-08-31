/**
 * 模块文件引入的情况：.js .json 
 * 模块优先级加载顺序（不加文件后缀）：.js > .json 
 */
var data = require("./data");

console.log(data.test());