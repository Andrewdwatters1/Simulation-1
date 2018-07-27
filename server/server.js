const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const pc = require('./controller');

const app = express();
const port = 5000; 
massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
})
.catch(error => {
  console.log(error)
});
app.use(bodyParser.json());

//endpts here 
app.get('/api/inventory', pc.getInventory);
// app.post('/api/product', pc.method);

app.listen(port, () => {
  console.log("Listening on port: ", port)
})