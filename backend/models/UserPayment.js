const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Booking = require('./Booking');

const UserPayment = sequelize.define('UserPayment', {
  user_payment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Booking, key: 'booking_id' }
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.STRING, // e.g. 'Bank Transfer', 'E-Wallet'
  },
  payment_date: {
    type: DataTypes.DATE,
  },
  payment_proof: {
    type: DataTypes.STRING, // File path/image URL
  },
  payment_status: {
    type: DataTypes.ENUM('pending', 'verified', 'failed'),
    defaultValue: 'pending',
  },
  confirmation_date: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Booking.hasOne(UserPayment, { foreignKey: 'booking_id' });
UserPayment.belongsTo(Booking, { foreignKey: 'booking_id' });

module.exports = UserPayment;
