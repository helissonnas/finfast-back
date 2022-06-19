import Sequelize from 'sequelize';
import database from '../config/database';
import Family from './Family';
import TransactionClass from './TransactionClass';

const TransactionSubClass = database.define('transaction_subclass', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tags: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

TransactionSubClass.belogsTo(Family);
TransactionSubClass.belogsTo(TransactionClass, { foreignKey: 'class_id' });

module.exports = TransactionSubClass;
