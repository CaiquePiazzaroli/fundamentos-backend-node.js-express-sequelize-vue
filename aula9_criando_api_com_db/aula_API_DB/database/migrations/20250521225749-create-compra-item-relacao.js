'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CompraItemRelacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Item",
          key: "id",
          },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      compraId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Compra",
          key: "id",
          },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CompraItemRelacao');
  }
};