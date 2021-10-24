var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.put('/', function(req, res, next) {
    let info = req.body;

    let sql = "update product set product_name=? , product_price=? , product_desc=? , product_detail=? ,product_status=? , product_cate=? where product_id=?";
    let data = [info.product_name, info.product_price, info.product_desc, info.product_detail, info.product_status, info.product_cate, info.product_id];

    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "更新成功"
            })
        }else{
            res.json({
                code: 500,
                message: "更新失败"
            })
        }
    })

});

module.exports = router;
