var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

router.delete('/', function(req, res, next) {

    var info = req.query;
    console.log(info)
  
    db("remove", res, "student", "bigOne", {name:info.name}, (result) => {
        console.log(result)
        if(result.acknowledged){
            res.json({
                code: 200,
                message: "删除成功"
            })
        }
    })

});

module.exports = router;
