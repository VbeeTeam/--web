/**
 * 文件操作
 */

 const fs = require("fs");
 const path = require("path");

 //读文件
 let strpath = path.join(__dirname, 'data.txt');

//  fs.readFile(strpath, (err,data) => {
//      if(err) return;
//      console.log(data.toString());
//  })

//如果第二个参数是编码，那么回调函数获取到的数据就是字符串
//如果没有第二个参数，那么回调函数获取到的数据就是Buffer对象
fs.readFile(strpath,'utf-8', (err,data) => {
    if(err) return;
    console.log(data);
})

//同步读文件操作
let ret = fs.readFileSync(strpath, "utf-8");
console.log(ret);

//写文件的操作
// fs.writeFile(strpath, "hell", "utf8", (err) => {
//     if(err){
//         return;
//     }else{
//         console.log("文件写入成功");
//     }
// })
//同步写文件操作
fs.writeFileSync(strpath,"我是同步文件");