const jwt = require('jsonwebtoken');

const oneDay = 24 * 60 * 60 * 1000;

/**
 * 生成jwt
 * @param {json} data 生成token的json
 * @param {string} salt 加密字符
 * @param {*} expiresIn default:7*24*60*60*1000  过期时间
 */
function jwtSign(data, salt, expiresIn = 7 * oneDay) {
  const token = jwt.sign(data, salt, {
    expiresIn,
  });
  return token;
}

/**
* 解析jwt
* @param {string} token jwt
* @param {string} salt 加密字符
*/
async function jwtVerify(token, salt) {
  return new Promise((resolve) => {
    jwt.verify(token, salt, (err, decoded) => {
      if (err) {
        resolve(null);
      }
      resolve(decoded);
    });
  });
}

module.exports = {
  jwtSign,
  jwtVerify,
};
