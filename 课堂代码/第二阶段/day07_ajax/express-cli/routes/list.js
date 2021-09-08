var express = require('express');
var router = express.Router();
const db = require("../public/javascripts/db");

router.get('/', function(req, res, next) {
  let sql = "select * from booktable";
  db(sql, null, (result) => {
      if(result.length >= 0){
          res.json({
              code: 200,
              messages: "获取成功",
              data: result
          })
      }else{
          res.json({
              code: 500,
              message: "服务器错误"
          })
      }
  })
});

router.post('/search', function(req, res, next) {
    let name = req.body.name;
    console.log(name);
    let sql = "select * from booktable where name like ?";
    let str = "%" + name + "%";
    let data = [str];
    db(sql, data, (result) => {
        if(result.length >= 0){
            res.json({
                code: 200,
                messages: "获取成功",
                data: result
            })
        }else{
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }
    })
})

router.get('/byId', function(req, res, next) {
    let id = req.query.id;
    let sql = "select * from booktable where id=?";
    let data = [id];
    db(sql, data, (result) => {
        console.log(result)
        if(result.length >= 0){
            res.json({
                code: 200,
                messages: "获取成功",
                data: result[0]
            })
        }else{
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }
    })
})


module.exports = router;
