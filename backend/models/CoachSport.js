const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Coach = require('./Coach');
const Sport = require('./Sport');

const CoachSport = sequelize.define('CoachSport', {
  coach_sport_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  coach_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Coach, key: 'coach_id' }
  },
  sport_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Sport, key: 'sport_id' }
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Coach.belongsToMany(Sport, { through: CoachSport, foreignKey: 'coach_id' });
Sport.belongsToMany(Coach, { through: CoachSport, foreignKey: 'sport_id' });

module.exports = CoachSport;
