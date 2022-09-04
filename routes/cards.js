const router = require('express').Router();
const { validateId, validateCard } = require('../middlewares/validations');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.put('/:id/likes', validateId, likeCard);
router.delete('/:id/likes', validateId, dislikeCard);
router.delete('/:id', validateId, deleteCard);
router.get('/', getCards);
router.post('/', validateCard, createCard);

module.exports = router;
