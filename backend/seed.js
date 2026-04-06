const { sequelize } = require('./config/db');
const Coach = require('./models/Coach');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced for seeding...');

    await Coach.bulkCreate([
      {
        name: 'Marcus Aurelius',
        specialty: 'High-Intensity Interval Training (HIIT)',
        pricePerSession: 350000,
        rating: 4.9,
        bio: 'Expert in functional training and HIIT with over 10 years of experience.',
        imageUrl: '/coach1.png'
      },
      {
        name: 'Serena Williams',
        specialty: 'Tennis & Mental Coaching',
        pricePerSession: 500000,
        rating: 5.0,
        bio: 'Elite tennis training focused on physical prowess and mental toughness.',
        imageUrl: '/coach2.png'
      },
      {
        name: 'Coach Zen',
        specialty: 'Yoga & Mindfulness',
        pricePerSession: 250000,
        rating: 4.8,
        bio: 'Bringing balance and flexibility to your life through modern yoga techniques.',
        imageUrl: '/coach1.png'
      }
    ]);

    console.log('✅ Success: Sample coaches added to database!');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
