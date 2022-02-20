import express from 'express';
import { createRefreshToken } from './../controllers/refreshToken';
import { signTokenPair, checkUserByEmail } from '../middlewares/authentication';

const refreshTokenRouter = express.Router();

refreshTokenRouter.post(
  '/',
  checkUserByEmail,
  signTokenPair,
  createRefreshToken
);

export default refreshTokenRouter;
