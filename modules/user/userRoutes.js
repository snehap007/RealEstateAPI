var routes = require('path');
var api = require('./userController.js');
var express = require('express');
var router = express.Router();

router.post('/signup', api.signup);