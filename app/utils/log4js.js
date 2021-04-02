const log4js = require('log4js');

log4js.configure({
  appenders: {
    info: {
      type: 'file',
      filename: './logs/info.log',
      maxLogSize: 1073741824,
      backups: 5,
      compress: true,
    },
    error: {
      type: 'file',
      filename: './logs/error.log',
      maxLogSize: 1073741824,
      backups: 5,
      compress: true,
    },
    out: {
      type: 'stdout',
    },
  },
  categories: {
    default: {
      appenders: ['error', 'info', 'out'],
      level: 'all',
    },
    error: {
      appenders: ['error', 'out'],
      level: 'all',
    },
    info: {
      appenders: ['info', 'out'],
      level: 'all',
    },
  },
});

const logger = {
  error: (...args) => {
    log4js.getLogger('error').error(args);
  },
  info: (...args) => {
    log4js.getLogger('info').info(args);
  },
};

module.exports = {
  logger,
};
