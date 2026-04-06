const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Coach = require('./Coach');

const CoachRegistrationPayment = sequelize.define('CoachRegistrationPayment', {
  coach_registration_payment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  coach_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Coach, key: 'coach_id' }
  },
  shirt_vest: {
    type: DataTypes.STRING, // e.g. 'M', 'L', 'XL'
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.STRING,
  },
  payment_date: {
    type: DataTypes.DATE,
  },
  payment_proof: {
    type: DataTypes.STRING,
  },
  payment_status: {
    type: DataTypes.ENUM('pending', 'verified', 'failed'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Coach.hasOne(CoachRegistrationPayment, { foreignKey: 'coach_id' });
CoachRegistrationPayment.belongsTo(Coach, { foreignKey: 'coach_id' });

module.exports = CoachRegistrationPayment;
