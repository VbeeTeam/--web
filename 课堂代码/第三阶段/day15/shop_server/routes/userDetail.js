var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

router.get('/', function(req, res, next) {
    var id = Number(req.query.id);

    let sql = "select * from user where user_id=?";
    let data = [id];

    db(sql, data, (result) => {
        console.log(result);
        if(result.length > 0){
            res.json({
                code: 200,
                message: "查询成功",
                data: result[0]
            })
        }else{
            res.json({
                code: 201,
                message: "没有查询出数据"
            })
        }
    })

});

module.exports = router;