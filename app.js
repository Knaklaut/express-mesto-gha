const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const authorization = require('./middlewares/auth');
const notFoundPage = require('./middlewares/notFoundPage');
const errProcessor = require('./middlewares/errProcessor');
const { validationAuth, validationUser } = require('./middlewares/validations');
const createUser = require('./routes/createUser');
const login = require('./routes/login');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/signin', validationAuth, login);
app.use('/signup', validationUser, createUser);

app.use(authorization);
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use(notFoundPage);

app.use(errors());
app.use(errProcessor);

app.listen(PORT);
