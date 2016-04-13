var port ='8080';
var host = '0.0.0.0';

var express = require('express');
var app = express();

var rules = require('./app/index.js');
app.use(rules);

app.listen(port, host);
console.log('it work\'s ! visit http://localhost:'+port);
