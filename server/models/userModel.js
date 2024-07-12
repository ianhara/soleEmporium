const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import orders 

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: {
        street: String,
        city: String,
        state: String,
        zip: String, 
        country: String,
      },
      required: true,
    }
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;