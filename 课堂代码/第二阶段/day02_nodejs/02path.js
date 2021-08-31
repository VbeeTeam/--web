const { isAbsolute } = require("path");
/**
 * 路径操作
 * 
 */
const path = require("path");

// basename 获取文件路径的最后一部分
console.log("basename:",path.basename('C:\\Users\\11587\\Desktop\\工商实训资料\\第二阶段node\\day02\\index.html'));
console.log("basename:",path.basename('C:\\Users\\11587\\Desktop\\工商实训资料\\第二阶段node\\day02\\index.html','.html'));

// __dirname 获取当前文件路径
console.log("__dirname:",__dirname);
console.log("dirname:",path.dirname('C:\\Users\\11587\\Desktop\\工商实训资料\\第二阶段node\\day02\\index.html'));

// extname 获取扩展名称
console.log("extname:",path.extname('index.html'));

// 路径的格式化处理
// path.format() obj -> string
// path.parse()  string -> obj
//__filename当前文件

let obj = path.parse(__filename);
console.log("obj:", obj);
/*
{
    root: 'C:\\',     文件根路径
    dir: 'C:\\Users\\11587\\Desktop\\工商实训资料\\第二阶段node\\day02',  文件全路径
    base: 'path.js', 文件的全称
    ext: '.js',      文件的扩展名
    name: 'path'     文件名称
  }
*/

let objPath = {
    root: 'C:\\',     
    dir: 'C:\\Users\\11587\\Desktop\\工商实训资料\\第二阶段node\\day02',  
    base: 'path.js', 
    ext: '.js',      
    name: 'path'     
}

let strPath = path.format(objPath);
console.log("strPath:", strPath)

// isAbsolute 判断是否为绝对路径
console.log("isAbsolute:", path.isAbsolute("C:\\"));
console.log("isAbsolute:", path.isAbsolute("home\\index"));

// join 拼接路径 （..表示上层路径，.表示当前路径）
console.log("join:", path.join('\\foo', 'bar\\', 'index\\baz'));
// console.log("join:", path.join('\\foo', 'bar\\', {}, 'index\\baz'));
console.log("join:", path.join('\\foo', 'bar\\', 'index\\baz', '..\\'));
console.log("join:", path.join('\\foo', 'bar\\', 'index\\baz', '.\\'));

// normalize  规范化路径
console.log("normalize:", path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
console.log("normalize:", path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'));

// relative 计算相对路径  从两个绝对路径换算出相对路径 ..\..\impl\bbb
console.log("relative:", path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));

// resolve 解析路径
console.log("resolve:", path.resolve('目录1', '目录2/目录3/', '../目录4/文件.gif'));

//两个特殊属性
console.log("delimiter:", path.delimiter);  //表示路径分隔符
console.log("sep:", path.sep);              //环境变量分隔符
