const User = require('./user.service');
const router = require('express').Router();

router.get('/:id', User.findOne);

router.get('/', User.findAll);

router.post('/', User.create);

router.put('/', User.update);

router.delete('/:id', User.deleteById);

module.exports = router;
