var path = require('path');
var db = require(path.resolve('.', 'modules/database/databaseConnector.js'));
var responseGenerator = require(path.resolve('.', 'utils/responseGenerator.js'));
console.log("property");

exports.getAllProperties = function (req, res) {
    var query = 'SELECT * FROM properties where is_deleted = 0';
    db.query(query, function (error, result) {
        if (error) {
            logger.error("Error while processing your request in login ", error);
            res.send(responseGenerator.getResponse(500, "Failed to process your request!!!", []));
        } else {
            console.log(result.length);
            if (result.length > 0) {
                res.send(responseGenerator.getResponse(500, "Response sent successfully", result));
            }
            else {
                res.send(responseGenerator.getResponse(500, "Empty response", []));
            }
        }
    })
}
