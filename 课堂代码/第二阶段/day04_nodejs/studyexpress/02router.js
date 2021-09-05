/**
 * 路由（根据请求路径和请求方式进行路由分发处理）
 * 
 */

const express = require("express");
const app = express();

//可以处理所有路由请求的方法
app.use((req, res) => {
    res.send("all method");
})

app.get('/', (req, res) => {
    res.send('get data')
})
app.post('/', (req, res) => {
    res.send('post data!')
})
app.put('/', (req, res) => {
    res.send('put data')
})
app.delete('/', (req, res) => {
    res.send('delete data')
})

app.listen(3000, () => {
    console.log("success");
})