import express from 'express';
import userRouter from './user';
import refreshTokenRouter from './refreshToken';

const router = express.Router();
router.use('/user', userRouter);
router.use('/sign_in', refreshTokenRouter);

export default userRouter;
