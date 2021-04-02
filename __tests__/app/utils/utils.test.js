/* eslint-env jest */

const utils = require('../../../app/utils/utils');

describe(__filename, () => {
  test('getRandomStr', async () => {
    expect(utils.getRandomStr(10).length).toEqual(10);
  });
  test('getSha256', async () => {
    expect(utils.getSha256('test')).toEqual('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08');
  });
});
