require('dotenv').config({
  path: '../config/.env',
});
const config = require('../config');
const {
  logger,
} = require('../app/utils/log4js');
const ERROR = require('../app/constant/ERROR');

const KT = {
  config,
  logger,
  ERROR,
};
global.KT = KT;

const models = require('../app/model');

const { user } = models;

(async () => {
  await user.sync({
    force: true,
    match: /_test$/,
  });
  process.exit();
})();
