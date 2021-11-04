const { MongoClient } = require("mongodb")
var url = "mongodb://localhost:27017/"

// 默认导出
module.exports = queryDB = (res, dbName, agate, conditionObj, callback) => {
    MongoClient.connect(url, (err, dbObj) => {
        if (err) {
            res.send("服务器错误")
        } else {
            dbObj.db(dbName).collection(agate).find(conditionObj).toArray((err, result) => {
                if(err){
                    res.send("查询失败")
                }else{
                    callback(result)
                }
                // 关闭数据库
                dbObj.close();
            })
        }
    })
}

