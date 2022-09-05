const { checkToken } = require('../utils/jwt');
const AuthError = require('../errors/AuthError');

const authorization = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    next(new AuthError('Необходима авторизация.'));
  }

  let payload;
  const token = auth.replace('Bearer ', '');

  try {
    payload = checkToken(token);
  } catch (err) {
    next(new AuthError('Необходима авторизация.'));
  }

  req.user = payload;
  next();
};

module.exports = authorization;
