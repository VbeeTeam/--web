/**
 * 封装操作数据库的模块API
 */
var mysql = require('mysql');
// exports.base
module.exports = (sql, data, callback) => {
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
    connection.query(sql, data, (error, results, fields) => {
        if (error) {
            console.log(error)
        };
        callback(results);
    });
    //关闭数据库
    connection.end();
}