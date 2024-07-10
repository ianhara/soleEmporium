const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./middleware/authMiddleware');
const { protect } = require('./middleware/authMiddleware');  
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const context = { req };
    await protect(context); // Apply the auth middleware
    return context;
  }
});

// Create a new instance of an Apollo Server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: true,
  });

  if (process.env.NODE_ENV === 'production') {
    // In production, serve the React app from the dist/ directory
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // Set up a wildcard route to handle routing through React
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
