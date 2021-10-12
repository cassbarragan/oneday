const router = require('express').Router();
const controller = require('../../db/controller/index.js');

router.get('/getentries', controller.getEntries);

router.post('/addentry', controller.addEntry);

module.exports = router;