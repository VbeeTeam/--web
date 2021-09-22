var express = require('express');
var router = express.Router();

/* GET users listing. */
router.delete('/', function(req, res, next) {
  let info = req.body;
  res.json(info);
});

module.exports = router;
