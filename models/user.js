const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'В имени не должно быть менее 30 символов'],
    maxlength: [30, 'В имени не должно быть более 30 символов'],
    required: [true, 'Введите имя'],
  },
  about: {
    type: String,
    minlength: [2, 'В описании не должно быть менее 2 символов'],
    maxlength: [30, 'В описании не должно быть более 30 символов'],
    required: [true, 'Добавьте описание'],
  },
  avatar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
