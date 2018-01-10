const winston = require('winston');
const moment = require('moment-timezone');

const LOG_LEVEL = {
  error: 'error',
  silly: 'silly',
  debug: 'debug',
  warn: 'warn',
  warning: 'warn',
  info: 'info',
  verbose: 'verbose',
}[process.env.LOG_LEVEL] || -1;

module.exports = new winston.Logger({
  transports: [new winston.transports.Console({
    level: LOG_LEVEL,
    formatter(options) {
      return JSON.stringify({
        at: moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS Z'),
        level: options.level,
        message: options.message,
        meta: options.meta,
      });
    },
  })],
});
