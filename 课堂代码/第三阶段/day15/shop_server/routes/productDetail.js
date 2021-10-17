var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

router.get('/', function(req, res, next) {
    let product_id = req.query.product_id;
    let sql = "select * from product where product_id=?";
    let data = [product_id];
    db(sql, data, (result) => {
        if(result.length > 0){
            res.json({
                code: 200,
                message: "查询成功",
                data: result[0]
            })
        }else{
            res.json({
                code: 500,
                message: "查询失败"
            })
        }
    })

});

module.exports = router;
