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
     await queryInterface.bulkInsert('Juegos',[
      {
        id:1,
        nombre: "Copa Nacional",
        categoriaJuegoId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        nombre: "Liga1",
        categoriaJuegoId:2,
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
