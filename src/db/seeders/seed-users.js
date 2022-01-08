'use strict';
const bcrypt = require('bcrypt');

function generateUsers() {
  const users = [];
  for (let i = 0; i < 20; i++) {
    users.push({
      firstName: 'Name',
      lastName: 'Surname',
      email: `email${i}@mail.com`,
      login: `userlogin${i}`,
      passwordHash: bcrypt.hashSync(`qwerty${i}`, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return users;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', generateUsers(), {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
