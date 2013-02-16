var conf = require('./config')
  , webserver = require('./webserver');

var TrackPimp = function() {
  this.webserver = webserver;
}

TrackPimp.prototype.start = function start() {
  
}

module.exports = TrackPimp;
