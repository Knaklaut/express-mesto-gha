const jwt = require('jsonwebtoken');

const KEY = 'some-secret-key';

const generateToken = (payload, term) => jwt.sign(payload, KEY, { expiresIn: term });
const checkToken = (token) => jwt.verify(token, KEY);

module.exports = {
  generateToken,
  checkToken,
};
