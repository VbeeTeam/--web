/**
 * 路由模块
 */
const express = require("express");
const router = express.Router();
const service = require("./service");

//登录的路由
router.get("/", service.showLogin);
//首页的路由
router.get("/toIndex", service.showIndex);
//新增的路由
router.get("/toAdd", service.showAdd);
//修改的路由
router.get("/toEdit", service.showEdit);

//新增图书接口地址
router.post("/addBook", service.addBook);
//修改图书接口地址
router.post("/editBook", service.editBook);
//删除图书接口地址
router.get("/deleteBook", service.deleteBook);
//搜索图书接口地址
router.post("/searchBook", service.searchBook);
//登录接口地址
router.post("/login", service.login);


//导出路由方法
module.exports = router;