const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const plansRouter = require('./routes/plans');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieParser(process.env.SECRET, { sameSite: "none", secure: true })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: true,
  credentials: true
}));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: process.env.DB_URL,
    collection: "session"
  })
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/plans', plansRouter);

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
