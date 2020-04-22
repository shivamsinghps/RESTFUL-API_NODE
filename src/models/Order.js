const db = require('../database/connection'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;

module.exports = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  quantity:Sequelize.INTEGER(3)
});
