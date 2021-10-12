const {sequelize} = require('../models/index.js');
const {QueryTypes} = require('sequelize');

module.exports = {
  getEntries: async (req, res) => {
    const queryString = `SELECT * FROM public.entries;`;
    const result = await sequelize.query(queryString,  { type: QueryTypes.SELECT });
    res.send(result);
  },

  addEntry: async (req, res) => {
    const newEntry = req.query;
    const queryString = `INSERT INTO public.entries (name, date, entry) VALUES ('${newEntry.name}', '${newEntry.date}', '${newEntry.entry}');`;
    const result = await sequelize.query(queryString,  { type: QueryTypes.INSERT });
    res.send('Successfully recorded! See you tomorrow- same place, same time.');
  }
};