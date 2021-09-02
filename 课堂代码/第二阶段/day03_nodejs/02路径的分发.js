/**
 * 处理路径的分发
 * req.url 可以获取url中的路径（端口之后的部分）
 */

 const http = require("http");

 http.createServer((req, res) => {
    console.log("当前请求的url",req.url);
    if(req.url.startsWith("/index")){
        res.end("index");
    }else if(req.url.startsWith("/about")){
        res.end("about");
    }else{
        res.end("no content");
    }

 }).listen(3000,() =>{
     console.log("running");
 });