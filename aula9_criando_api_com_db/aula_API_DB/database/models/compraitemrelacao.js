'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompraItemRelacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Compra.belongsToMany(models.Item, { through: CompraItemRelacao });
      models.Item.belongsToMany(models.Compra, { through: CompraItemRelacao });
    }
  }
  CompraItemRelacao.init({
    quantidade: DataTypes.INTEGER,
    itemId: DataTypes.UUID,
    compraId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'CompraItemRelacao',
    freezeTableName: true,
    timestamps: false
  });
  return CompraItemRelacao;
};