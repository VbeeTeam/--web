var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.post('/', function (req, res, next) {

    console.log(req.body);
    let info = req.body;

    let sql = "select * from user where username=? and password=?";
    let data = [info.username, info.password];
    db(sql, data, (result) => {
        if (result.length > 0) {
            res.json({
                code: 200,
                message: "登录成功"
            })
        } else {
            let sql2 = "select * from user where username=?";
            let data = [info.username];
            db(sql2, data, (result2) => {
                if (result2.length > 0) {
                    res.json({
                        code: 201,
                        message: "密码输入错误"
                    })
                } else {
                    res.json({
                        code: 201,
                        message: "没有用户名，去注册"
                    })
                }
            })
        }
    })

});

module.exports = router;