const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:5173'
}
// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/mediaBrands', cors(corsOptions), function (req, res) {
  const filePath = path.join(__dirname, 'data', 'mediaBrands.json');
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

app.get('/headlineNews', cors(corsOptions), function (req, res) {
  const filePath = path.join(__dirname, 'data', 'headlineNews.json');
  let headlineNews;

  try {
    headlineNews = require(filePath);
  } catch (error) {
    console.error('Failed to read JSON file: ', error);
    next(createError(500, 'Failed to read JSON file'));
    return;
  }

  try {
    res.json(headlineNews);
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
