const Sequelize = require('sequelize')

const sequelize = new Sequelize('mart','root','shivam1997*',{
  host:"127.0.0.1",
  dialect:"mysql"
});

// module.exports = sequelize
// global.sequelize = sequelize

var db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
