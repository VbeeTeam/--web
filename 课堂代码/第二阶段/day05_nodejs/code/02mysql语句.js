/**
 * 数据库mysql语句
 */
 var mysql = require('mysql');
 //创建mysql数据库连接
 var connection = mysql.createConnection({
     host: 'localhost', //数据库所在的服务器或IP
     user: 'root', //数据库账号
     password: '123456', //密码
     database: 'book' //数据库名称
 });
 //执行连接数据库
 connection.connect();

 //新增sql语句
//  let sql = "insert into booktable set ?";
//  let data = {
//      name: "哪吒传奇",
//      author: "未知",
//      category: "道家传说",
//      description: "哄小孩的"
//  }
//更新sql语句
// let sql = "update booktable set name=?, author=?, category=?, description=? where id=?";
// let data = ["哪吒传奇2",'未知','道家传说','哄哄小孩的',7]
//删除语句
// let sql = "delete from booktable where id=?";
// let data = [7];
//查询所有语句
// let sql = "select * from booktable";
// let data = null;
//条件查询
let sql = "select * from booktable where id = ?";
let data = [1];

 //操作数据库
 //SELECT 1 + 1 AS solution 验证数据库是否正常 返回结果为2为正常
 connection.query(sql, data, (error, results, fields) => {
     if (error) {
         console.log(error)
     };
     console.log(results);
 });
 //关闭数据库
 connection.end();