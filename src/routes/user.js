import express from 'express';
import {
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from '../controllers/user';

const userRouter = express.Router();

// дабавить пользователя в базу
userRouter.post('/', createUser);

//получить юзера по айди
userRouter.get('/:userId', getUserById);

// обновить юзера по айди
userRouter.patch('/:userId', updateUserById);

//удалить юзера по айди
userRouter.delete('/:userId', deleteUserById);

export default userRouter;
