/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING({
        length: 15,
      }),
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    age: {
      type: Sequelize.NUMERIC,
      allowNull: false,
    },
    birth_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    civil_status: {
      type: Sequelize.ENUM({
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
      type: Sequelize.STRING({
        length: 15,
      }),
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    zip_code: {
      type: Sequelize.STRING({
        length: 10,
      }),
      allowNull: false,
    },
    idiom: {
      type: Sequelize.ENUM({
        values: [
          'es',
          'en',
          'fr',
        ],
      }),
      allowNull: false,
    },
    hobbies: {
      type: Sequelize.ARRAY(Sequelize.STRING({
        length: 30,
      })),
      allowNull: false,
    },
    preferences: {
      type: Sequelize.ARRAY(Sequelize.STRING({
        length: 30,
      })),
      allowNull: false,
    },
    deleted_by: {
      type: Sequelize.BIGINT,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('coverages'),
};
