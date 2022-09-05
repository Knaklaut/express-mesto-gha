const router = require('express').Router();
const { createUser, login } = require('../controllers/users');

router.post('/', createUser);
router.post('/', login);

module.exports = router;
