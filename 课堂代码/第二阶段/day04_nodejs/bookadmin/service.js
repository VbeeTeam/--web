/**
 * 业务逻辑
 * 
 */
const data = require("./data/data.json");
const fs = require("fs");
const path = require("path");

//登录信息
var login = null;

//登录验证方法
let loginTest = (res, tpl, obj) => {
    if (login) {
        res.render(tpl, obj);
    } else {
        res.redirect("/");
    }
}

//登录
exports.submitLogin = (req, res) => {
    let info = req.body;
    if (info.username && info.password) {
        login = info;
        res.redirect("/list");
    } else {
        res.send("login error");
    }
}

//登录页
exports.showLogin = (req, res) => {
    res.render("login", {});
}
// 列表页 //渲染图书列表
exports.showList = (req, res) => {

    loginTest(res, "list", {
        list: data
    });

}
//添加页
exports.showAdd = (req, res) => {

    loginTest(res, "add", {});

}
//修改页
exports.showEdit = (req, res) => {
    let id = req.query.id;
    let book = {};
    data.forEach((item) => {
        if (id == item.id) {
            book = item;
        }
    })
    loginTest(res, "edit", book);
}
//查询图书
exports.searchBook = (req, res) => {
    let name = req.query.keyword;
    var book = [];
    if (req.query.keyword == "") {
        loginTest(res, "list", {
            list: data
        });
    } else {
        data.forEach((item) => {
            if (name == item.name) {
                book.push(item)
            }
        })
        loginTest(res, "list", {
            list: book
        });
    }
}
//删除图书
exports.deleteBook = (req, res) => {
    if (login) {
        let id = req.query.id;
        data.forEach((item, index) => {
            if (item.id == id) {
                data.splice(index, 1);
            }
        })
        fs.writeFile(path.join(__dirname, "/data/data.json"), JSON.stringify(data), (err) => {
            if (err) {
                res.send("server error");
            }
            res.redirect("/list"); //路由重定向
        })
    }else{
        res.redirect("/");
    }
}

//自动生成图书id
let bookId = () => {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id);
    })
    return Math.max.apply(null, arr);
}

//添加图书
exports.addBook = (req, res) => {
    //获取前端提交的参数
    let info = req.body;
    let book = {};
    book.id = bookId() + 1;
    for (let key in info) {
        book[key] = info[key];
    }

    data.push(book);
    //把数据写入data.json
    fs.writeFile(path.join(__dirname, "data/data.json"), JSON.stringify(data), (err) => {
        if (err) {
            res.send("server error")
        } else {
            res.redirect("/list");
        }
    })

}

//修改图书提交
exports.editBook = (req, res) => {
    let info = req.body;

    data.forEach((item) => {
        if (info.id == item.id) {
            for (let key in info) {
                item[key] = info[key];
            }
            return
        }
    })
    //把数据写入data.json
    fs.writeFile(path.join(__dirname, "data/data.json"), JSON.stringify(data), (err) => {
        if (err) {
            res.send("server error");
        } else {
            res.redirect("/list");
        }

    })

}