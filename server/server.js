// dependencies
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

// set up server and serve static assets
var app = express();
app.use(express.static('../'))

// connect to our database
mongoose.connect('mongdodb://localhost/shortly')

// connecting to our database router






app.listen(8000);
console.log("listening in on port 8000");

module.exports = app;
