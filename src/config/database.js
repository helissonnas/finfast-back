import Sequelize from 'sequelize';
import 'dotenv/config';

const opts = {
  define: {
    freezeTableName: true,
    dialect: 'postgres',
    timestamps: false,
    underscored: true,
  },
};

const sequelize = new Sequelize(
  `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  opts
);

module.exports = sequelize;
