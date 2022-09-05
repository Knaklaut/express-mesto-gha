const router = require('express').Router();
const {
  validationId,
  validationUserInfo,
  validationAvatar,
} = require('../middlewares/validityCheck');
const {
  getUsers,
  getUser,
  getCurrentUser,
  updateUserInfo,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', validationId, getUser);
router.get('/me', getCurrentUser);
router.patch('/me', validationUserInfo, updateUserInfo);
router.patch('/me/avatar', validationAvatar, updateUserAvatar);

module.exports = router;
