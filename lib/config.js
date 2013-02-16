var nconf = require('nconf')
  , path = require('path');

nconf.argv()
     .env()
     .file('./config.json');

nconf.defaults({
  'port': '666'
});
nconf.set('app_path', path.normalize(__dirname + '/..'));

module.exports = nconf;
