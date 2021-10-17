var express = require('express');
var router = express.Router();

const db = require('../public/javascripts/db')

router.post('/', function(req, res, next) {
    let info = req.body;
    let sql = "insert into product set ?";
    db(sql, info, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "添加商品成功"
            })
        }else{
            res.json({
                code: 500,
                message: "添加商品失败"
            })
        }
    })
});

module.exports = router;
