const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Booking = require('./Booking');

const SessionConfirmation = sequelize.define('SessionConfirmation', {
  session_confirmation_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Booking, key: 'booking_id' }
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Booking.hasOne(SessionConfirmation, { foreignKey: 'booking_id' });
SessionConfirmation.belongsTo(Booking, { foreignKey: 'booking_id' });

module.exports = SessionConfirmation;
