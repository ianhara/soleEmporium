const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

// User must be authenticated
const protect = async (context) => {
  let token;

  // Read JWT from the 'authorization' header
  if (context.req.headers.authorization) {
    token = context.req.headers.authorization.split(' ')[1];
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select('-password');

      if (!user) {
        throw new AuthenticationError('Not authorized, user not found');
      }

      context.user = user;
    } catch (error) {
      console.error(error);
      throw new AuthenticationError('Not authorized, token failed');
    }
  } else {
    throw new AuthenticationError('Not authorized, no token');
  }
};

// User must be an admin
const admin = (context) => {
  if (context.user && context.user.isAdmin) {
    return true;
  } else {
    throw new AuthenticationError('Not authorized as an admin');
  }
};

module.exports = { protect, admin };
