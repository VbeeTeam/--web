/**
 * 操作mongodb数据库模块
 */
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
module.exports = (options, res, dbName, agate, obj, callback) => {
    MongoClient.connect(url, (err, dbObj) => {
        if (err) {
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }
        // 连接数据库以及集合
        var rs = dbObj.db(dbName).collection(agate);
        switch (options) {
            case 'insert':
                add(rs, dbObj, obj, callback)
                break;
            case 'remove':
                del(rs, dbObj, obj, callback)
                break;
            case 'update':
                change(rs, dbObj, obj, callback)
                break;
            case 'query':
                query(rs, dbObj, obj, callback)
                break;
        }

    })
}
//添加方法
const add = (rs, dbObj, obj, callback) => {
    rs.insertOne(obj).then((result) => {
        callback(result);
        dbObj.close();
    })
}
// 删除方法
const del = (rs, dbObj, obj, callback) => {
    rs.deleteOne(obj).then((result) => {
        callback(result);
        dbObj.close();
    })
}
// 更新方法
const change = (rs, dbObj, obj, callback) => {
   rs.updateOne(obj.select, {$set: obj.newObj}).then((result) => {
        callback(result);
        dbObj.close();
    })
}
// 查询方法
const query = (rs, dbObj,  obj, callback) => {
    rs.find(obj.condition).sort(obj.sort).limit(obj.size).skip(obj.count).toArray().then((result) => {
        callback(result)
         // 关闭数据库
         dbObj.close();
    })
}



