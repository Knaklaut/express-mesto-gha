const AuthError = require('../errors/AuthError');
const { checkToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  const { auth } = req.headers;
  if (!auth) {
    next(new AuthError('Необходима авторизация.'));
  }
  const token = auth.replace('Bearer ', '');
  let payload;
  try {
    payload = checkToken(token);
  } catch (err) {
    next(new AuthError('Необходима авторизация.'));
  }
  req.user = payload;
  next();
};
