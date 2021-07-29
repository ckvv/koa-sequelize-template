const BaseService = require('./base');
const utils = require('../utils/utils');
const CustomError = require('../utils/customError');

class UserService extends BaseService {
  async create(params) {
    const role = 2;
    const { username, password } = params;
    const findRes = await this.models.user.findOne({
      where: {
        username,
      },
    });
    if (findRes) throw new CustomError(this.ERROR.ALREADY_EXIT, `${username} 已存在`);

    const salt = utils.getRandomStr(6);
    const createRes = await this.models.user.create({
      role,
      username,
      password: utils.getMd5(`${password}${salt}`),
      salt,
    });
    return createRes;
  }

  async signin(params) {
    const { username, password } = params;
    const createRes = await this.models.user.findOne({
      where: {
        username,
      },
    });
    if (!createRes) throw new CustomError(this.ERROR.FAILED);
    if (utils.getMd5(`${password}${createRes.salt}`) !== createRes.password) throw new CustomError(this.ERROR.FAILED);
    return createRes;
  }

  async info(params) {
    const { id } = params;
    const createRes = await this.models.user.findOne({
      attributes: ['id', 'username', 'role'],
      where: {
        id,
      },
    });
    return createRes;
  }

  async list() {
    const allUsers = await this.models.user.findAll();
    return allUsers;
  }
}

module.exports = new UserService();
