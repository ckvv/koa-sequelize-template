const models = require('../model');

const { ERROR } = KT;
class BaseService {
  constructor() {
    this.models = models;
    this.ERROR = ERROR;
  }
}

module.exports = BaseService;
