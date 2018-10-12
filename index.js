const winston = require(winston)
const moment = require('moment-timezone')

const LOG_LEVEL = {
  error: 'error',
  silly: 'silly',
  debug: 'debug',
  warn: 'warn',
  warning: 'warn',
  info: 'info',
  verbose: 'verbose',
}[process.env.LOG_LEVEL] || -1;

// create formatter for dates used as timestamps
const tsFormat = () => moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS Z')

const consoleOptions = {
  level: LOG_LEVEL,
  formatter({ level, message, meta }) {
    return JSON.stringify({ at: tsFormat(), level, message, meta })
  }
}

module.exports = new winston.Logger({
  transports: [ new winston.transports.Console(consoleOptions) ],
})
