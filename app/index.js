var express = require('express');
const motivations = require('motivations');
const pickOne = require('pick-one');
var app = express();

app.get("/", function(request,response){
	response.send(pickOne(motivations));
});

app.get("/about", function(request,response){
	response.send("This is about what ?");
});

module.exports =  app;