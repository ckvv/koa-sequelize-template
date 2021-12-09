const { verifyToken } = require('../utils/authorize');
const { ERROR } = require('../constant');

const { config } = KT;
/**
 *验证用户权限
 */
const authorize = (roles) => async (ctx, next) => {
  const token = ctx.headers.token || ctx.cookies.get('token') || ctx.getMixinParams().token;
  const userRes = await verifyToken(token, config.cookie.key);
  if (!userRes) {
    return ctx.error(ERROR.NO_PERMISSION);
  }

  const { role, id } = userRes;
  if (roles && !roles.includes(role)) {
    return ctx.error(ERROR.NO_PERMISSION);
  }
  ctx.user = {
    id,
    role,
  };

  await next();
};

module.exports = authorize;
