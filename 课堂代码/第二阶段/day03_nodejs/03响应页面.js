/**
 * 响应完整的页面信息
 */

const http = require("http");
const path = require("path");
const fs = require("fs");

//封装读文件方法
// let readFile = (file, res) => {
//     fs.readFile(path.join(__dirname, "www", file),"utf8", (err,fileContent) => {
//         if(err) {
//             res.end("server error");
//         }else{
//             res.end(fileContent);
//         }
//     })
// }

http.createServer((req, res) => {

    if (req.url.startsWith("/index")) {

        fs.readFile(path.join(__dirname, "www", "index.html"), "utf8", (err, fileContent) => {
            if (err) {
                res.end("server error");
            } else {
                res.end(fileContent);
            }
        })

        // readFile("index.html",res);

    } else if (req.url.startsWith("/about")) {

        fs.readFile(path.join(__dirname, "www", "about.html"), "utf8", (err, fileContent) => {
            if (err) {
                res.end("server error");
            } else {
                res.end(fileContent);
            }
        })

        // readFile("about.html", res);

    } else if (req.url.startsWith("/list")) {

        fs.readFile(path.join(__dirname, "www", "list.html"), "utf8", (err, fileContent) => {
            if (err) {
                res.end("server error");
            } else {
                res.end(fileContent);
            }
        })

        // readFile("list.html", res);

    } else {
        //设置响应类型和编码 文本类型 解决乱码问题
        // res.writeHead(404, {
        //     "Content-Type": "text/plain; charset=utf8"
        // })
        res.end("页面被偷了");
    }

}).listen(3000, () => {
    console.log("running");
});
