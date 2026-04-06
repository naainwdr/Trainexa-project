const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Sport = sequelize.define('Sport', {
  sport_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  sport_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = Sport;
