import { routerFactory } from './utils';

import TransactionSubClass from '../domains/TransactionSubClass';
import TransactionClass from '../domains/TransactionClass';
import Family from '../domains/Family';

module.exports = routerFactory(TransactionSubClass, [TransactionClass, Family]);
