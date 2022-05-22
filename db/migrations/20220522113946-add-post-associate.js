'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "posts", // name of source model
      "userId", // name of key key we are adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "users", // name of target model
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      "posts", // name of source model
      "userId" // key we want to remove
    )
  }
};
