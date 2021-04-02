const requireDirectory = require('require-directory');
const Router = require('@koa/router');

function moundRouter(app) {
  // 自动注册路由
  requireDirectory(module, './', {
    visit: (route) => {
      if (route instanceof Router) {
        app.use(route.routes(), route.allowedMethods());
      }
    },
  });
}
module.exports = moundRouter;
