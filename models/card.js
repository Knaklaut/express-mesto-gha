const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'В названии не должно быть менее 2 символов'],
    maxlength: [30, 'В названии не должно быть более 30 символов'],
    required: [true, 'Введите название'],
  },
  link: {
    type: String,
    required: [true, 'Введите URL'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user', default: [] }],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
