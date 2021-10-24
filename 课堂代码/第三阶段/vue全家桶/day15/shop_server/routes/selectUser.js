var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.get('/', function (req, res, next) {
    var page = req.query.page || 1;
    var size = req.query.size || 5;
    var user_name = req.query.user_name;
    let data = null;
    let sql = "";
    let sql2 = "";
    // 计算起始位置
    let start = (page - 1) * size;
    if(user_name){
        sql = "select * from user where user_name like ? order by user_id desc limit " + start + ", " + size;
        sql2 = "select count(*) from user where user_name like ?";
        data = ["%" + user_name + "%"];
    }else{
        sql = `select * from user order by user_id desc limit ${start}, ${size}`;
        sql2 = "select count(*) from user";
    }
    
    db(sql2, data, (result) => {
        console.log(result)
        db(sql, data, (result2) => {
            console.log(result2)
            if (result2.length >= 0) {
                res.json({
                    code: 200,
                    message: "查询成功",
                    data: result2,
                    total: result[0]['count(*)']
                })
            } else {
                res.json({
                    code: 500,
                    message: "服务器错误"
                })
            }
        })
    })

    
});

module.exports = router;