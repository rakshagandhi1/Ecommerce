var express = require('express');
var cors = require('cors');
var userRouter = require('./user/user-router.js');

var intiliaseRouter = function intiliaseRouter(app) {
    app.use(express.json());
    app.use(cors());
    app.use('/users' , userRouter);
}

module.exports = intiliaseRouter;