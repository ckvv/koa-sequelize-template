/* eslint-env jest */

const request = require('supertest');
const server = require('../index');
const ERROR = require('../app/constant/ERROR');

const user = {
  username: 'chenkai',
  password: '123456',
};
beforeAll(async () => {
  // do something before anything else runs
});
// close the server after each test
afterAll(() => {
  server.close();
});
describe('server服务器状态', () => {
  test('GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(0);
  });
});

describe('get /user/info', () => {
  test('get /user/info 没有权限', async () => {
    const response = await request(server).get('/user/info');
    expect(response.body.code).toEqual(ERROR.NO_PERMISSION.code);
  });
});

describe('post /user/signup', () => {
  test('get /user/signup 注册参数错误', async () => {
    const response = await request(server).post('/user/signup').send({
      username: user.username,
    });
    expect(response.body.code).toEqual(ERROR.ILLEGAL_PARAMETER.code);
  });

  test('post /user/signup 注册参数正常', async () => {
    const signup = await request(server).post('/user/signup').send({
      username: user.username,
      password: user.password,
    });
    expect(signup.body.code).toEqual(0);

    const signup1 = await request(server).post('/user/signup').send({
      username: user.username,
      password: user.password,
    });
    expect(signup1.body.code).toEqual(ERROR.ALREADY_EXIT.code);

    const signin = await request(server).post('/user/signin').send({
      password: user.password,
    });
    expect(signin.body.code).toEqual(ERROR.ILLEGAL_PARAMETER.code);
    const signin1 = await request(server).post('/user/signin').send({
      username: user.username,
      password: user.password,
    });
    expect(signin1.body.code).toEqual(0);

    const info = await request(server).get(`/user/info?token=${signin1.body.data.token}`).send({
      username: user.username,
      password: user.password,
    });
    expect(info.body.code).toEqual(0);
    const info1 = await request(server).get('/user/info?token=1234567890').send({
      username: user.username,
      password: user.password,
    });
    expect(info1.body.code).toEqual(ERROR.NO_PERMISSION.code);
  });
});
