module.exports = (sequelize, DataTypes) => {
  const Entries = sequelize.define('Entries', {
    name: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
    entry: {
      type: DataTypes.STRING
    }
  });

  return Entries;
};
