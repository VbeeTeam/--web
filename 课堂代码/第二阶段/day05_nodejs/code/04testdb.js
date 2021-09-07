/**
 * 测试通用的api
 */
const db = require("./03db");

//插入
let sql = "insert into booktable set ?";
let data = {
    name: "哪吒传奇2",
    author: "未知",
    category: "道家传说",
    description: "哄小孩的"
}
//调用封装的数据库方法
//db.base() => exports.base导出的
//db() => module.exports导出的
db(sql, data, (res) =>{
    console.log(res);
})