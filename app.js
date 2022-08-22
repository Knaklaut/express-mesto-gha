const express = require('express');
const mongoose = require('mongoose');
const cardRouter = require('./routes/cards');
const userRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '62f8eeb270e641ee140baadf',
  };
  next();
});

app.use('/cards', cardRouter);
app.use('/users', userRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Страница не найдена.' });
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`);
});
