var express = require('express');
var router = express.Router();

const db = require('../public/javascripts/db')

router.put('/', function(req, res, next) {
    
    let info = req.body;
    let sql = "update user set user_name=?, user_pass=?, user_status=? where user_id=?";
    let data = [info.user_name, info.user_pass, info.user_status, info.user_id];

    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                messages: "修改用户信息成功"
            })
        }else{
            res.json({
                code: 500,
                messages: "服务器错误"
            })
        }
    })

});

module.exports = router;
