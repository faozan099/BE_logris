const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("SUCCES connected to MongoDB");
  } catch (error) {
    console.log("🚀 ~ file: db.js:7 ~ connectDB ~ error:", error);
    throw error;
  }
}

module.exports = connectDB;
