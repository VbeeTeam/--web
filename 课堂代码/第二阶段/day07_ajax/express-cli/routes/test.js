var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.query);
    // res.json({
    //     status: 200,
    //     data: "登录成功"
    // })

   
    res.jsonp({
        code: 200,
        data: "请求成功"
    })
});
router.post('/pos', function(req, res, next) {
    console.log(req.body);
    res.send('登录成功');
});

module.exports = router;
