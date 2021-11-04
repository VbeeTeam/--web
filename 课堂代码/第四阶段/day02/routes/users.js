var express = require('express');
var router = express.Router();
// 1.导入操作数据库的方法
const db = require("../public/javascripts/db")
/* GET users listing. */
router.get('/', (req, res, next) => {
  // 2.调用数据库方法
  db("query", res,"student","bigOne",{}, (result) => {
    console.log(result);
    if(result.length >= 0){
      res.json({
        code: 200,
        messages: "查询成功",
        data: result
      })
    }
  });
});
module.exports = router;
