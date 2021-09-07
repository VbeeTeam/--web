/**
 * 图书管理系统的入口文件
 * npm i express art-template express-art-template body-parser --save
 */
const express = require("express");
const bodyParser = require("body-parser");
// const tempalte = require("art-template");
const expressTemplate = require("express-art-template");
const app = express();
const path = require("path");
const router = require("./router");
//设置模板路径
app.set("views", path.join(__dirname, "views"));
//设置模板后缀
app.set("view engine", "html");
//设置模板兼容
app.engine("html", expressTemplate);
//挂载静态资源中间件
app.use("/static", express.static("public"));
//挂载处理参数的中间件
app.use(bodyParser.urlencoded({extended: false}));
// app.get("/", (req, res) => {
//     res.render("login", {});
// })
// app.get("/index", (req, res) => {
//     res.render("index", {});
// })
//挂载配置路由
app.use(router);
app.listen(3001, () => {
    console.log("server run success port : 3001");
})
