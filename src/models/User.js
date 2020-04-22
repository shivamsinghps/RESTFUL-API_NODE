const db = require('../database/connection'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;

module.exports = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  email:{
    type:Sequelize.STRING(100),
    allowNull:false,
    is:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    unique: true
  },
  password:{
    type:Sequelize.STRING(100),
    allowNull:false,

  }
});
