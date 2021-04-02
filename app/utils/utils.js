const crypto = require('crypto');

function getRandom(max, min = 0, digits = 4) {
  const num = Number((min + Math.random() * (max - min)).toFixed(digits));
  return Number.isNaN(num) ? null : num;
}

function getRandomStr(len) {
  const dictionary = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~:;,./<>?';
  const dictionaryLen = dictionary.length;
  let str = '';
  for (let i = 0; i < len; i += 1) {
    str += dictionary[Math.floor(getRandom(dictionaryLen))];
  }
  return str;
}

/**
 *
 * 获取字符串的md5
 * @param {string} data
 */
function getMd5(data) {
  return crypto.createHash('md5').update(data).digest('hex');
}

/**
 *
 * 获取字符串的sha256
 * @param {string} data
 */
function getSha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

module.exports = {
  getRandom,
  getRandomStr,
  getMd5,
  getSha256,
};
