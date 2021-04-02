const qs = require('qs');

/**
 * Mixin参数
 * @param {*} ctx
 */
function getMixinParams() {
  return { ...qs.parse(this.query, { comma: true }), ...this.request.body, ...this.params };
}

function ok(data) {
  this.response.body = {
    code: 0,
    data,
  };
}

function error({
  code = 500,
  msg = '服务器错误',
} = {}, tip) {
  this.response.body = {
    code,
    msg: tip || msg,
  };
}

module.exports = {
  getMixinParams,
  ok,
  error,
};
