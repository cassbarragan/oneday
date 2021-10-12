const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routes.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});