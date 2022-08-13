import Sequelize from 'sequelize';
import database from '../config/database';
import User from './User';
import Recurrence from './Recurrence';
import TransactionClass from './TransactionClass';

const Transaction = database.define('transaction', {
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

Transaction.belongsTo(User);
Transaction.belongsTo(TransactionClass, { foreignKey: 'class_id' });

module.exports = Transaction;
