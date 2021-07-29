const {
  jwtVerify,
} = require('../utils/jwt');
const userModel = require('../model/user');

const { ERROR, config } = KT;
/**
 *验证用户权限
 */
const authorize = (roles) => async (ctx, next) => {
  // 验证用户权限
  const token = ctx.headers.token || ctx.cookies.get('token') || ctx.getMixinParams().token;

  if (!token) {
    return ctx.error(ERROR.NO_PERMISSION);
  }

  const user = await jwtVerify(token, config.cookie.key);
  if (!user || !user.id) {
    return ctx.error(ERROR.NO_PERMISSION);
  }

  const userRes = await userModel.findOne({
    where: {
      id: user.id,
    },
  });

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
