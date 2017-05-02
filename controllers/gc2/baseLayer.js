var express = require('express');
var router = express.Router();
var http = require('http');
var config = require('../../config/config.js').gc2;
var request = require('request');

router.get('/api/baselayer', function (req, response) {
    var db = req.params.db, url;
    url = config.host + "/api/v1/baselayerjs/" + db;

    request.get(url, function (err, res, body) {

        if (err) {

            response.header('content-type', 'application/json');
            response.status(400).send({
                success: false,
                message: "Could not get the base layer data."
            });

            return;
        }

        response.send((body));
    })
});
module.exports = router;
