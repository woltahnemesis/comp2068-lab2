'use strict';
var express = require('express');
var router = express.Router();

var theMethod;
var x;
var y;
var result;
var error;

/* GET home page. */
router.get('/', function (req, res) {

    theMethod = req.query.method;
    x = parseInt(req.query.x, 10);
    y = parseInt(req.query.y, 10);

    if (isNaN(x)) {
        error = "x must be a number!"
    } else if (isNaN(y)) {
        error = "y must be a number!"
    } else {
        switch (theMethod) {
            case "add":
                theMethod = "+"
                result = x + y;
                error = "";
                break;
            case "subtract":
                theMethod = "-"
                result = x - y;
                error = "";
                break;
            case "multiply":
                theMethod = "*"
                result = x * y;
                error = "";
                break;
            case "divide":
                theMethod = "/"
                result = x / y;
                error = "";
                break;
            default:
                result = "No Result!";
                error = "We only accept this type of string for method: add, subtract, multiply, divide";
                break;
        }
    }

    res.render('index', { a: x, b: y, c: theMethod, d: result, e: error});

});

module.exports = router;
