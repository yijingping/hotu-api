/* jshint -W079 */

var nconf = require('nconf');

nconf
  .file({ file: __dirname+'/config.json' })
  .env();

nconf.defaults({
  'ENVIRONMENT': 'develop',
  'LOGGLY': false,

  'HTTP_SERVER': false, // Serve http/json api
  'PORT': 9001, // Port of http api server
  'HOST': '0.0.0.0',
  
  // cookie 
  "COOKIE_SECRET": "nodejs-credits-cookie-secret",
  "COOKIE_MAX_AGE": 1000 * 60 * 60 * 24 * 360, // 360 day
  "COOKIE_KEY": "connect.sid",

  // mongodb
  "DB_HOST": "11.11.1.11",
  "DB_NAME": "hotu-api",
  "DB_PORT": 27017,

  // weixin
  "WEIXIN_TOKEN": "6G9IH7EF4D83C5AB",
  "WEIXIN_APP_ID": "wx67fb1f4877bfd511",
  "WEIXIN_APP_SECRET": "646332665dcd63f9e8b83a474f2dbe38",
  "WEIXIN_ENCODING_AES_KEY": "ZvhDvkQ8QpRUvNZUQgDRvrU3ICQEBVEdLvEsmsXTscA",

  "XS_DOMAIN": "http://localhost:9000"

});

module.exports = nconf;
