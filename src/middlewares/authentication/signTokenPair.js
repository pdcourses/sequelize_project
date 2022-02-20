const { sign } = require('crypto');
const jwt = require('jsonwebtoken');
const TOKEN_KEY = require('../../constans');
const util = require('util');

const sign = util.promisify(jwt.sign);

module.exports = async (req, res, next) => {
  try {
    const { user } = req;
    const tokenPair = {};
    tokenPair.accessToken = await sign(
      {
        userId: user.id,
        email: user.email,
      },
      TOKEN_KEY,
      {
        expiresIn: '0.1h',
      }
    );
    tokenPair.refreshToken = await sign({}, TOKEN_KEY, {
      expiresIn: '30d',
    });
    req.tokenPair = tokenPair;
    next();
  } catch (e) {
    next(e);
  }
};
