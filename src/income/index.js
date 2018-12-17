const Income = require('./income.service');
const router = require('express').Router();

const auth = require('../../config/auth');
const authenticate = auth.auth;

router.get('/:id', authenticate, Income.findOne);

router.get('/', authenticate, Income.findAll);

router.post('/', authenticate, Income.create);

router.put('/', authenticate, Income.update);

router.delete('/:id', authenticate, Income.deleteById);

module.exports = router;