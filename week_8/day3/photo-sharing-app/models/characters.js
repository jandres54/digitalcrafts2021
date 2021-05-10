'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  characters.init({
    name: DataTypes.STRING,
    show: DataTypes.STRING,
    birthday: DataTypes.DATE,
    alias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'characters',
  });
  return characters;
};