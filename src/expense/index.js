const Expense = require('./expense.service');
const router = require('express').Router();


const auth = require('../../config/auth');
const authenticate = auth.auth;

router.get('/:id', authenticate, Expense.findOne);

router.get('/', authenticate, Expense.findAll);

router.post('/', authenticate, Expense.create);

router.put('/', authenticate, Expense.update);

router.delete('/:id', authenticate, Expense.deleteById);

module.exports = router;