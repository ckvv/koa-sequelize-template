module.exports = {
  name: 'koa-template',
  port: 9999,
  cookie: {
    key: 'mjhgfcd@#$%^e456789o',
    maxage: 1000 * 60 * 60 * 24 * 7,
  },
  db: {
    host: '127.0.0.1',
    user: 'chenkai',
    password: 'chenkai00',
    database: 'test',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
  bodyParser: {
    limit: 100 * 1048576,
  },
};
