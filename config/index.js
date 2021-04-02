const defaultConfig = require('./config.default');

// eslint-disable-next-line import/no-dynamic-require
const mixinConfig = require(`./config.${process.env.NODE_ENV}`);

module.exports = Object.assign(defaultConfig, mixinConfig);
