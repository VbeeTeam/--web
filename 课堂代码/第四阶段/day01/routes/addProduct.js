var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

/* 添加商品 */
router.post('/', function(req, res, next) {
    var info = req.body;
    // 处理数据
    for(let key in info){
        if(key == "product_price"){
          info[key] =  Number(info[key])
        }else if(key == "product_cate"){
            info[key] = Number(info[key])
        }
    }
    // console.log("info:",info)
    db("insert", res, "product_base", "product", info, (result) => {
        if(result.acknowledged){
            res.json({
                code: 200,
                message: "添加商品成功"
            })
        }
    } )

});

module.exports = router;
