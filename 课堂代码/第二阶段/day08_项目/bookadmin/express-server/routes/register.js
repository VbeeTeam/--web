var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.post('/', function (req, res, next) {
    let info = req.body;

    // 先查询判断是否有该用户
    let sql = "select * from user where username=?";
    let data = [info.username];
    db(sql, data, (result) => {
        if (result.length > 0) {
            res.json({
                code: 201,
                message: "该用户已经注册，请换个用户名"
            })
        } else {
            let sql2 = "insert into user set ?";
            db(sql2, info, (result2) => {
                if (result2.affectedRows == 1) {
                    res.json({
                        code: 200,
                        message: "注册成功"
                    })
                }
            })
        }
    })
});

module.exports = router;