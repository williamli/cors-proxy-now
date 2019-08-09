#!/usr/bin/env node
'use strict';
const options = {
  originWhitelist: ['http://localhost:3000'],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
};
const cors_proxy = require('cors-anywhere').createServer(options);
module.exports = (req, res) => {
  cors_proxy.emit('request', req, res);
};