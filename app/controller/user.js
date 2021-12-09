const service = require('../service');
const { ERROR } = require('../constant');

async function info(ctx) {
  const userRes = await service.user.info(ctx.user);
  if (!userRes) return ctx.error(ERROR.FAILED);
  return ctx.ok(userRes);
}

async function list(ctx) {
  const userRes = await service.user.list(ctx.user);
  if (!userRes) return ctx.error(ERROR.FAILED);
  return ctx.ok(userRes);
}

module.exports = {
  info,
  list,
};
