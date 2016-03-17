var express = require('express');
var app = express();
//var request = require('request');
app.get('/', function(req, res) {
	res.send('Hello World!');
});
app.get('/cities', function(req, res) {
	res.send('Weather details of the cities are -> ');
});
var server = app.listen(9393, function() {
	var host = server.address().address;
	var port = server.address().port;
    console.log('Dev Hack Paypal Weather Server is listening at http://%s:%s', host, port);
});
