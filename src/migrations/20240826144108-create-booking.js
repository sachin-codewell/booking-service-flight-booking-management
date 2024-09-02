'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      flightId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ["InProcess", "Booked", "Cancelled"],
        allowNull: false,
        defaultValue: "InProcess"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      totalSeat: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};