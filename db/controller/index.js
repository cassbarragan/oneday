const {sequelize} = require('../models/index.js');
const {QueryTypes} = require('sequelize');

module.exports = {
  getEntries: async (req, res) => {
    let { page, count } = req.query;
    if (!page) { page = 1; };
    if (!count) { count = 5; };
    let updateCount = count * (page-1);
    const queryString = `SELECT * FROM public.entries LIMIT ${page} OFFSET ${updateCount};`;
    const result = await sequelize.query(queryString,  { type: QueryTypes.SELECT });
    res.send(result);
  },

  addEntry: (req, res) => {
    res.alert('Successfully recorded! See you tomorrow- same place, same time.');
  }
};