var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

router.post('/', function (req, res, next) {
    let info = req.body;
    console.log(info);

    let sql = "select * from user where user_name=?";
    let data = [info.user_name]
    db(sql, data, (result) => {
        if (result.length > 0) {
            res.json({
                code: 201,
                messages: "已有当前用户，请换个用户名！"
            })
        } else {
            // 可以注册
            info.user_createtime = new Date();
            let sql2 = "insert into user set ?";
            db(sql2, info, (result) => {
                console.log(result);
                if(result.affectedRows == 1){
                    res.json({
                        code: 200,
                        message: "用户添加成功"
                    })
                }
            })
        }
    })



});

module.exports = router;