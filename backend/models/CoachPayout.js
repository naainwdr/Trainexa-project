const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Booking = require('./Booking');

const CoachPayout = sequelize.define('CoachPayout', {
  coach_payout_id: {
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
  payout_date: {
    type: DataTypes.DATE,
  },
  payout_status: {
    type: DataTypes.ENUM('pending', 'processed', 'completed'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Booking.hasOne(CoachPayout, { foreignKey: 'booking_id' });
CoachPayout.belongsTo(Booking, { foreignKey: 'booking_id' });

module.exports = CoachPayout;
