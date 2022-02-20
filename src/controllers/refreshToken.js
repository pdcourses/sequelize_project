const { refreshToken } = require('./../db/models');

export async function createRefreshToken(req, res, next) {
  try {
    //const newToken = await refreshToken.create(req.body);
    const newToken = await refreshToken.create({
      refreshToken: req.tokenPair.refreshToken,
      userId: req.user.id,
    });
    if (refreshToken) {
      return res.send({
        tokenPair: req.tokenPair,
        user: req.user,
      });
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}
