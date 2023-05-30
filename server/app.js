var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/mediaBrands', function (req, res) {
  const filePath = path.join(__dirname, 'data', 'grid.json');
  let mediaBrands;

  try {
    mediaBrands = require(filePath);
  } catch (error) {
    console.error('Failed to read JSON file: ', error);
    next(createError(500, 'Failed to read JSON file'));
    return;
  }

  try {
    res.json(mediaBrands);
  } catch {
    console.error('Failed to parse JSON data: ', error);
    next(createError(500, 'Failed to parse JSON data'))
  }
});

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
