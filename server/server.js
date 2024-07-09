const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { expressMiddleware } = require('@apollo/server/express4');
const {ApolloServer} = require('@apollo/server')
dotenv.config();
const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./schemas/resolvers')
const server = new ApolloServer({typeDefs, resolvers})
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


//apollo middleware
const startApollo = async()=>{
await server.start()
app.use("/graphql", expressMiddleware(server))
}
startApollo()

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

