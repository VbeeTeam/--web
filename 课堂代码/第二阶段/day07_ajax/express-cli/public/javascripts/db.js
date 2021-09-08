/**
 * 封装操作数据库api
 */
const mysql = require("mysql");

module.exports = (sql, data, callback) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'book'
    });

    connection.connect();

    connection.query(sql, data, function (error, results, fields) {
        if (error) {
            console.log("error")
        };
        callback(results);
    });

    connection.end();
}