const Sequelize = require('sequelize')

const sequelize = new Sequelize('bjtebek0lzj3zfbzopym','uayavgzzmaeaaduj','LKl7h8psVKnSvYB9YnQI',{
  host:"bjtebek0lzj3zfbzopym-mysql.services.clever-cloud.com",
  dialect:"mysql"
});

// module.exports = sequelize
// global.sequelize = sequelize

var db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
