/* 
    传统非模块化开发的缺点：
    1.命名冲突
    2.文件依赖

    前端标准化模块化规范：(加载异步)
    1.AMD - requirejs   国外
    2.CMD - seajs       国产 淘宝阿里巴巴的

    服务端的模块化规范：（加载同步）
    1.CommonJs - Node.js

    模块化规则：
    1.如何定义模块：一个js文件就是一个模块，模块内部的方法都是相互独立的
    2.模块成员的导出和引入
*/

//求和

var sum = function (a,b) {
    return parseInt(a) + parseInt(b);
}

//模块导出
// exports.sum = sum;
module.exports = sum;