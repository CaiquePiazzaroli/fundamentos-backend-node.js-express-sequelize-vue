'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cadastro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cadastro.init({
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    cidade: DataTypes.STRING,
    usuarioId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Cadastro',
    freezeTableName: true,
    timestamps: false
  });
  return Cadastro;
};