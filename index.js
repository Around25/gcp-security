const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('@google-cloud/debug-agent').start({ allowExpressions: true });

app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});

app.get('/', async (req, res) => {
    console.log(`Email Service: health check`);
    res.status(200).send('Health check..');
})

app.post('/', async (req, res) => {
  const notification = decodeBase64Json(req.body.message.data);
  try 
  {
    console.log(`Email Service: Report ${notification.id} trying...`);
    sendEmail();
    console.log(`Email Service: Report ${notification.id} success :-)`);
    res.status(204).send();
  }
  catch (ex) {
    console.log(`Email Service: Report ${notification.id} failure: ${ex}`);
    res.status(500).send();
  }
})

function decodeBase64Json(data) {
  return JSON.parse(Buffer.from(data, 'base64').toString());
}

function sendEmail() {
  console.log('Sending email');
}
