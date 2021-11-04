const { ObjectId } = require('bson');
var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

/* 更新商品 */
router.put('/', function(req, res, next) {
    
    var info = req.body;
    console.log(info)
    
    var obj = {
        // 更新条件
        select: {
            '_id':ObjectId(info.product_id) 
        },
        // 更新的数据
        newObj: {
            product_name: info.product_name,
            product_price: info.product_price,
            product_img: info.product_img,
            product_desc: info.product_desc,
            product_cate: info.product_cate,
        }
    }
    // 调用操作数据库更新方法
    db("update",res,"product_base","product",obj,(result) => {
        if(result.acknowledged){
            res.json({
                code: 200,
                message: "更新成功"
            })
        }
    })

});

module.exports = router;
