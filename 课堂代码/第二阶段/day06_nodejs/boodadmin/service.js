/**
 * 处理业务逻辑
 */
const db = require("./db");

//登录状态
var loginBoolean = false;

//登录页面
exports.showLogin = (req, res) => {
    res.render("login", {});
}
//首页
exports.showIndex = (req, res) => {
    if (loginBoolean) {
        let sql = "select * from booktable";  
        db(sql, null, (result) => {
            res.render("index", {
                list: result
            });
        })
    } else {
        res.redirect("/");
    }
}
//新增页
exports.showAdd = (req, res) => {
    if (loginBoolean) {
        res.render("add", {});
    } else {
        res.redirect("/");
    }
}
//修改页
exports.showEdit = (req, res) => {
    if (loginBoolean) {
        // console.log(req.query)
        let id = req.query.id;
      
        let sql = "select * from booktable where id=?";
        let data = [id];
        db(sql, data, (result) => {
            console.log(result);
            res.render("edit", result[0]);
        })

    } else {
        res.redirect("/");
    }
}
//添加图书业务逻辑
exports.addBook = (req, res) => {
    console.log(req.body);
    let info = req.body;
    let sql = "insert into booktable set ?";
    db(sql, info, (result) => {
        console.log(result);
        if(result.affectedRows == 1){
            res.redirect("/toIndex");
        }
    })
   
}
//修改图书逻辑
exports.editBook = (req, res) => {
    console.log(req.body);
    let info = req.body;
    
    let sql = "update booktable set name=?, author=?, category=?, description=? where id=?";
    let data = [info.name, info.author, info.category, info.description, info.id];
    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.redirect("/toIndex");
        }
    })

}
//删除图书
exports.deleteBook = (req, res) => {
    console.log(req.query);
    let id = req.query.id;
    let sql = "delete from booktable where id=?";
    let data = [id];

    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.redirect("/toIndex");
        }
    })
}
//搜索图书
exports.searchBook = (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    
    if (name == "") {
        let sql = "select * from booktable";  
        db(sql, null, (result) => {
            res.render("index", {
                list: result
            });
        })
    } else {
        // let sql = "select * from booktable where name=?";
        let sql = "select * from booktable where name like ?";
        let str = "%" + name + "%";
        let data = [str];
        db(sql, data, (result) => {
            res.render("index", {
                list: result,
                keyword: name
            });
        })
    }
}
//登录
exports.login = (req, res) => {
    console.log(req.body);
    let info = req.body;
    if (info.username && info.password) {
        loginBoolean = true;
        res.redirect("/toIndex");
    } else {
        res.send("请输入用户名或密码");
    }
}