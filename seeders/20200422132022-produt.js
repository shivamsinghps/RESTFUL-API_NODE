'use strict';

const _Data = require('../data/Inital_product_data.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('products', _Data);
  },

  down: (queryInterface, Sequelize) => {


      return queryInterface.bulkDelete('products', null, {});

  }
};
