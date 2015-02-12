var express = require('express');
var controller = require('./weixin.controller');

var router = express.Router();

router.get('/sign', controller.sign);
router.use('/', controller.chat);

module.exports = router;