const winston = require('winston');

const addLog = (msg) => {
    const logger = winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.File({ filename: 'app.log' }),
        ],
    });

    logger.info(msg);

}

module.exports = {addLog:addLog}