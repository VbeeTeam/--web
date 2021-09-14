var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");
// 查询图书列表
router.get('/', function (req, res, next) {

    var page = req.query.page || 1;
    var size = req.query.size || 5;
    var start = (page - 1) * size;

    var total = 0;

    let sql = "select * from book_info";
    let data = null;
    // 如果搜索传图书名字就模糊查询，否则就查所有
    if (req.query.name) {
        let name = req.query.name;
        sql = sql + " where name like ? limit " + start + ", " + size;;
        data = ['%' + name + '%'];
    } else {
        sql = sql + " limit " + start + ", " + size;
    }

    let sql2 = "select count(*) as total from book_info";
    db(sql2, null, (result2) => {

        db(sql, data, (result) => {
            // console.log(result);
            // console.log(result2);
            total = result2[0]["total"];
            // console.log(total);
            res.json({
                code: 200,
                message: "数据获取成功",
                data: result,
                total: total
            })
        })

    })
});

module.exports = router;