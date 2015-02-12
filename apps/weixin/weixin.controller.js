var config = require('../../config/config');
var async = require("async");
var wechat = require('wechat');
var utils = require('./utils');
var WechatApi = require('wechat-api');

var api = new WechatApi( 
  config.get('WEIXIN_APP_ID'),
  config.get('WEIXIN_APP_SECRET'),
  utils.getToken,
  utils.saveToken
);
api.registerTicketHandle(utils.getTicketToken, utils.saveTicketToken);

/** js-sdk */
exports.sign = function(req, res) {
    var url = decodeURIComponent(req.query.url); 
    var param = {
      debug: false,
      jsApiList: ['scanQRCode','getLocation'],
      url: url
    };

    api.getJsConfig(param, function(err, result){
       console.log(err, result);
       if(err){
           return res.json({ret:1});
       }
       return res.json({
           ret: 0,
           config: result
       });
    });

}
;


var wxconfig = {
  token: config.get('WEIXIN_TOKEN'),
  appid: config.get('WEIXIN_APP_ID'),
  encodingAESKey: config.get('WEIXIN_ENCODING_AES_KEY')
};

/** 公众号消息 */
exports.chat =  wechat(wxconfig).text(function (message, req, res, next) {
  res.reply();
}).image(function (message, req, res, next) {
  res.reply();
}).voice(function (message, req, res, next) {
  res.reply();
}).video(function (message, req, res, next) {
  res.reply();
}).location(function (message, req, res, next) {
  res.reply();
}).link(function (message, req, res, next) {
  res.reply();
}).event(function (message, req, res, next) {
  res.reply();
}).middlewarify();

