import { routerFactory } from './utils';

import TransactionClass from '../domains/TransactionClass';
import Family from '../domains/Family';

module.exports = routerFactory(TransactionClass, Family);
