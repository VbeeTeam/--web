/**
 * 1. 新建html项目结构
 * 
 * 文件操作案例(初始化目录结构)
 * 
 */

 const path = require("path");
 const fs = require("fs");

//初始化目录
 let root = 'C:\\Users\\11587\\Desktop\\实训\\day03';
 //内容
 let fileContent = `
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>nodejs文件创建</title>
 </head>
 <body>
     <div>Welcome you!</div>
 </body>
 </html>
 `
 //初始化案例
 //dir 文件夹  file文件
 let initData = {
    projectName: "mydemo",
    data: [
        {
            name: 'img',
            type: 'dir',
        },
        {
            name: 'css',
            type: 'dir'
        },
        {
            name: 'js',
            type: 'dir'
        },
        {
            name: 'index.html',
            type: 'file'
        }
    ]
 }

//创建项目根路径
//path.join():方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
//例如：path.join('foo', 'baz', 'bar'); // 返回 'foo/baz/bar'
//path.resolve:方法会把一个路径或路径片段的序列解析为一个绝对路径。

fs.mkdir(path.join(root,initData.projectName),(err)=>{
    if(err) return;
    //创建子目录和文件
    initData.data.forEach((item)=>{
        if(item.type == 'dir'){
            //创建子目录
            fs.mkdirSync(path.join(root,initData.projectName,item.name));
        }else if(item.type == 'file'){
            //创建文件并写入内容
            fs.writeFileSync(path.join(root,initData.projectName,item.name),fileContent);
        }
    })
})
