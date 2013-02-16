var conf = require('./config')
  , express = require('express');

var server = express();

server.get('/', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

server.listen(conf.get('port'));
