const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
  const {
    body: { email, password },
  } = req;

  try {
    const checkUser = await User.findOne({
      where: email,
    });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const userForAnswer = user.get();
        delete userForAnswer.password;
        req.user = userForAnswer;
        return next();
      }
    }
    next(new Error());
  } catch (e) {
    next(e);
  }
};
