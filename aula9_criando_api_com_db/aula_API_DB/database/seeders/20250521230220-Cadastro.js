'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cadastro",
      [
        {
          rua: "Av. Principal",
          numero: 401,
          cidade: "Bragança Paulista",
          usuarioId: 1,
        },
        {
          rua: "Rua nova",
          numero: 1910,
          cidade: "Bragança Paulista",
          usuarioId: 2,
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cadastro", null, {});
  },

};
