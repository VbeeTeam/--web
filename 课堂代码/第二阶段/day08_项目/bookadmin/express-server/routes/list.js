var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");
// 查询图书列表
router.get('/', function(req, res, next) {

    let sql = "select * from book_info";
    let data = null;
    // 如果搜索传图书名字就模糊查询，否则就查所有
    if(req.query.name){
        let name = req.query.name;
        sql =  sql + " where name like ?";
        data = ['%' + name + '%'];
    }
    db(sql, data, (result) => {
        // console.log(result);
        res.json({
            code: 200,
            message: "数据获取成功",
            data: result
        })
    })
});

module.exports = router;
