var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.get('/', function(req, res, next) {

    let id = req.query.id;

    let sql = "select * from book_info where id=?";
    let data = [id];

    db(sql, data, (result) => {
        if(result.length > 0){
            res.json({
                code: 200,
                messages: "获取成功",
                data: result[0]
            })
        }
    })

});

module.exports = router;
