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
     await queryInterface.bulkInsert('Partidas',[
      {
        id:1,
        fecha: "3-12-2021",
        hora:"18:30",
        duracion: "90",
        equipoA:"TeamAF",
        equipoB:"TeamBF",
        factorA: 1.1,
        factorB: 1.3,
        selector: "TeamBF",
        juegoId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        fecha: "5-12-2021",
        hora:"15:00",
        duracion: "90",
        equipoA:"TeamAV",
        equipoB:"TeamBV",
        factorA: 1.2,
        factorB: 1.6,
        selector: "TeamBV",
        juegoId:2,
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
