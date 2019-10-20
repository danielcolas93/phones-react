var express = require('express');
var app = express();
var phones = require('./data/phones.json');

app.get('/phones', function (req, res) {
  res.send(phones);
});

app.listen(9000, function() {
  console.log('Listening on port 9000');
});