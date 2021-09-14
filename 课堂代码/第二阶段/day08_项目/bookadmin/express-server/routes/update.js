var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

router.put('/', function(req, res, next) {

    let info = req.body;

    console.log(info);

    let sql = "update book_info set name=?, author=?, categroy=?, description=?, imgUrl=? where id=?";
    let data = [info.name, info.author, info.categroy, info.description, info.imgUrl, info.id];

    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "修改成功"
            })
        }
    })

});

module.exports = router;