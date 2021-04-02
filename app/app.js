const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const reslogger = require('./middleware/reslogger');
const context = require('./extend/context');
const moundRouter = require('./router');

const { config } = KT;

module.exports = {
  start() {
    const app = new Koa();

    Object.assign(app.context, context);

    app.use(reslogger());
    app.use(cors());
    app.use(bodyParser(config.bodyParser));

    moundRouter(app);
    const server = app.listen(config.port);
    KT.logger.info(`${config.name} is running at: http://localhost:${config.port}`);
    return server;
  },
};
