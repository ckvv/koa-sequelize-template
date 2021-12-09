const CustomError = require('../utils/customError');
const { logger } = require('../utils/log4js');

/**
 *打印请求日志处理异常
 */
const reslogger = () => async (ctx, next) => {
  const start = Date.now();

  try {
    await next();
  } catch (error) {
    if (error instanceof CustomError) {
      return ctx.error(error, error.message);
    }

    logger.error(error);
    return ctx.error();
  } finally {
    logger.info(`${ctx.method} ${ctx.url} - ${Date.now() - start}ms`);
  }
};

module.exports = reslogger;
