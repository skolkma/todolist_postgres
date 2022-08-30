"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("todoLists", [
      {
        name: "John Doe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steven Kolkma",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hulk Hogan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elon Musk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
