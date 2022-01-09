'use strict';
const { Model, DataTypes, sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.associate = function (models) {
        Task.belongsTo(models.User, {
          foreignKey: {
            field: 'userId',
          },
          as: 'owner',
        });
      };
    }
  }
  Task.init(
    {
      isDone: DataTypes.BOOLEAN,
      value: DataTypes.STRING,
      deadline: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );
  return Task;
};
