const user = require('./user');

// 自动加载，会无法静态分析出依赖，导致不能校验并智能提示
module.exports = {
  user,
};
