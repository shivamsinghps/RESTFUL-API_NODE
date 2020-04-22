'use strict';

const _Data = require('../data/Initial_order_data')

module.exports = {
  up: (queryInterface, Sequelize) =>  {
    return queryInterface.bulkInsert('orders', _Data);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('orders', null, {});

  }
};
