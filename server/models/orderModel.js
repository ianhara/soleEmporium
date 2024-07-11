const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderProductSchema = new mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number, 
    required: true,
  }
});

const orderSchema = new Schema(
  {
    products: {
      type: [orderProductSchema],
      required: true,
    },
    shippingAddress: {
      type:{
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
      }
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status:{
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;