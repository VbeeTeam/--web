/**
 * 请求参数的处理
 * get ：获取数据
 * post: 提交数据
 * put: 更新
 * delete：删除
 * 
 */

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

//挂载静态资源文件
app.use(express.static("public"));

//挂载post参数处理
//extended: false => 使用系统模块querystring来处理
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//get方法 路由 url()获取get参数方法封装过了
// app.get("/login", (req, res) => {
//     console.log(req.query)
//     res.send("登录成功");
// })
//post 方法
// app.post("/login", (req, res) => {
//     console.log("===",req.body)
//     res.send("登录成功");
// })
//put方法
// app.put("/login", (req, res) => {
//     console.log("===",req.body)
//     res.send("登录成功");
// })
//delete方法
app.delete("/login", (req, res) => {
    console.log("===",req.body)
    res.send("登录成功");
})


app.listen(3000, () => {
    console.log('success')
})