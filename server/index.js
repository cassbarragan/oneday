const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sequelize } = require('../db/models/index.js');
const compression = require('compression');

const db = require('../db/models/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

const router = require('./router/routes.js');
app.use('/', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  sequelize.authenticate()
  .then(() => console.log('db connected...'))
  .catch(err => console.log('db err:', err))
});