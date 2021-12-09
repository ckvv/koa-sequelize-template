require('dotenv').config({
  path: './config/.env',
});
const config = require('./config');

const KT = {
  config,
};
global.KT = KT;

require('./app/app').start();
