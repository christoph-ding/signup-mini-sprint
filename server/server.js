// dependencies
var express = require('express')
var mongoose = require('mongoose');

// set up server and serve static assets
var app = express();
app.use(express.static('../'))

// connect to our database
mongoose.connect('mongodb://localhost/mini');

// connecting to our database router and middleware
require('./middleware.js')(app, express);

app.listen(8000);
console.log("listening in on port 8000");

module.exports = app;
