const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB, sequelize } = require('./config/db');

// Import SEMUA Model untuk sinkronisasi Database
const User = require('./models/User');
const Coach = require('./models/Coach');
const Sport = require('./models/Sport');
const CoachSport = require('./models/CoachSport');
const CoachCertificate = require('./models/CoachCertificate');
const CoachMedia = require('./models/CoachMedia');
const CoachAvailability = require('./models/CoachAvailability');
const Booking = require('./models/Booking');
const UserPayment = require('./models/UserPayment');
const CoachRegistrationPayment = require('./models/CoachRegistrationPayment');
const SessionConfirmation = require('./models/SessionConfirmation');
const SessionReport = require('./models/SessionReport');
const Review = require('./models/Review');
const CoachPayout = require('./models/CoachPayout');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Main Route
app.get('/', (req, res) => {
  res.send('Trainexa Full ERD System is Running!');
});

// Database Connection and Sync
connectDB();
sequelize.sync({ force: true }) 
  .then(() => console.log('✅ DATABASE RESET: All 14 tables are recreated correctly!'))
  .catch(err => console.error('❌ DATABASE ERROR:', err));

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
