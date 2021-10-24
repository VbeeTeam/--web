var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")
router.delete('/', function(req, res, next) {
    console.log(req.query.product_id)

    let sql = "delete from product where product_id=?";
    let data = [req.query.product_id]
    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "删除成功"
            })
        }
    })
});

module.exports = router;
