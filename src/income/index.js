const Income = require('./income.service');
const router = require('express').Router();

const auth = require('../../config/auth');
const authenticate = auth.auth;

router.get('/:id', Income.findOne);

router.get('/', Income.findAll);

router.post('/', Income.create);

router.put('/', Income.update);

router.delete('/:id', Income.deleteById);

module.exports = router;