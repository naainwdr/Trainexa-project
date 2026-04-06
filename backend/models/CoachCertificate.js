const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const CoachSport = require('./CoachSport');

const CoachCertificate = sequelize.define('CoachCertificate', {
  coach_certificate_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  coach_sport_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: CoachSport, key: 'coach_sport_id' }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  certificate_file: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

CoachSport.hasMany(CoachCertificate, { foreignKey: 'coach_sport_id' });
CoachCertificate.belongsTo(CoachSport, { foreignKey: 'coach_sport_id' });

module.exports = CoachCertificate;
