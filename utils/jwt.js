const jwt = require('jsonwebtoken');

const SECRET_KEY = 'some-secret-key';

const generateToken = (payload, lifetime) => jwt.sign(payload, SECRET_KEY, { expiresIn: lifetime });

module.exports = generateToken;
