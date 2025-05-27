'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Não é necessário pois já está especificado em CompraItemRelacao
      //Item.belongsToMany(models.Compra, {through: models.CompraItemRelacao});

    }
  }
  Item.init({
    tipo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Item',
    freezeTableName: true,
    timestamps: false
  });
  return Item;
};