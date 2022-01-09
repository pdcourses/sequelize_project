'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.associate = function (models) {
        User.hasMany(models.Task, {
          foreignKey: {
            field: 'userId',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
          as: 'tasks',
        });
      };
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      login: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'passwordHash',
        set(val) {
          this.setDataValue('password', bcrypt.hashSync(val, 10));
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
