var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.delete('/', function(req, res, next) {
    console.log(req.body);
    let id = req.body.id;
    let sql = "delete from book_info where id=?"
    let data = [id];
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
