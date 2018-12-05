var routes = require('path');
var api = require('./propertycontroller.js');
var express = require('express');
var router = express.Router();

// router.post('/getPropertyDetails', api.getPropertyDetails);
router.post('/getAllProperties', api.getAllProperties);

module.exports = router;