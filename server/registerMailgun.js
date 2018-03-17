const mailgun = require('mailgun.js');

const mailgunClient = mailgun.client({
  username: 'api',
  key: 'key-b0cea5304c1670cf013eac4a40173def'
});

module.exports = mailgunClient;
