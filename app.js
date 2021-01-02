require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require('./db/db');
// const ObjectId = require('mongodb').ObjectID;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const shopRouter = require('./routes/shop');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop', shopRouter);

module.exports = app;