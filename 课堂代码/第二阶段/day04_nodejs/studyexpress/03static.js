/**
 * 托管静态文件
 * 
 */
const express = require("express");
const app = express();

//将public目录下的html文件通过服务器地址访问

// app.use(express.static("public"));
//设置虚拟目录
app.use("/static", express.static("public"));

app.listen(3000, () => {
    console.log("server success");
})