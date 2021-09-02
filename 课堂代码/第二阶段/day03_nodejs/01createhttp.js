/**
 * 初步实现服务器功能
 */
// const http = require("http");

const http  = require("http");

// //创建服务器实例对象
// let server = http.createServer();

// //绑定事件
// server.on("request", (req, res) => {
//     // req 前端请求的信息
//     // res 响应给前端的信息
//     //给客户端返回信息
//     console.log("success");
//      完成响应
//     res.end("hello");
// });

// // 监听3000端口
// server.listen(3000);

// ====================

http.createServer((req, res) => {
    //完成响应
    res.end("ok");
}).listen(3000, "192.168.1.20", () =>{
    //端口 IP地址
    console.log("running");
});

// 查看本机ip
// ipconfig/all


