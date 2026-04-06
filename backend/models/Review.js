const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Booking = require('./Booking');

const Review = sequelize.define('Review', {
  review_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Booking, key: 'booking_id' }
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
  },
  comment: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Booking.hasOne(Review, { foreignKey: 'booking_id' });
Review.belongsTo(Booking, { foreignKey: 'booking_id' });

module.exports = Review;
