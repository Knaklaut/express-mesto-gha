const jwt = require('jsonwebtoken');

const generateToken = (payload, lifetime) => jwt.sign(payload, 'some-secret-key', { expiresIn: lifetime });

const checkToken = (token) => jwt.verify(token, 'some-secret-key');

module.exports = {
  generateToken,
  checkToken,
};
