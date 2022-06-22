import Sequelize from 'sequelize';
import database from '../config/database';

const Recurrence = database.define('recurrence', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  repeatUntil: {
    type: Sequelize.DATE,
  },
  repeatRate: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Recurrence;
