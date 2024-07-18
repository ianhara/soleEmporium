const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { AuthenticationError } = require('@apollo/server');

// const { GraphQLError } = require('graphql');

const authenticateUser = (req) => {
  const token = req.headers.authorization || '';
  if (!token) {
    throw new AuthenticationError('No token provided');
  }
  
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken.user; // Assuming your token contains a `user` object
  } catch (error) {
    throw new AuthenticationError('Invalid/Expired token');
  }
};

// const AuthenticationError = new GraphQLError('Could not authenticate user.', {
//   extensions: {
//     code: 'UNAUTHENTICATED',
//   },
// })

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
      const user = await User.findById(decoded._id).select('-password');

      if (!user) {
        throw AuthenticationError
      }

      return { user }
    } catch (error) {
      console.error(error);
      throw AuthenticationError
    }
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

module.exports = { protect, admin, authenticateUser };
