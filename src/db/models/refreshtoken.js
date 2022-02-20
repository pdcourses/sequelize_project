'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    static associate(models) {
      RefreshToken.belongsTo(models.User, {
        foreignKey: {
          field: 'userId',
        },
      });
    }
  }
  RefreshToken.init(
    {
      userId: DataTypes.INTEGER,
      refreshToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'RefreshToken',
    }
  );
  return RefreshToken;
};
