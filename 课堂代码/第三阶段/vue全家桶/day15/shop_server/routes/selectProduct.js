var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

router.get('/', function(req, res, next) {
    
    var info = req.query;
    var page = req.query.page || 1;
    var size = req.query.size || 5;
    var start = (page - 1) * size;
    let str = " limit " + start + ", " + size;
    console.log(info)
    let sql = "select * from product";
    let sql2 = "select count(*) from product";
    let data = null;
    if(info.product_name && info.product_status && info.product_cate){
        sql += " where product_name like ? and product_status=? and product_cate=?" + str;
        sql2 += " where product_name like ? and product_status=? and product_cate=?";
        data = ["%" + info.product_name + "%", info.product_status, info.product_cate]

    }else if(info.product_name && info.product_status){
        sql += " where product_name like ? and product_status=?" + str;
        sql2 += " where product_name like ? and product_status=?";
        data = ["%" + info.product_name + "%", info.product_status]

    }else if(info.product_name && info.product_cate){
        sql += " where product_name like ? and product_cate=?" + str;
        sql2 += " where product_name like ? and product_status=?";
        data = ["%" + info.product_name + "%", info.product_cate]

    }else if(info.product_status && info.product_cate){
        sql += " where product_status=? and product_cate=?" + str;
        sql2 += " where product_status=? and product_cate=?"
        data = [info.product_status, info.product_cate]

    }else if(info.product_name){
        sql += " where product_name like ?" + str;
        sql2 += " where product_name like ?";
        data = ["%" + info.product_name + "%"]

    }else if(info.product_status){
        sql += " where product_status=?" + str;
        sql2 += " where product_status=?";
        data = [info.product_status]

    }else if(info.product_cate){
        sql += " where product_cate=?" + str;
        sql2 += " where product_cate=?";
        data = [info.product_cate]

    }else{
        sql += str;
    }

    db(sql2, data, (result) => {

        db(sql, data, (result2) => {
            if(result2.length >= 0){
                res.json({
                    code: 200,
                    message: "查询成功",
                    data: result2,
                    total: result[0]["count(*)"]
                })
            }else{
                res.json({
                    code: 500,
                    message: "服务器错误"
                })
            }
        })
    })

});

module.exports = router;
