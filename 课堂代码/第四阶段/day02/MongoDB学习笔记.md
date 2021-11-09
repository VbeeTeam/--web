# MongoDB学习笔记

### 进入数据库

```
mongo.exe
```

### 连接数据库

```js
mongodb://admin:123456@localhost:27017/score-base
```

### 查看有哪些数据库

```js
show dbs
```

### 创建并且使用数据库

```
use [basename]
必须添加数据查看到数据库
db => 命令可以查看当前正在使用哪个数据库
添加数据集合
db.集合名.insert({name:"张三",age: 20})
查看数据集合
db.集合名.find()
查看有格式的数据集合
db.集合名.find().pretty()
```

### 删除数据库

```js
use [databasename]
db.dropDatabasae()
```

### 创建集合

```js
db.createCollection("集合名",options=可选)
```

### 删除集合

```js
db.集合名.drop()
```

### 插入文档

```js
db.集合名.insert({name:"测试",age: 20})
```

### 更新文档

```js
db.集合名.update(查询条件,更新数据)
db.bigtwo.update({name:"王五"},{$set:{name:"李六"}})
```

### 删除文档

```js
db.集合名.remove(查询条件,【删除布尔值：true=>删除一个、默认删除查出的所有】，报错异常)
db.bigOne.remove({name:"李四"})
```

### 查询文档

```js
db.集合名.find() =>查询集合下所有数据
db.集合名.findOne() =>查询集合下一条数据，并且具有格式
db.集合名.find().pretty() =>查询集合下所有数据展示时具有格式
```

### 条件操作符

```js
$gt:大于
$lt:小于
$gte:大于等于
$lte:小于等于
db.集合名.find({字段名: {$lt: 100}})

db.bigOne.find({age:{$gt: 15}})
```

### 分页查询

```js
limit()查询条数
db.集合名.find().limit(5)
skip()跳过指定几条数据查询
db.集合名.find().limit(5).skip(5)
db.集合名.find().limit(pageSize).skip((page1-1)*pageSize)
total: 10 page: 1 pageSize: 3 totalPage: 4
page: 1\2
db.bigOne.find().limit(3).skip(0\3)
```

### 排序

```js
升序
db.集合名.find(查询条件).sort(字段名： 1)
降序
db.集合名.find(查询条件).sort(字段名： -1)
```

