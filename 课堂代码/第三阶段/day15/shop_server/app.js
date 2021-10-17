var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var addUserRouter = require('./routes/addUser');
var selectUserRouter = require('./routes/selectUser');
var delUserRouter = require('./routes/delUser');
var userDetail = require('./routes/userDetail');
var changeUser = require('./routes/changeUser');
var selectProductRouter = require('./routes/selectProduct');
var delProductRouter = require('./routes/delProduct');
var addProductRouter = require('./routes/addProduct');
var productDetailRouter = require('./routes/productDetail');
var updateProductRouter = require('./routes/updateProduct');

var app = express();

//允许跨域请求
// app.all("*", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT");
//   res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With,token");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({
  limit: "50mb"
}));
app.use(express.urlencoded({
  extended: false,
  limit: "50mb",
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/addUser', addUserRouter);
app.use('/selectUser', selectUserRouter);
app.use('/delUser', delUserRouter);
app.use('/userDetail', userDetail);
app.use('/changeUser', changeUser);
app.use('/selectProduct', selectProductRouter);
app.use('/delProduct', delProductRouter);
app.use('/addProduct', addProductRouter);
app.use('/productDetail', productDetailRouter);
app.use('/updateProduct', updateProductRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;