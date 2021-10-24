var express = require('express');
var router = express.Router();

const db = require('../public/javascripts/db');

router.delete('/', function(req, res, next) {
    console.log(req.query)
    let id = Number(req.query.id);
    let sql = "delete from user where user_id=?"
    let data = [id]
    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "删除成功"
            })
        }else{
            res.json({
                code: 201,
                message: "删除失败"
            })
        }
    })
});

module.exports = router;
