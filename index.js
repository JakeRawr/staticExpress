'use strict';

var express = require('express');
var app = express();
var http = require('http');

app.get('/nextLink', function (req, res) {
  res.send('Link Connected');
});

app.get('/', function (req, res) {
  console.log('Home Connected');

  res.sendFile('/Users/Tsunghan/devjs/staticExpress/index.html', function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent: Home');
    }
  });
});

var port = process.env.PORT || 3000;

var server = http.createServer(app);
server.listen(port, function () {
  console.log('Server started on port', port);
});
