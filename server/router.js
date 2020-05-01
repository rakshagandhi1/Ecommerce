var express = require('express');
var cors = require('cors');  // it allows that who can access the requests and how can be accessed.
var userRouter = require('./user/user-router.js');

var intiliaseRouter = function intiliaseRouter(app) {
    app.use(express.json());
    app.use(cors());
    app.use('/users' , userRouter);
}

module.exports = intiliaseRouter;