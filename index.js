const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {Datastore} = require('@google-cloud/datastore');
require('@google-cloud/debug-agent').start({ allowExpressions: true });
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const datastore = new Datastore();

app.listen(port, () => {
  console.log('Listening on port', port);
});

app.get('/', async (req, res) => {
    console.log(`Out Of Stock Service: health check`);
    res.status(200).send('OK');
})

app.post('/', async (req, res) => 
{
  const notification = req.body;
  console.log(`Request ${notification}`)
  try 
  {
    console.log(`Out of stock report ${notification.product.id}`);
    saveNotification(notification.product);
    console.log(`Out of stock notification saved ${notification.product.id}`);
    res.status(200).send();
  }
  catch (ex) {
    console.log(`Out of stock notification error ${notification.product.id} failure: ${ex}`);
    res.status(500).send();
  }
})

function saveNotification(product) 
{
  console.log('Saving notification');

  var id = uuidv4();

  const kind = 'notification';

  // The Cloud Datastore key for the new entity
  const notificationKey = datastore.key([kind, id]);

  const notification = {
      key: notificationKey,
      data: 
      {
        product: product
      },
    };
    // [END datastore_entity_with_parent]

    return datastore.save(notification);
}
