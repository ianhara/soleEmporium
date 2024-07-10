const mongoose = require("mongoose");
const {productSchema}= require("./productModel")
// const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name:{
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
    cart:[
      productSchema
    ]

  },
  {
    timestamps: true,
  }
);



const User = mongoose.model("User", userSchema);

module.exports = User;