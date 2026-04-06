const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Booking = require('./Booking');

const SessionReport = sequelize.define('SessionReport', {
  session_report_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Booking, key: 'booking_id' }
  },
  summary: {
    type: DataTypes.TEXT,
  },
  media_file: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Booking.hasOne(SessionReport, { foreignKey: 'booking_id' });
SessionReport.belongsTo(Booking, { foreignKey: 'booking_id' });

module.exports = SessionReport;
