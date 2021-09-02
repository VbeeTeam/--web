/**
 * 登录
 * 
 */
// 模拟登录接口
//username password

const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

http.createServer((req, res) => {
    //模拟前端 穿的数据
    // let pdata = "username=张三&password=123456";
    console.log(req.url);
    //split 分割数组
   let obj = querystring.parse(req.url.split('?')[1]);
   
    //响应数据给前端
    fs.readFile(path.join(__dirname, "www", "login.html"), "utf8", (err, content) => {
        if (err) {
            res.writeHead(500, {
                'Content-Type': "text/plain;charset=utf8"
            })
            res.end("服务器错误,请与管理员联系");
        }
        //返回内容之前要进行数据渲染
        content = content.replace("$$username$$", obj.username);
        content = content.replace("$$password$$", obj.password);

        res.end(content);
    })

}).listen(3000, () => {
    console.log("server启动成功");
})