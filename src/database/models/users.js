const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING({
        length: 15,
      }),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    civil_status: {
      type: DataTypes.ENUM({
        values: [
          'single',
          'married',
          'divorced',
          'widowed',
        ],
      }),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING({
        length: 15,
      }),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING({
        length: 10,
      }),
      allowNull: false,
    },
    idiom: {
      type: DataTypes.ENUM({
        values: [
          'es',
          'en',
          'fr',
        ],
      }),
      allowNull: false,
    },
    hobbies: {
      type: DataTypes.ARRAY(DataTypes.STRING({
        length: 30,
      })),
      allowNull: false,
    },
    preferences: {
      type: DataTypes.ARRAY(DataTypes.STRING({
        length: 30,
      })),
      allowNull: false,
    },
    deleted_by: {
      type: DataTypes.BIGINT,
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
