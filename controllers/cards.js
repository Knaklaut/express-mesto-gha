const Cards = require('../models/card');
const {
  CREATED, BAD_REQUEST, NOT_FOUND, SERVER_ERROR,
} = require('../utils/constants');

const getCards = (req, res) => {
  Cards.find({})
    .then((cards) => res.send(cards))
    .catch(() => res.status(SERVER_ERROR).send({ message: 'Ошибка по умолчанию.' }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Cards.create({ name, link, owner })
    .then((card) => res.status(CREATED).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(BAD_REQUEST).send({ message: 'Переданы некорректные данные при создании карточки.' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Ошибка по умолчанию.' });
      }
    });
};

const likeCard = (req, res) => {
  Cards.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const err = new Error();
      err.message = 'NotFound';
      throw err;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Переданы некорректные данные для постановки лайка.' });
      } else if (err.message === 'NotFound') {
        res.status(NOT_FOUND).send({ message: 'Передан несуществующий _id карточки.' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Ошибка по умолчанию.' });
      }
    });
};

const dislikeCard = (req, res) => {
  Cards.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const err = new Error();
      err.message = 'NotFound';
      throw err;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Переданы некорректные данные для постановки лайка.' });
      } else if (err.message === 'NotFound') {
        res.status(NOT_FOUND).send({ message: 'Передан несуществующий _id карточки.' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Ошибка по умолчанию.' });
      }
    });
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;
  Cards.findByIdAndRemove(cardId)
    .orFail(() => {
      const err = new Error();
      err.message = 'NotFound';
      throw err;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Переданы некорректные данные для удаления карточки.' });
      } else if (err.message === 'NotFound') {
        res.status(NOT_FOUND).send({ message: 'Карточка не найдена.' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Ошибка по умолчанию.' });
      }
    });
};

module.exports = {
  getCards,
  createCard,
  likeCard,
  dislikeCard,
  deleteCard,
};
