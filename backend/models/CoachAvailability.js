const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const CoachSport = require('./CoachSport');

const CoachAvailability = sequelize.define('CoachAvailability', {
  coach_availability_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  coach_sport_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: CoachSport, key: 'coach_sport_id' }
  },
  session_type: {
    type: DataTypes.ENUM('private', 'group'),
    defaultValue: 'private',
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  max_capacity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  location: {
    type: DataTypes.TEXT,
  },
  is_booked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

CoachSport.hasMany(CoachAvailability, { foreignKey: 'coach_sport_id' });
CoachAvailability.belongsTo(CoachSport, { foreignKey: 'coach_sport_id' });

module.exports = CoachAvailability;
