const { ObjectId } = require('bson');
var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

/* 删除商品 */
router.delete('/', function(req, res, next) {
    var info = req.query;
    var obj = {
        "_id": ObjectId(info.product_id)
    }
    db("remove",res,"product_base","product",obj,(result) => {
        if(result.acknowledged){
            res.json({
                code: 200,
                message: "删除成功"
            })
        }
    })

});

module.exports = router;
