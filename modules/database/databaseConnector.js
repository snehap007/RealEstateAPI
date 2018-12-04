var mysql = require('mysql');
var path = require('path');
// var config = require(path.resolve('./','config'));
logger = require(path.resolve('./logger'))

// console.log(config);
var con = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'root123',
    database: 'real_estate'
});


myFunction();

function myFunction(){
    setTimeout(function(){
        con.connect(function(err){
            if(err){
                logger.error('Error connecting to database', err);
                console.log('Error connecting to Database');
                return;
            }
            logger.info('connection established');
            console.log('started iteration on -' + new Date());
            console.log('connection established');
        });
    },3000)
}

module.exports = con;