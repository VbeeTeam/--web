const {MongoClient} = require("mongodb");
var url = "mongodb://localhost:27017/";

module.exports = (res, dbName, agate, select, callback) => {
    MongoClient.connect(url, (err, dbObj) => {

        if(err){
            res.send("服务器错误")
        }
        dbObj.db(dbName).collection(agate).deleteOne(select).then((result) => {
            callback(result)
        })

    })
}