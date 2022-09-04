const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    minLength: 2,
    maxLength: 30,
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator: (link) => validator.isURL(link),
      message: 'Невалидная ссылка',
    },
  },
  email: {
    required: true,
    type: String,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Невалидный Email',
    },
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
