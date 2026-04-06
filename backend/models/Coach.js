const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');

const Coach = sequelize.define('Coach', {
  coach_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id'
    }
  },
  bio: {
    type: DataTypes.TEXT,
  },
  experience_years: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  bank_name: {
    type: DataTypes.STRING,
  },
  account_number: {
    type: DataTypes.STRING,
  },
  account_holder_name: {
    type: DataTypes.STRING,
  },
  coach_status: {
    type: DataTypes.ENUM('active', 'inactive', 'pending'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

User.hasOne(Coach, { foreignKey: 'user_id' });
Coach.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Coach;
