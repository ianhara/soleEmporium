const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {orderProductSchema} = require('./orderModel')
// import orders 

const cartSchema = new Schema(
  {
    products: {
        type: [orderProductSchema],
        required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true,
  }
);


const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;