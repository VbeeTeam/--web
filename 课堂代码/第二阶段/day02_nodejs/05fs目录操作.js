/**
 * 目录操作
 * 1.创建目录
 * fs.mkdir(path[,mode],callback)
 * fs.mkdirSync(path[,mode])
 */

 const path = require("path");
 const fs = require("fs");

 //创建目录
//  fs.mkdir(path.join(__dirname, 'abcd'), (err) => {
//      if(err) return;
//  })
//同步创建
// fs.mkdirSync(path.join(__dirname,"abcde"));

// 读取目录
// fs.readdir(__dirname, (err,files) => {
//     console.log(files);
//    files.forEach((item,index) => {
//        fs.stat(path.join(__dirname,item),(err,stat) => {
//            if(err) return;
//            if(stat.isFile()){
//                console.log(item,"文件");
//            }else if(stat.isDirectory()){
//                console.log(item,"目录");
//            }
//        })
//    })
// })
//同步读取目录
let files = fs.readdirSync(__dirname);
files.forEach((item,index) => {
    fs.stat(path.join(__dirname,item),(err,stat) => {
        if(err) return;
        if(stat.isFile()){
            console.log(item,"文件");
        }else if(stat.isDirectory()){
            console.log(item,"目录");
        }
    })
})

//删除目录
// fs.rmdir(path.join(__dirname,"abcd"), (err)=>{
//     if(err) return;
// })

//同步删除目录 
// fs.rmdirSync(path.join(__dirname,"abcde"));

