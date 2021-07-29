const service = require('../service');
const { RULES } = require('../utils/parameterRules');
const { jwtSign } = require('../utils/jwt');

const { ERROR, config: { cookie } } = KT;

async function signUp(ctx) {
  const mixinParams = ctx.getMixinParams();
  const rules = {
    username: RULES.username,
    password: RULES.password,
  };
  const error = ctx.parameter.validate(rules, mixinParams);
  if (error) return ctx.error(ERROR.ILLEGAL_PARAMETER, error);

  const res = await service.user.create(mixinParams);
  return ctx.ok(res);
}

async function signIn(ctx) {
  const mixinParams = ctx.getMixinParams();
  const rules = {
    username: RULES.username,
    password: RULES.password,
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

async function signOut(ctx) {
  ctx.cookies.set('token', '');
  return ctx.ok();
}

module.exports = {
  signUp,
  signIn,
  signOut,
};
