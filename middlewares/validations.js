const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;

const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

const validationAuth = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validationId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isvalid(value)) return value;
      return helpers.message('Некорректный ID.');
    }),
  }),
});

const validationUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    password: Joi.string().required(),
    email: Joi.string().required().email(),
    avatar: Joi.string().pattern(urlRegExp),
  }),
});

const validationAvatar = celebrate({
  body: {
    avatar: Joi.string().required().pattern(urlRegExp),
  },
});

const validationUserInfo = celebrate({
  body: {
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  },
});

const validationCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(urlRegExp),
  }),
});

module.exports = {
  validationAuth,
  validationId,
  validationUser,
  validationAvatar,
  validationUserInfo,
  validationCard,
};
