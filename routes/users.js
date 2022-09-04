const router = require('express').Router();
const {
  validationId,
  validationAvatar,
  validationUserInfo,
} = require('../middlewares/validations');
const {
  getUsers,
  getUser,
  getCurrentUser,
  updateUserAvatar,
  updateUserInfo,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', validationId, getUser);
router.get('/me', getCurrentUser);
router.patch('/me', validationUserInfo, updateUserInfo);
router.patch('/me/avatar', validationAvatar, updateUserAvatar);

module.exports = router;
