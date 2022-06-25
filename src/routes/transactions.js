import { routerFactory } from './utils';
import Transaction from '../domains/Transaction';
import TransactionClass from '../domains/TransactionClass';
import User from '../domains/User';

module.exports = routerFactory(Transaction, [TransactionClass, User]);
