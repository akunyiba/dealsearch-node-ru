// Set up
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port  	 = 8080;
var database = require('./config/database');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Configuration
mongoose.connect(database.url);
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

// Routes
require('./app/routes.js')(app);

// Start app
app.listen(port);
console.log("App listening on port " + port);