//CRUD for user

import { User } from './../db/models';

//id??? req.params.userId

export async function createUser(req, res, next) {
  try {
    const newUser = await User.create(req.body);
    if (newUser) {
      return res.status(201).send(newUser);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function getUserById(req, res) {
  try {
    const foundUser = await User.findByPk(req.params.userId, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (foundUser) {
      return res.status(201).send(foundUser);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function deleteUserById(req, res) {
  try {
    const foundUser = await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    if (foundUser) {
      return res.status(201).send(foundUser);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function updateUserById(req, res) {
  try {
    const [updRowsCount, updRows] = await User.update(req.body, {
      where: {
        id: req.params.userId,
      },
      returning: true,
    });
    if (updRowsCount) {
      const data = updRows.get();
      delete data.password;
      return res.status(201).send(data);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}
