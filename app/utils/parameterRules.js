const { ROLE, REG_EXP } = require('../constant');

const RULES = {
  username: {
    type: 'string',
    format: REG_EXP.username,
  },
  password: {
    type: 'string',
    format: REG_EXP.password,
  },
  role: {
    type: 'enum',
    value: Object.keys(ROLE),
  },
};
const ruleUtil = {
  optionalRules(rules = {}) {
    const res = {};
    Object.keys(rules).forEach((key) => {
      res[key] = { ...rules[key], required: false };
    });
    return res;
  },
};

module.exports = { RULES, ...ruleUtil };
