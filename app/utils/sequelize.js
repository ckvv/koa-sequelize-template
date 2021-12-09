const { Sequelize } = require('sequelize');
const { logger } = require('./log4js');

const { config: { db } } = KT;

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: db.host,
  port: db.port,
  username: db.user,
  password: db.password,
  database: db.database,
  logging: (msg) => logger.info(msg),
});

module.exports = sequelize;
