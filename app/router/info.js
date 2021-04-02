const Router = require('@koa/router');

const router = new Router();

/**
 * @api {get} / 返回程序运行状态
 * @apiName info
 * @apiGroup server
 *
 * @apiSuccess {String} code  状态码
 */
router.get('/', (ctx) => ctx.ok());

module.exports = router;
