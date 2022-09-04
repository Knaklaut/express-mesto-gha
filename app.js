const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const auth = require('./middlewares/auth');
const errorProcessor = require('./middlewares/errorProcessor');
const cardRouter = require('./routes/cards');
const userRouter = require('./routes/users');
const {
  createUser, login,
} = require('./controllers/users');
const {
  validationAuth, validationUser,
} = require('./middlewares/validations');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signin', validationAuth, login);
app.post('/singup', validationUser, createUser);

app.use(auth);
app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use((req, res) => {
  res.status(404).send({ message: 'Страница не найдена.' });
});
app.use(errors());
app.use(errorProcessor);

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`);
});
