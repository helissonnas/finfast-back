import { Router } from 'express';

import transactions from './transactions';
import families from './families';
import recurrences from './recurrences';
import transactionClasses from './transactionClasses';
import transactionSubClasses from './transactionSubClasses';
import users from './users';

const router = Router();

router.use('/families', families);

router.use('/recurrences', recurrences);

router.use('/transactions', transactions);

router.use('/transaction-classes', transactionClasses);

router.use('/transaction-sub-classes', transactionSubClasses);

router.use('/users', users);

module.exports = router;
