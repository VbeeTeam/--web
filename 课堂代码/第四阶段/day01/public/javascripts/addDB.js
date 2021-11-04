const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017/";

module.exports = (res, dbName, agate, addObj, callback) =>{
    MongoClient.connect(url, (err, dbObj) => {
        if(err){
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }else{
            dbObj.db(dbName).collection(agate).insert(addObj).then((result)=>{
                callback(result);
                dbObj.close();
            })
        }
    })
}
