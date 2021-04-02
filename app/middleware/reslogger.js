const CustomError = require('../utils/customError');

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

    KT.logger.error(error);
    return ctx.error();
  } finally {
    KT.logger.info(`${ctx.method} ${ctx.url} - ${Date.now() - start}ms`);
  }
};

module.exports = reslogger;
