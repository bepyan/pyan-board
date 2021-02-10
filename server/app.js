const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(
//   cookieParser(process.env.SECRET, { sameSite: "none", secure: true })
// );
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: true, credentials: true }));

// mongo session setup
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: "session"
  })
}));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.get('/favicon.ico', (req, res) => res.status(204));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
