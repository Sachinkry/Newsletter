import mongoose from "mongoose";

let cachedDb = null;

async function connectDB() {
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log('Using cached database connection');
    return cachedDb;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // dbName: 'test',  // Explicitly set the database name
    });
    
    console.log('DB Connected');

    cachedDb = db;
    return db;
  } catch (error) {
    console.error('DB Connection Error:', error.message);
    console.error('Error Details:', error);
    throw new Error('Unable to connect to database');
  }
}

module.exports = connectDB;
