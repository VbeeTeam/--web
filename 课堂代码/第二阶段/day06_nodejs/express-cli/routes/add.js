var express = require('express');
const db = require('../../boodadmin/db');
var router = express.Router();

// const db = require("../public/javascripts/db");

router.post('/', function(req, res, next) {
   let sql = "insert into booktable set ?";
   let info = req.body;
   db(sql, info, (result) => {
       if(result.affectedRows == 1){
           res.json({
               code: 200,
               message: "添加成功"
           })
       }else{
        res.json({
            code: 500,
            message: "服务器错误"
        })
       }
   })
});

module.exports = router;
