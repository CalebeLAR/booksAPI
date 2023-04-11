'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('books', 'title', {
      allowNull: false,
      type: Sequelize.STRING
    });

    await queryInterface.addColumn('books', 'author', {
      allowNull: false,
      type: Sequelize.STRING
    });

    await queryInterface.addColumn('books', 'pageQuantity', {
      type: Sequelize.INTEGER,
    });

    await queryInterface.changeColumn('books', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    });

    await queryInterface.changeColumn('books', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('books', 'title');
    await queryInterface.removeColumn('books', 'author');
    await queryInterface.removeColumn('books', 'pageQuantity');

    await queryInterface.changeColumn('books', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    });

    await queryInterface.changeColumn('books', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  }
};
