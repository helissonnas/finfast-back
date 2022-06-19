import Sequelize from 'sequelize';
import database from '../config/database';

const Recurrence = database.define('recurrence', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primatyKey: true,
  },
  type: {
    type: Sequelize.STEING,
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
