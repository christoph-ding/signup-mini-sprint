// dependencies
var express = require('express')
var path = require('path');
var mongoose = require('mongoose');

// set up server and serve static assets
var app = express();
app.use(express.static('../'))

// connect to our database
mongoose.connect('mongodb://localhost/shortly');

// connecting to our database router and middleware
require('/middleware.js')(app, express);
// for sending messages




//

app.listen(8000);
console.log("listening in on port 8000");

module.exports = app;
