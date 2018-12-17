const Expense = require('./expense.service');
const router = require('express').Router();


const auth = require('../../config/auth');
const authenticate = auth.auth;

router.get('/:id', Expense.findOne);

router.get('/', Expense.findAll);

router.post('/', Expense.create);

router.put('/', Expense.update);

router.delete('/:id', Expense.deleteById);

module.exports = router;