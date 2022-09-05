const jwt = require('jsonwebtoken');
const AuthError = require('../errors/AuthError');

module.exports = (req, res, next) => {
  const { auth } = req.headers;
  if (!auth || !auth.startsWith('Bearer ')) {
    throw new AuthError('Необходима авторизация.');
  }
  const token = auth.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    throw new AuthError('Необходима авторизация.');
  }
  req.user = payload;
  next();
};
