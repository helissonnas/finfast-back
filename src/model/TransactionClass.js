import Sequelize from 'sequelize';
import database from '../config/database';
import Family from './Family';

const TransactionClass = database.define('transaction_class', {
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

TransactionClass.belogsTo(Family);

module.exports = TransactionClass;
