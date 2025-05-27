'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Item",
      [
        {
          id: 1,
          tipo: "Informática",
          descricao: "Mouse óptico",
          valor: 39.9,
        },
        {
          id: 2,
          tipo: "Informática",
          descricao: "Teclado",
          valor: 69.9,
        },
        {
          id: 3,
          tipo: "Papelaria",
          descricao: "Caneta combo 100",
          valor: 19.9,
        },
        {
          id: 4,
          tipo: "Estética",
          descricao: "Hidratante",
          valor: 79.9,
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Item", null, {});
  },

};
