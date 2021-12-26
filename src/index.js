/*CRUD*/
/*https://sequelize.org/master/class/lib/model.js~Model.html*/
import { User } from './db/models';
import bcrypt from 'bcrypt';
/*
Model.*
C - createUser      - Model.create()
R - getUserById     - findAll, findByPk, findOne
U - updateUser      - update
D - deleteUser      - remove, destroy
*/

/*
const createPasswordHash = async (password) => {
  try {
    return bcrypt.hashSync(password, 10);
  } catch (e) {
    throw e;
  }
};

const createUser = async (data) => {
  try {
    data.passwordHash = await createPasswordHash(data.password);
    const createdUser = await User.create(data);
    if (createdUser) return createdUser.get();
    new Error();
  } catch (e) {
    throw e;
  }
};

createUser({
  firstName: 'Somename',
  lastName: 'Somesurname',
  email: 'somename@mail.com',
  login: 'somename',
  password: 'qwerty',
})
  .then(console.log)
  .catch(console.err);

*/

/*
const getUserById = async (id) => {
  try {
    return (await User.findByPk(id)).get();
  } catch (e) {
    throw e;
  }
};

getUserById(27).then(console.log).catch(console.error);
*/

/*
const updateUser = async (data, params) => {
  try {
    await User.update(data, {
      where: params,
    });
  } catch (e) {
    throw e;
  }
};
updateUser({ lastName: 'Test' }, { id: 27 })
  .then(console.log)
  .catch(console.err);
*/

/*
const deleteUser = async (params) => {
  try {
    await User.destroy({
      where: params,
    });
  } catch (e) {
    throw e;
  }
};

deleteUser({ id: 27 });
*/
