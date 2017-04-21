// app-002.js
'use strict';

var express = require('express');

var app = express();
var PORT = 3000;

var yoda = {
  name: 'Yoda',
  role: 'Jedi Master',
  age: 900,
  forcePoints: 2000
};

var vader = {
  name: 'Darth Maul',
  role: 'Sith Lord',
  age: 200,
  forcePoints: 1200
};

app.get('/yoda', function(req, res) {
  res.json(yoda);
});

app.get('/vader', function(req, res) {
  res.json(vader);
});


app.listen(PORT, function(){
	console.log('listening on port 3000');
});








//
