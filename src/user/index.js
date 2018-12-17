const User = require('./user.service');
const router = require('express').Router();

const auth = require('../../config/auth');
const authenticate = auth.auth;

router.get('/:id', authenticate, User.findOne);

router.get('/', User.findAll);

router.post('/', User.create);

router.put('/', authenticate, User.update);

router.delete('/:id', User.deleteById);


router.get('/:id/expenses', authenticate, User.findExpensesByUser);
router.get('/:id/incomes', authenticate, User.findIncomesByUser);

module.exports = router;
