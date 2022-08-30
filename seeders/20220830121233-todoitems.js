"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "Do the chores",
        deadline: "31-08-22",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Pass codaisseur",
        deadline: "20-10-22",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Win Wrestlemania",
        deadline: "30-10-22",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Save the world with robots and self driving cars",
        deadline: "01-01-2100",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
