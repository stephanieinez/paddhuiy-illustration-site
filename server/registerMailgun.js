const mailgun = require('mailgun.js');

const mailgunClient = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

module.exports = mailgunClient;
