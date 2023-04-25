const winston = require('winston')

const serverLogger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  defaultMeta: { service: 'webhook-service' },
  transports: [new winston.transports.File({ filename: 'logs/server.log' })]
})

const kafkaLogger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  defaultMeta: { service: 'webhook-service' },
  transports: [new winston.transports.File({ filename: 'logs/kafka.log' })]
})

module.exports = { serverLogger, kafkaLogger }
