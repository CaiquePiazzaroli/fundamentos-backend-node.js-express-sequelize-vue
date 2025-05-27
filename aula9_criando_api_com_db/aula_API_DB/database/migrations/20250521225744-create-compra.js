'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Compra', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataCompra: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.FLOAT
      },
      usuarioId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Usuario",
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Compra');
  }
};