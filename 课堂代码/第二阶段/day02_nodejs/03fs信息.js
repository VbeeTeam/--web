/**
 * fs文件操作
 * 
 */
const fs = require("fs");
// stat 提供了关于文件的信息的获取
fs.stat('./data.txt', (err, stat) => {
    console.log(err);
    console.log(stat);
    //一般回调参数的第一个是参数是错误对象，如果是err为null，表示没有错误，没有提示就报错了
    //stat 文件的信息
    if(err) return;
})

//  文件 ./data.txt
fs.stat('./abc', (err, stat) => {
    if(err) return;   
    if(stat.isFile()){
        //判断是否是文件
        console.log("文件");
    }else if(stat.isDirectory()){
         //判断是否是目录
        console.log("目录");
    }
})

//atime 文件访问的时间
//ctime 文件的状态信息发生变化的时间（比如文件的权限）
//mtime 文件数据发生变化的时间
//birthtime 文件创建的时间
fs.stat('./abc', (err, stat) => {
    if(err) return;   
    console.log(stat.atime.toString());
    console.log(stat.ctime.toString());
    console.log(stat.mtime.toString());
    console.log(stat.birthtime.toString());
})
//同步操作
// let ret = fs.statSync('./data.txt');
// console.log("===", ret)
