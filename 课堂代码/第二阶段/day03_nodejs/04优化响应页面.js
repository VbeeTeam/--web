/**
 * 优化响应完整的页面信息
 */

const http = require("http");
const path = require("path");
const fs = require("fs");

http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, "www", req.url), "utf8", (err, fileContent) => {
        // console.log(req.url);
        if (err) {
            //设置响应类型和编码 文本类型  解决乱码问题
            res.writeHead(404, {
                "Content-Type": "text/plain; charset=utf8"
            });
            res.end("页面被偷了");
        } else {
            res.end(fileContent);
        }
    });
    
}).listen(3000, () => {
    console.log("running");
});
