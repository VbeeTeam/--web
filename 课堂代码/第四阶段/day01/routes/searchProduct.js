var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

/* 搜索商品 */
router.get('/', function (req, res, next) {

    var page = Number(req.query.page) || 1;
    var size = Number(req.query.size) || 5;

    var cate = req.query.product_cate

    var obj = {
        condition: cate ? {product_cate: Number(cate)} : {},
        sort: { '_id': Number(req.query.sort) || 1 },
        size: size,
        count: (page - 1) * size
    }


    db("query", res, "product_base", "product", obj, (result) => {
        if (result.length >= 0) {
            res.json({
                code: 200,
                message: "查询商品成功",
                data: result
            })
        }
    })

});

module.exports = router;
