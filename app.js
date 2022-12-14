const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const { validationAuth, validationUser } = require('./middlewares/validityCheck');
const auth = require('./middlewares/auth');
const { generalProcessor, notFoundProcessor } = require('./middlewares/errProcessor');
const createUser = require('./routes/newUserRouter');
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
app.use(auth);
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use(notFoundProcessor);
app.use(errors());
app.use(generalProcessor);

app.listen(PORT);
