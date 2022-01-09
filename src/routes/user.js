import express from 'express';
import {
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from '../controllers/user';
import userSchema from '../validations';

const userRouter = express.Router();

// дабавить пользователя в базу
userRouter.post('/', userSchema, createUser);

//получить юзера по айди
userRouter.get('/:userId', userSchema, getUserById);

// обновить юзера по айди
userRouter.patch('/:userId', userSchema, updateUserById);

//удалить юзера по айди
userRouter.delete('/:userId', userSchema, deleteUserById);

export default userRouter;
