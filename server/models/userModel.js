const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    }
  },
  {
    timestamps: true,
  }
);

// ensures passwords are hashed before saving to user database
userSchema.pre('save', async function(next){
  const user = this;
  // if password is not modified, skip hashing
  if (!user.isModified('password')){
    return next();
  }
  // if password IS modified, hash it
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error){
    next(error);
  }
});
// compares the candidate pass w/hashed pass
// helps authenticate user
userSchema.methods.comparePassword = async function(candidatePassword){
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;