'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('HojApuestas',[
      {
        id:1,
        monto: 30,
        ganancia: 0,
        ganador: "Nadie",
        PartidaId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        monto: 30,
        ganancia: 0,
        PartidaId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};