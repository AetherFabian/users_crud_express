/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable('coverages', {
    id: {
      type: Sequelize.TINYINT(3).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    key: {
      type: Sequelize.TINYINT(2).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    name: {
      type: Sequelize.STRING({
        length: 30,
      }),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING({
        length: 30,
      }),
    },
    deleted_by: {
      type: Sequelize.BIGINT.UNSIGNED,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
  }),

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('coverages'),
};
