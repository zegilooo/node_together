var express = require('express');
var exphbs = require('express-handlebars');
const motivations = require('motivations');
const pickOne = require('pick-one');
const catImages = [1, 2, 3, 4, 5, 6];

var app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir: './app/views/layouts'
}));
app.set('views', './app/views')
app.set('view engine', 'handlebars');

app.get("/", function(request, response) {
	var motivation = pickOne(motivations);
	var image = pickOne(catImages);
	response.render('motivations', {
		motivation: motivation,
		image:image
	});
});

app.get("/about", function(request, response) {
	response.send("This is about what ?");
});

module.exports = app;