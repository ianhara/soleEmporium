const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema =  new Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    images: { 
      type: [String], 
      required: true
    },
    description: { 
      type: String, 
      require: true 
    },
    price: { 
      type: Number, 
      required: true 
    },
    size:{
      type: [Number], 
      required: true,
    }, 
    stock: {
      type: Number,
      required: true,
    }
  },
);


const Product = mongoose.model("Product", productSchema);

module.exports = {Product, productSchema};