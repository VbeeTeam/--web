var express = require('express');
var router = express.Router();
// 1.导入更新数据库的方法
const db = require("../public/javascripts/db")

router.put('/', function (req, res, next) {

    var info = req.body;
    console.log(info)

    var obj = {
        select: { name: info.oldName },
        newObj: {
            name: info.newName,
            age: info.age,
            sex: info.sex
        }
    }

    // 2.调用更新数据库的方法
    db("update", res, "student", "bigOne", obj, (result) => {
        if (result.acknowledged) {
            res.send({
                code: 200,
                message: "更新成功"
            })
        }
    })

});

module.exports = router;
