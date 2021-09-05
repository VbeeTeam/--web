/**
 * 路由分配
 * 
 */
const express = require("express");
const router = express.Router();
const service = require("./service");

//登录页路由
router.get("/", service.showLogin);

//列表页路由
router.get("/list", service.showList);

//添加页路由
router.get("/add", service.showAdd);

//修改页路由
router.get("/edit", service.showEdit);

//登录接口
router.post("/login", service.submitLogin);
//查询接口
router.get("/search", service.searchBook);
//删除接口
router.get("/delete", service.deleteBook);
//添加接口
router.post("/add", service.addBook);
//修改接口
router.post("/edit", service.editBook);

module.exports = router;