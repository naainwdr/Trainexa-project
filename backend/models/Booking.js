const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const CoachAvailability = require('./CoachAvailability');

const Booking = sequelize.define('Booking', {
  booking_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: User, key: 'user_id' }
  },
  coach_availability_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: CoachAvailability, key: 'coach_availability_id' }
  },
  booking_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  booking_status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

User.hasMany(Booking, { foreignKey: 'user_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });

CoachAvailability.hasOne(Booking, { foreignKey: 'coach_availability_id' });
Booking.belongsTo(CoachAvailability, { foreignKey: 'coach_availability_id' });

module.exports = Booking;
