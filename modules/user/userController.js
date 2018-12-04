var path = require('path');
var db = require(path.resolve('.', 'modules/database/databaseConnector.js'));
var responseGenerator = require(path.resolve('.', 'utils/responseGenerator.js'));
console.log("done");
exports.signup = function (req, res) {
    username = req.body.username;
    email = req.body.email;
    password = hash;

    function accountCheck(callback) {
        //check for account if it alrready exist 
        var sql = 'SELECT EXISTS (SELECT 1 FORM users email = ?) AS accountExists;';

        db.query(sql, [email], function (error1, results1) {
            if (error1) {
                logger.warn("error while processing your request");
                res.send(responseGenerator.getResponse(500, "Failed to process your request!!!", []));
            }
            else {
                console.log(JSON.stringify(results1));
                if (results1[0].accountExists == 1) {
                    logger.warn("Email Already Exists");
                    res.send(responseGenerator.getResponse(802, "Email already exists", null));
                }
                else {
                    logger.info("Signing Up");
                    callback();
                }
            }
        })
    }

    accountCheck(function () {
        // Procedure to call insert user
        db.query('call SignupUser("' + username + '","' + email + '","' + password + '")', function (error, result) {
            if (!error) {
                var data = {
                    id: result[0][0].id,
                    username: result[0][0].username,
                    email: result[0][0].email
                }
                //generate  of jwt token
                // var token = 
            }
        })
    })
}


exports.SignIn = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var query = 'select * from user where username= ? and isDeleted = 0';
    db.query(query, [email], function (error, result) {
        if (error) {
            logger.error("Error while processing your request in login ", error);
            res.send(responseGenerator.getResponse(500, "Failed to process your request!!!", []));
        }
        else {
            console.log(result.length);
            if (result.length > 0) {
                console.log(result);
                var data = {
                    id: result[0].userID,
                    username: result[0].username
                }
                if (password == result[0].password) {
                    res.send(responseGenerator.getResponse(200, "Login Successful!!", data));
                } else {
                    res.send(responseGenerator.getResponse(500, "Wrong username password!! please try again!", []));
                }
            }
            else {
                res.send(responseGenerator.getResponse(500, "Wrong username password!! please try again!", []));
            }
        }
    })
}