var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.post('/', function(req, res, next) {

    let info = req.body;
    // console.log(info)
    let sql = "select * from user where user_name = ? and user_pass = ?";
    let data = [info.user_name, info.user_pass];
    // 调用操作数据库的方法
    db(sql, data, (result) => {
        // console.log(result)
        if(result.length > 0){
            res.json({
                code: 200,
                message: "登录成功"
            })
        }else{
            res.json({
                code: 201,
                message: "登录失败"
            })
        }
    })

});

module.exports = router;
