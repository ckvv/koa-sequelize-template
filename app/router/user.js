const Router = require('@koa/router');
const user = require('../controller/user');
const authorize = require('../middleware/authorize');

const router = new Router({
  prefix: '/user',
});

router.post('/signup', user.signup);
router.post('/signin', user.signin);
router.get('/info', authorize(), user.info);

module.exports = router;
