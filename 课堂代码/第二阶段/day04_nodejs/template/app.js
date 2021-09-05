/**
 * 
 * 模板引擎的使用
 * art-template
 * 
 */
const express = require("express");
const app = express();
const path = require("path");
const template = require('art-template');
//设置express兼容版本
app.engine('html', require('express-art-template'));
//设置模板路径
app.set('views', path.join(__dirname, "view"));
//设置模板后缀
app.set('view engine', 'html');
//根据路由访问
app.get("/art", (req, res) => {
    var html = template(__dirname + '/views/mytpl.html', {
        user: {
            name: '张三'
        }
    });
    res.send(html);
})
app.get("/list", (req, res) => {
    // var html = template(__dirname + '/views/list.art', {
    //     list: ["苹果","梨子","橙子"]
    // });
    // res.send(html);
    let tpl = `
        <ul>
            {{each list}}
                <li>{{$index}} {{$value}}</li>
            {{/each}}
        </ul>
    `
    // let com = template.compile(tpl);
    // let html = com({list: ["苹果","梨子","橙子"]});
    // res.send(html);
    let html = template.render(tpl, {list: ["苹果","梨子","橙子","橘子"]})
    res.send(html);
})

app.listen(3000, () => {
    console.log("success");
})