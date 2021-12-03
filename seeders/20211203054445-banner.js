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

    await queryInterface.bulkInsert('Banners',[
      {
        id:1,
        nombre: "banner1",
        imagen_url: "/img/banner1.jpg",
        url: "yahoo.com",
        estado: "activado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        nombre: "banner2",
        imagen_url: "/img/banner2.jpg",
        url: "yahoo.com",
        estado: "activado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        nombre: "banner3",
        imagen_url: "/img/banner3.jpg",
        url: "yahoo.com",
        estado: "activado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        nombre: "banner4",
        imagen_url: "/img/banner4.jpg",
        url: "yahoo.com",
        estado: "desactivado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:5,
        nombre: "banner5",
        imagen_url: "/img/banner5.jpg",
        url: "yahoo.com",
        estado: "activado",
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
