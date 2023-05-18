const winston = require('winston');

const serverLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: {service: 'webhook-service'},
  transports: [new winston.transports.File({filename: 'logs/server.log'}), new winston.transports.Console],
});

const kafkaLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.printf(
      info => `${info.timestamp} ${info.level}: ${info.message}`
    )
  ),
  defaultMeta: {service: 'webhook-service'},

  transports: [new winston.transports.File({filename: 'logs/kafka.log'}), new winston.transports.Console],
});

module.exports = {serverLogger, kafkaLogger};
