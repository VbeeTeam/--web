/**
 * 图书管理的入口文件
 * 
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const template = require("art-template");
const path = require ("path");
const router = require("./router");

//挂载参数处理中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//设置express兼容版本
app.engine('html', require('express-art-template'));
//设置模板路径
app.set('views', path.join(__dirname, "views"));
//设置模板后缀
app.set('view engine', 'html');
//托管静态资源
app.use(express.static("public"));

//挂载路由
app.use(router);

app.listen(3000, () => {
    console.log("server success")
})

