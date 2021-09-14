var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.post('/', function(req, res, next) {
    // console.log(req.body);
    let info = req.body;
    let sql = "insert into book_info set ?"

    db(sql, info, (result) => {
        // console.log(result);
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "添加成功"
            })
        }
    })

});

module.exports = router;
