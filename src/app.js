var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var search = require('./routes/search');
var app = express();

// Database connect
mongoose.connect('mongodb://mongodb/database');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

module.exports = app;
