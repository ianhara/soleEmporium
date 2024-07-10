const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, require: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },

  },

  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", productSchema);

module.exports = {Product, productSchema};