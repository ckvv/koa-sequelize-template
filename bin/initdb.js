require('dotenv').config({
  path: '../config/.env',
});
const config = require('../config');

const KT = {
  config,
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
