const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');

const { BIGINT, STRING, INTEGER } = DataTypes;

const user = sequelize.define('user', {
  id: {
    type: BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  salt: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'users',
  underscored: true,
  timestamps: true,
  paranoid: true,
});

module.exports = user;
