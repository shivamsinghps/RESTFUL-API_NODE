'use strict';
const _data = require('../data/Initial_User_data.js')

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', _data);

},
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users', null, {});

  }
};
