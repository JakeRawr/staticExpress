'use strict';

var express = require('express');
var app = express();
var http = require('http');

app.use(express.static(__dirname + '/public'));

app.get('/nextLink', function (req, res) {
  res.send('Link Connected');
});

var port = process.env.PORT || 3000;

var server = http.createServer(app);
server.listen(port, function () {
  console.log('Server started on port', port);
});
