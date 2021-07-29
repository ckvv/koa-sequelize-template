const Router = require('@koa/router');
const { ROLE } = require('../constant');
const sign = require('../controller/sign');
const user = require('../controller/user');
const authorize = require('../middleware/authorize');

const ADMIN = [ROLE.ADMIN];
const ALL = [ROLE.USER, ROLE.ADMIN];
function moundRouter(app) {
  const router = new Router({
    prefix: '/api',
  });

  router.get('/', (ctx) => ctx.ok());
  router.post('/sign/signup', sign.signUp);
  router.put('/sign/signin', sign.signIn);
  router.get('/sign/signout', authorize(), sign.signOut);
  router.get('/user/info', authorize(ALL), user.info);
  router.get('/user/list', authorize(ADMIN), user.list);
  app.use(router.routes(), router.allowedMethods());
}

module.exports = moundRouter;
