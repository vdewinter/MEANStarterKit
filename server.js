// modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration

// config files
var db = require('./config/db');

var port = process.env.PORT || 8080;
// mongoose.connect(db.url); 

// get data of body (POST) parameters
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('X-HTTP-Mehotd-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes
require('./app/routes')(app);

// start app
app.listen(port);
console.log('Listening on port ' + port);
module.exports = app;