var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var loginRouter = require("./routes/login");
var listRouter = require('./routes/list');
var deleteRouter = require('./routes/delete');
var addRouter = require('./routes/add');
var editRouter = require('./routes/edit');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//允许跨域请求
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With,token");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})
app.use('/', indexRouter);
app.use("/login", loginRouter);
app.use('/list', listRouter);
app.use('/delete', deleteRouter);
app.use('/addBook', addRouter);
app.use('/editBook', editRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
