/**
 * 入口文件链接数据库
 * 
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
//操作数据库
//SELECT 1 + 1 AS solution 验证数据库是否正常 返回结果为2为正常
connection.query('select count(*) as total from booktable', (error, results, fields) => {
    if (error) {
        console.log(error)
    };
    console.log('The total is: ', results[0].total);
});
//关闭数据库
connection.end();