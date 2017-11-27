import log4js from 'log4js'

log4js.configure({
    appenders: {
      console: { type: 'console' },
      connectfile: { type: 'file', filename: 'logs/connect.log' },
      logfile: { type: 'file', filename: 'logs/app.log' }
    },
    categories: {
      default: { appenders: ['console'], level: 'debug' },
      connectlog: { appenders: ['connectfile'], level: 'error' },
      applog: { appenders: ['console','logfile'], level: 'debug' }
    }
})

let levels = {
    'trace': log4js.levels.TRACE,
    'debug': log4js.levels.DEBUG,
    'info': log4js.levels.INFO,
    'warn': log4js.levels.WARN,
    'error': log4js.levels.ERROR,
    'fatal': log4js.levels.FATAL
}

let logger = function (name, level) {
    let _logger = log4js.getLogger(name)
    _logger.level = levels[level] || levels['debug']
    return _logger
};

let use = function (app, level) {
    app.use(log4js.connectLogger(log4js.getLogger('connectlog'), {
        level: 'auto',
        format: ':method :url :status'
    }))
}

export { logger, use }