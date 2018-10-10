const Expense = require('./expense.service');
const router = require('express').Router();

router.get('/:id', Expense.findOne);

router.get('/', Expense.findAll);

router.post('/', Expense.create);

router.put('/', Expense.update);

router.delete('/:id', Expense.deleteById);

module.exports = router;