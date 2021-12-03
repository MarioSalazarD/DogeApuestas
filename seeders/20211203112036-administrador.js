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
     * 
    */
     await queryInterface.bulkInsert('Administradors',[
      {
        id:1,
        correo: "mario@mail.com",
        contrasena: "contrasena",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        correo: "pipo@mail.com",
        contrasena: "contrasena",
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
