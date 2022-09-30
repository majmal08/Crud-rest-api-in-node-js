'use strict';
const bcrypt = require('bcrypt');
const password = '12345678'
const hash = bcrypt.hashSync(password, 10);
module.exports = {
  async up (queryInterface, Sequelize) {
   
      Example:
      await queryInterface.bulkInsert('users', [{
        name: 'ajmal',
        email: 'ajmal@gmail.com',
        password: hash,
        imageUrl: 'John Doe',
        phone: '235648',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
