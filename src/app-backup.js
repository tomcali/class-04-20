'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('<h1>hello my express world</h1>');
});

app.listen(3000, function(){
	console.log('listening on port 3000');
});