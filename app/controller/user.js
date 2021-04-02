const service = require('../service');
const { jwtSign } = require('../utils/jwt');

const { ERROR, config: { cookie } } = KT;

async function signup(ctx) {
  const mixinParams = ctx.getMixinParams();
  const rules = {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
      min: 6,
    },
  };
  const error = ctx.parameter.validate(rules, mixinParams);
  if (error) return ctx.error(ERROR.ILLEGAL_PARAMETER, error);

  const res = await service.user.create(mixinParams);
  return ctx.ok(res);
}

async function signin(ctx) {
  const mixinParams = ctx.getMixinParams();
  const rules = {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
      min: 6,
    },
  };
  const error = ctx.parameter.validate(rules, mixinParams);
  if (error) return ctx.error(ERROR.ILLEGAL_PARAMETER, error);

  const userRes = await service.user.signin(mixinParams);
  const token = jwtSign({
    id: userRes.id,
  }, cookie.key, cookie.maxage);

  ctx.cookies.set('token', token, {
    maxAge: cookie.maxage,
  });
  return ctx.ok({
    token,
  });
}

async function info(ctx) {
  const userRes = await service.user.info(ctx.user);
  if (!userRes) return ctx.error(ERROR.FAILED);
  return ctx.ok(userRes);
}

module.exports = {
  signup,
  signin,
  info,
};
