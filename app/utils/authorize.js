const {
  jwtVerify,
} = require('./jwt');
const userModel = require('../model/user');

async function verifyToken(token, key) {
  if (!token) return null;
  const user = await jwtVerify(token, key);
  if (!user || !user.id) return null;
  const userRes = await userModel.findOne({
    where: {
      id: user.id,
    },
  });
  if (!userRes) return null;

  return userRes;
}

module.exports = {
  verifyToken,
};
