const db = require('../database/connection'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;

module.exports = sequelize.define("Product", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING(30),
  price:Sequelize.INTEGER(7)
});
