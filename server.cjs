const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/rule', (req, res) => {
  console.log('Received data:', req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
