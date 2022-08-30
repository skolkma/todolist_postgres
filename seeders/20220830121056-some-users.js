"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        email: "johndoe@asdf.com",
        phone: 123456789,
        password: "falafala",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steven Kolkma",
        email: "skolkma@gmail.com",
        phone: 636256960,
        password: "1234567890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hulk Hogan",
        email: "hulkhogan@wwe.com",
        phone: 81752384,
        password: "summerslam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elon Musk",
        email: "ceo@tesla.com",
        phone: 791758824,
        password: "secretpassword",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("countries", null, {});
  },
};
