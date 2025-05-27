'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Compra",
      [
        {
          dataCompra: new Date("12-20-2020"),
          total: 100.0,
          usuarioId: 1,
        },
        {
          dataCompra: new Date("2020-11-10"),
          total: 150.0,
          usuarioId: 2,
        },
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Compra",
      null, {});
  }
};
