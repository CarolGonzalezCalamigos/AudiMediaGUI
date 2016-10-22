var express = require('express');
var app = express();
var path = require('path');

var a  = app.use(express.static(path.join(__dirname + '/../Images')));
console.log(path.join(__dirname + '/../Images'))

app.get('/', function (req, res) {
  res.sendFile( path.join(__dirname + '/../index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
