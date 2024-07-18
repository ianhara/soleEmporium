const mongoose = require('mongoose');
const { configDotenv } = require('dotenv');
configDotenv()

console.log("ENV VARIABLE", process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sneakerStoreDB');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sneakerStoreDB');

module.exports = mongoose.connection;
