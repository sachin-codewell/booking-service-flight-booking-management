'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn(
      'Bookings', // table name
      'price', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      queryInterface.addColumn(
        'Bookings', // table name
        'totalSeat', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      ),

    )

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
