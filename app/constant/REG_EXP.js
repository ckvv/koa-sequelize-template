module.exports = {
  username: /^[0-9a-zA-Z@_\-\u4e00-\u9fa5]{2,20}$/,
  password: /^\S{6,32}$/,
  email: /^[0-9a-zA-Z_.-]{2,20}@[0-9a-zA-Z_-]{1,20}(\.[a-zA-Z0-9_-]{2,8}){1,2}$/,
  date: /^\d{4}-\d{1,2}-\d{1,2}$/,
};
