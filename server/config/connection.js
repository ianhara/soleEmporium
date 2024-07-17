const mongoose = require('mongoose');
const { configDotenv } = require('dotenv');
configDotenv()

console.log("ENV VARIABLE", process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;
