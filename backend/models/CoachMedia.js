const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const CoachSport = require('./CoachSport');

const CoachMedia = sequelize.define('CoachMedia', {
  coach_media_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  coach_sport_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: CoachSport, key: 'coach_sport_id' }
  },
  media_file: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

CoachSport.hasMany(CoachMedia, { foreignKey: 'coach_sport_id' });
CoachMedia.belongsTo(CoachSport, { foreignKey: 'coach_sport_id' });

module.exports = CoachMedia;
