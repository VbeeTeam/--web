/**
 * 中间件 next（）
 * 就是处理逻辑过程中的一个环节
 * next（）
 * 
 */

const express = require("express");
const app = express();


// app.get("/user", (req, res, next) => {
//     console.log("访问了用户1")
//     next()
// })
// app.get("/user", (req, res, next) => {
//     console.log("访问了用户2")
//     next()
// })
// app.get("/user", (req, res, next) => {
//     console.log("访问了用户3")
//     // next()
// })

app.get("/abc",(req, res, next) => {
    console.log(1)
    next()
},(req, res) => {
    console.log(2)
    res.send("abc")
})


app.listen(3000, () =>{
    console.log("server success");
})