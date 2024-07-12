const { User, Order, Product } = require('../models');
const bcrypt = require('bcrypt');
const { configDotenv } = require('dotenv');
const jwt = require('jsonwebtoken')
const { GraphQLError } = require('graphql');
const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
})
configDotenv()

const resolvers = {
  Query: {
    // WORKS
    // get all products
    products: async (_, __, context) => {

      if(!context.user)
        throw AuthenticationError

      try {
        const products = await Product.find({});
        return products;
      } catch (error) {
        throw new Error('Failed to fetch products!');
      }
    },
    // WORKS
    // get single product
    product: async (_, { productId }, context) => {
      if(!context.user)
        throw AuthenticationError
      try {
        const product = await Product.findById(productId);
        if (!product) {
          throw new Error('Product not found');
        }
        return product;
      } catch (error) {
        throw new Error('Failed to fetch that product!');
      }
    },

    //fetch all orders
    orders: async () => {
      try {
        const orders = await Order.find({})
          .populate('user')
        // .populate('products.productId');
        return orders;
      } catch (error) {
        throw new Error('Failed to fetch orders!');
      }
    },

    //fetch a specific order by ID
    order: async (_, { orderId }) => {
      try {
        const order = await Order.findById(orderId)
          .populate('user')
        // .populate('products.productId');
        if (!order) {
          throw new Error('Order not found!');
        }
        console.log(order);
        return order;
      } catch (error) {
        throw new Error('Failed to fetch order!');
      }
    },
    // WORKS
    // get all users
    users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (error) {
        throw new Error('Failed to fetch users!');
      }
    },
    //WORKS
    // get single user
    user: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error('User not found!');
        }
        return user;
      } catch (error) {
        throw new Error('Failed to fetch user!');
      }
    },
  },

  Mutation: {
    // WORKS!!
    // mutation to create product 
    createProduct: async (_, { input }) => {
      const { name, description, price, size, stock, images } = input;
      try {
        const newProduct = new Product({ name, description, price, size, stock, images });
        await newProduct.save();
        return newProduct;
      } catch (error) {
        console.log(error);
        throw new Error('Failed to create product!');
      }
    },
    //mutation to create a new order
    createOrder: async (_, { userId, products, totalPrice, shippingAddress }) => {
      try {
        const newOrder = new Order({ user: userId, products, totalPrice, shippingAddress });
        await newOrder.save();
        return newOrder;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create order');
      }
    },

    //mutation to update an existing order
    updateOrder: async (_, { orderId, updateInput }) => {
      try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, updateInput, { new: true });
        if (!updatedOrder) {
          throw new Error('Order not found');
        }
        return updatedOrder;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to update order');
      }
    },

    //mutation to delete an order
    deleteOrder: async (_, { orderId }) => {
      try {
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
          throw new Error('Order not found');
        }
        return deletedOrder;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to delete order');
      }
    },

    // login user
    loginUser: async (_, { email, password }) => {

      let foundUser = await User.findOne({ email: email })
      if (!foundUser) {
        throw new Error("Not found")
      }

      try {
        await bcrypt.compare(foundUser.password, password)
      } catch (error) {
        console.error(error)
      }

      let payload = { email: foundUser.email, _id: foundUser._id }
      return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' })

    },

    // mutation to create a user 
    createUser: async (_, { input }) => {
      const { firstName, lastName, email, password, address } = input;
      try {
        const newUser = new User({ firstName, lastName, email, password, address });
        await newUser.save();
        return newUser;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create user');
      }
    },

    //mutation to update a user
    updateUser: async (_, { userId, updateInput }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateInput, { new: true });
        if (!updatedUser) {
          throw new Error('User not found');
        }
        return updatedUser;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to update user');
      }
    },

    //mutation to delete user
    deleteUser: async (_, { userId }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
          throw new Error('User not found');
        }
        return deletedUser;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to delete user');
      }
    },
  },

};

module.exports = resolvers;
