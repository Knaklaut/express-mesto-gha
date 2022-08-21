const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use((req, res, next) => {
  req.user = {
    _id: '62f8eeb270e641ee140baadf',
  };
  next();
});

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
