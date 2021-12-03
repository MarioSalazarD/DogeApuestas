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
     await queryInterface.bulkInsert('CategoriaJuegos',[
      {
        id:1,
        nombre: "FootBall",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        nombre: "Voleyball",
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
