var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/list');
var addRouter = require('./routes/add');
var delRouter = require('./routes/del');
var detailRouter = require('./routes/detail');
var updateRouter = require('./routes/update');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');

var app = express();

//允许跨域请求
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With,token");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({
  limit: "50mb",
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 将路由挂载到express上
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list', listRouter);
app.use('/add', addRouter);
app.use('/del', delRouter);
app.use('/detail', detailRouter);
app.use('/update', updateRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

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