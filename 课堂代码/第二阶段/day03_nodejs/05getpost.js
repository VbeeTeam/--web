/**
 * 常用请求方法
 * 
 * get、post、delete、put
 * 
 * get：获取数据
 * post：提交数据
 * delete：删除数据
 * put：更新数据
 * 
 */
const url = require("url");
// get参数写法
//特点：参数显示在url地址栏中不安全，传输数据量小
let strUrl = "http://www.baidu.com/abc?name=张三&age=15";

let ret = url.parse(strUrl, true); //true为对象不设置为字符串
console.log("ret:", ret.query)

// post参数处理
//特点：url地址栏看不到参数安全，传输数据量大

// querystring 字符串的操作
const querystring = require("querystring");
const http = require("http");

// querystring.parse(str[, sep[, eq[, options]]]);
//把字符串转成对象
let obj = querystring.parse(strUrl);
console.log(obj);
//把对象转成字符串
let obj2 = {
    a: "123",
    b: "hello"
}
let str = querystring.stringify(obj2);
console.log(typeof str);

http.createServer((req, res) => {
   if(req.url.startsWith("/login")){
       let pdata = "";
       req.on("data",(chunk)=>{
           pdata += chunk
       })
       req.on("end",()=>{
           let obj = querystring.parse(pdata);
           res.end(obj.user);
       })
   }
}).listen(3000, () => {
    console.log("server启动成功");
})






