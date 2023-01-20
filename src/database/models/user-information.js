const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    id: {
      type: DataTypes.TINYINT(3).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    key: {
      type: DataTypes.TINYINT(2).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    name: {
      type: DataTypes.STRING({
        length: 15,
      }),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING({
        length: 125,
      }),
    },
    deleted_by: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    updatedAt: false,
    createdAt: false,
    deletedAt: 'deleted_at',
  });

  return User;
};
