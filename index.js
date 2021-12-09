require('dotenv').config({
  path: './config/.env',
});
const config = require('./config');
const { logger } = require('./app/utils/log4js');
const ERROR = require('./app/constant/ERROR');

const KT = {
  config,
  logger,
  ERROR,
};
global.KT = KT;

require('./app/app').start();
