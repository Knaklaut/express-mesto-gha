const jwt = require('jsonwebtoken');

const key = 'some-secret-key';
module.exports = (payload, term) => jwt.sign(payload, key, { expiresIn: term });
