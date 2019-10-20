var express = require('express');
var cors = require('cors');
var phones = require('./data/phones.json');

var app = express();

app.use(cors());

app.get('/phones', function (req, res) {
  setTimeout(() => {
    res.send(phones);
  }, 2000)
});

app.listen(9000, function() {
  console.log('Listening on port 9000');
});