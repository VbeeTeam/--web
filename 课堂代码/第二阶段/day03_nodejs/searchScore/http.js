/**
 * 动态网站开发
 * 
 * 成绩查询功能
 * 
 */
const http = require("http");
const path = require("path");
const fs = require("fs");
const querystring = require("querystring");
const scoreData = require("./data/score.json");

http.createServer((req, res) =>{
    console.log(req.method)

    //查询成绩入口地址 /index 
    if(req.url.startsWith("/index")){
        //读index.html文件
        fs.readFile(path.join(__dirname, "view", "index.html"), "utf-8", (err, content) => {
            if(err){
                // 固定头部返回状态码 服务器错误是500
                res.writeHead(500, {
                    'Content-Type': "text/plain;charset=utf8"
                })
                res.end("服务器错误,请与管理员联系");
            }
            res.end(content);
        })
    }else if(req.url.startsWith("/score") && req.method == "POST"){
        //获取成绩的结果 /score
        let pdata = "";
        //绑定data事件拿到数据
        req.on("data", (chunk) => {
            console.log("1", chunk);
            pdata += chunk;
        })
       
        //绑定结束事件返回数据
        req.on("end", ()=>{
            //将拿到的成绩数据转成对象
            let obj = querystring.parse(pdata);
            console.log("obj:", obj);
            //取出转成对象的数据
            let result = scoreData[obj.code];
            console.log("result:", result);
            fs.readFile(path.join(__dirname,"view","result.html"), "utf8", (err, content) => {
                if(err){
                    res.writeHead(500, {
                        'Content-Type': "text/plain;charset=utf8"
                    })
                    res.end("服务器错误,请与管理员联系");
                }
                //返回内容之前要进行数据渲染
                content = content.replace("$$chinese$$", result.chinese);
                content = content.replace("$$math$$", result.math);
                content = content.replace("$$english$$", result.english);
                content = content.replace("$$summary$$", result.summary);

                res.end(content);
            })
        })

    }else{
        res.end("请求错误！")
    }
}).listen(3000, () =>{
    console.log("running...");
})