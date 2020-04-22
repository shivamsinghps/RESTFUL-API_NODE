'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('products', {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        name: Sequelize.STRING(30),
        price:Sequelize.INTEGER(7),
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE
    });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('products');

  }
};
