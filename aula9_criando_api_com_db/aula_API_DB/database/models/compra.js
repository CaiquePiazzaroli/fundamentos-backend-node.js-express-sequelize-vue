'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Compra.belongsTo(models.Usuario);
      //Não é necessário pois já está especificado em CompraItemRelacao
      //Compra.belongsToMany(models.Item, {through:models.CompraItemRelacao})
    }
  }
  Compra.init({
    dataCompra: DataTypes.DATE,
    total: DataTypes.FLOAT,
    usuarioId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Compra',
    freezeTableName: true,
    timestamps: false
  });
  return Compra;
};