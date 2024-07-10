const {User, Order} = require('../models');

const resolvers = {
  Query: {
    //fetch all orders
    orders: async () => {
      try {
        const orders = await Order.find({});
        return orders;
      } catch (error) {
        throw new Error('Failed to fetch orders');
      }
    },

    //fetch a specific order by ID
    order: async (_, { orderId }) => {
      try {
        const order = await Order.findById(orderId);
        if (!order) {
          throw new Error('Order not found');
        }
        return order;
      } catch (error) {
        throw new Error('Failed to fetch order');
      }
    },

     // get all users
     users: async () => {
        try {
          const users = await User.find({});
          return users;
        } catch (error) {
          throw new Error('Failed to fetch users');
        }
    },

    // get single user
    user: async (_, { userId }) => {
        try {
          const user = await User.findById(userId);
          if (!user) {
            throw new Error('User not found');
          }
          return user;
        } catch (error) {
          throw new Error('Failed to fetch user');
        }
    },
  },

  Mutation: {
    //mutation to create a new order
    createOrder: async (_, { userInput }) => {
      try {
        // Implement your logic here to create a new order
        const newOrder = await Order.create(userInput);
        return newOrder;
      } catch (error) {
        throw new Error('Failed to create order');
      }
    },

    //mutation to update an existing order
    updateOrder: async (_, { orderId, updateInput }) => {
      try {
        // Implement your logic here to update an order
        const updatedOrder = await Order.findByIdAndUpdate(orderId, updateInput, { new: true });
        if (!updatedOrder) {
          throw new Error('Order not found');
        }
        return updatedOrder;
      } catch (error) {
        throw new Error('Failed to update order');
      }
    },

    //mutation to delete an order
    deleteOrder: async (_, { orderId }) => {
      try {
        // Implement your logic here to delete an order
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
          throw new Error('Order not found');
        }
        return deletedOrder;
      } catch (error) {
        throw new Error('Failed to delete order');
      }
    },

    // mutation to create a user 
    createUser: async (_, { userInput }) => {
        try {
        const newUser = await 
        const newUser = await User.create(userInput);
        return newUser;
        } catch (error) {
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
          throw new Error('Failed to delete user');
        }
    },
  },
};

module.exports = resolvers;
