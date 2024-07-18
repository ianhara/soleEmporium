const { User, Order, Product, Cart } = require('../models');
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
    // get all products
    products: async (_, __, context) => {

      // if(!context.user)
      //   // throw AuthenticationError

      try {
        const products = await Product.find({});
        return products;
      } catch (error) {
        throw new Error('Failed to fetch products!');
      }
    },
    // get single product
    product: async (_, { productId }, context) => {
      console.log("Product ID: " + productId)
      // if(!context.user)
      //   throw AuthenticationError
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
        if (!order) {
          throw new Error('Order not found!');
        }
        console.log(order);
        return order;
      } catch (error) {
        throw new Error('Failed to fetch order!');
      }
    },
    // get all users
    users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (error) {
        throw new Error('Failed to fetch users!');
      }
    },
    // get single user
    // user: async (_, { userId }) => {
    //   try {
    //     const user = await User.findById(userId);
    //     if (!user) {
    //       throw new Error('User not found!');
    //     }
    //     return user;
    //   } catch (error) {
    //     throw new Error('Failed to fetch user!');
    //   }
    // },
    user: async (_, __, { user }) => {
      try {
        const foundUser = await User.findById(user.id); // Assuming `user` in context contains `id`
        if (!foundUser) {
          throw new Error('User not found!');
        }
        return foundUser;
      } catch (error) {
        throw new Error('Failed to fetch user!');
      }
    },

    
    cart: async (_, __, context) => {
      console.log("context user",context)
      if (!context.user) {
        throw new Error('Not authenticated');
      }

      let cart = await Cart.findOne({user: context.user._id})
      console.log(cart)
      
      if (!cart) {
        cart = await Cart.create({user: context.user._id, products: []})
      }

      await cart.populate('user', 'products.0.productId')
      return cart
    }
  },

  Mutation: {

    // mutation to create product 
    createProduct: async (_, { input }) => {
      const {name, description, price, size, stock, images} = input;
      try {
        const newProduct = new Product({ name, description, price, size, stock, images});
        await newProduct.save();
        return newProduct;
      } catch (error) {
        console.log(error);
        throw new Error('Failed to create product!');
      }
    },

    //mutation to create a new order
    createOrder: async (_, { input }) => {
      const { userId, products, totalPrice, shippingAddress} = input;
      try {
        const newOrder = new Order({ user: userId, products, totalPrice, shippingAddress});
        await newOrder.save();
        return newOrder;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create order');
      }
    },

    //mutation to update an existing order
    updateOrder: async (_, { updateInput }) => {
      const { orderId, ...updateData} = updateInput;
      try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, { new: true });
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
        console.log("Order deleted successfully!")
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
      const {firstName, lastName, email, password, address } = input;
      try {
        // checks if email belongs to any other user account
        const existingUser = await User.findOne({ email});
        if(existingUser) {
          throw new Error('User already exists with this email.');
        }
        // hashes the provided password
        const hashedPassword = await bcrypt.hash(password, 10);
        // creates a new user
        const newUser = new User({
          firstName, 
          lastName,
          email,
          password: hashedPassword,
          address
        });
        // saves the newly created user
        await newUser.save();
        console.log("New user created successfully!");
        return newUser;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create user');
      }
    },

    //mutation to update a user
    updateUser: async (_, { updateInput }) => {
      const { userId, ...updateFields } = updateInput;
      try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true });
        if (!updatedUser) {
          throw new Error('User not found');
        }
        console.log("Successfully update user information!")
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
        console.log("User deleted successfully.");
        return deletedUser;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to delete user');
      }
    },
  },

};

module.exports = resolvers;
