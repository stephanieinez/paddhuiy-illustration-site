const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const cors = require('cors');
const bodyParser = require('body-parser');
const mailgunClient = require('./registerMailgun');

const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `Node cluster worker ${
        worker.process.pid
      } exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();
  app.use(cors());
  //support parsing of application/json type post data
  app.use(bodyParser.json());

  //support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.post('/api/email', function(req, res) {
    const emailTemplate = `From: ${req.body.email}\n
    Message: ${req.body.message}`;
    mailgunClient.messages
      .create('sandboxf46c18bc5915403486c7f4b6b83e21ca.mailgun.org', {
        from:
          'Paddhuiy Illustration <mailgun@sandboxf46c18bc5915403486c7f4b6b83e21ca.mailgun.org>',
        to: ['stephanie.tassone@gmail.com'],
        subject: `New message via your website from: ${req.body.email}`,
        text: emailTemplate
      })
      .then(() => {
        res.set('Content-Type', 'application/json');
        res.send('{"message":"Sent!"}');
      }) // logs response data
      .catch(err => {
        res.send('{"message":"Error!"}');
        console.log(err);
      }); // logs any error
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(
      path.resolve(__dirname, '../react-ui/build', 'index.html')
    );
  });

  app.listen(PORT, function() {
    console.error(
      `Node cluster worker ${process.pid}: listening on port ${PORT}`
    );
  });
}