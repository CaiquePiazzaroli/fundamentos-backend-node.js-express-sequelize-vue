'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "CompraItemRelacao",
      [
        {
          quantidade: 2,
          itemId: 1,
          compraId: 1,
        },
        {
          quantidade: 3,
          itemId: 2,
          compraId: 1,
        },
        {
          quantidade: 4,
          itemId: 2,
          compraId: 2,
        },
        {
          quantidade: 2,
          itemId: 3,
          compraId: 2,
        },
        {
          quantidade: 2,
          itemId: 4,
          compraId: 2,
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CompraItemRelacao", null, {});
  },

};
