import logger, { Log4js } from 'log4js';

class LoggerClass {
  logger: Log4js;

  constructor(logger: Log4js) {
    logger.configure({
      appenders: {
        console: { type: 'stdout' },
        app: { type: 'fileSync', filename: 'server.log' },
      },
      categories: {
        default: {
          appenders: ['console'],
          level: 'debug',
        },
        app: {
          appenders: ['app'],
          level: 'warn',
        },
      },
    });
    this.logger = logger;
  }

  error(message: string): void {
    const logger = this.logger.getLogger('app');
    logger.level = 'error';
    logger.error(message);
  }

  warn(message: string): void {
    const logger = this.logger.getLogger('app');
    logger.level = 'warn';
    logger.warn(message);
  }

  debug(message: string): void {
    const logger = this.logger.getLogger();
    logger.level = 'info';
    logger.info(message);
  }

  info(message: string): void {
    const logger = this.logger.getLogger();
    logger.level = 'info';
    logger.info(message);
  }
}

export const Logger = new LoggerClass(logger);
