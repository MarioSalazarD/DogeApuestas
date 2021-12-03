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
     await queryInterface.bulkInsert('Clientes',[
      {
        id:1,
        nombres: "Mario",
        apellidos: "Salazar",
        dni: 72632199,
        imagen_url: "1",
        correo: "mario@mail.com",
        contrasena: "12345678",
        telefono: 123456789,
        direccion: "Calle 123",
        pep: true,
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        nombres: "Marco",
        apellidos: "Rojas",
        dni: 72633547,
        imagen_url: "3",
        correo: "marco@mail.com",
        contrasena: "123456987",
        telefono: 987456321,
        direccion: "Calle 321",
        pep: true,
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        nombres: "Pepe",
        apellidos: "Flores",
        dni: 72631624,
        imagen_url: "4",
        correo: "Pepe@mail.com",
        contrasena: "654123987",
        telefono: 987632541,
        direccion: "Calle 213",
        pep: true,
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        nombres: "Pipo",
        apellidos: "Mendoza",
        dni: 72632192,
        imagen_url: "1",
        correo: "Pipo@mail.com",
        contrasena: "456987123",
        telefono: 147852369,
        direccion: "Calle 231",
        pep: true,
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:5,
        nombres: "Isabel",
        apellidos: "Valencia",
        dni: 72632142,
        imagen_url: "1",
        correo: "Isa@mail.com",
        contrasena: "12345678",
        telefono: 123456789,
        direccion: "Calle 122",
        pep: true,
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
