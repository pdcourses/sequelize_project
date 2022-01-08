'use strict';
const moment = require('moment');

function genTasks(users) {
  const tasks = [];
  for (let i = 0; i < users.length; i++) {
    const x = Math.round(Math.random() * 10);
    for (let j = 0; j < x; j++) {
      tasks.push({
        userId: users[i].id,
        isDone: Math.random() < 0.5,
        value: `This task ${j + 1} for user ${users[i].id}`,
        deadline: moment('2022-01-08')
          .set('day', Math.round(Math.random() * 10))
          .toDate(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }
  return tasks;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('SELECT id FROM "USERS"')
      .then(([results, metadata]) => {
        return queryInterface.bulkInsert('Tasks', genTask(results), {});
      });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
