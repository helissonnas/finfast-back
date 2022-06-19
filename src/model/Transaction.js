import Sequelize from 'sequelize';
import database from '../config/database';
import User from './User';
import Recurrence from './Recurrence';
import TransactionClass from './TransactionClass';

const Transaction = database.define('transaction_subclass', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  detail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Transaction.belogsTo(User);
Transaction.belogsTo(TransactionClass, { foreignKey: 'class_id' });
Transaction.hasOne(Recurrence);

module.exports = Transaction;
