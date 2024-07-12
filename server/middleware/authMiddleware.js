const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { GraphQLError } = require('graphql');
const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
})

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

module.exports = { protect, admin };
