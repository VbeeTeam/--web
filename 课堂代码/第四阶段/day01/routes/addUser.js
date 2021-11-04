var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

router.post('/', function(req, res, next) {

    var info = req.body;
    console.log(info)
    db("insert", res, "student", "bigOne", info, (result) => {
        if(result.acknowledged){
            res.json({
                code: 200,
                message: "添加用户成功"
            })
        }
    })

});

module.exports = router;
