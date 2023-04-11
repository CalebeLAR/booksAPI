'use strict';

// https://sequelize.org/docs/v6/other-topics/migrations/    
// https://www.youtube.com/@prodcoder/videos

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title:{
        allowNull: false,
        type: Sequelize.STRING
      },
      author:{
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity:{
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};