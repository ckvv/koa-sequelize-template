const models = require('../model');
const { ERROR } = require('../constant');

class BaseService {
  constructor() {
    this.models = models;
    this.ERROR = ERROR;
  }
}

module.exports = BaseService;
