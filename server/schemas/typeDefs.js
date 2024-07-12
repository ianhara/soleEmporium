const typeDefs = `
  type Product {
    _id: ID!
    name: String!
    images: [String]!
    description: String!
    price: Float!
    size: [Float]
    stock: Int!
  }

  type Order {
    _id: ID!
    user: User
    products: [OrderProduct!]!
    shippingAddress: Address!
    totalPrice: Float!
    status: String!
    createdAt: String!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!  
    email: String!
    address: Address!
  }

  type OrderProduct {
    _id: ID!
    quantity: Int!
    price: Float!
  }

  type Address{
    street: String!
    city: String!
    state: String
    zip: String!
    country: String!
  }

  input CreateProductInput{
    name: String!
    description: String!
    price: Float!
    size: [Float]!
    stock: Int!
    images: [String]!
  }

  input AddressInput {
    street: String!
    city: String!
    state: String
    zip: String!
    country: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String! 
    email: String!
    password: String!
    address: AddressInput!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    address: AddressInput
  }

  input OrderProductInput {
    productId: ID!
    quantity: Int!
    price: Float!
  }

  input OrderUpdateInput{
    userId: ID!
    products: [OrderProductInput!]!
    shippingAddress: AddressInput
    totalPrice: Float
    status: String
  }

  type Query {
    products: [Product]
    product(productId: ID!): Product
    orders: [Order]
    order(orderId: ID!): Order
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
    createOrder(userId: ID!, products: [OrderProductInput!]!, totalPrice: Float!, shippingAddress: AddressInput!): Order
    updateOrder(orderId: ID!, updateInput: OrderUpdateInput!): Order!
    deleteOrder(orderId: ID!): Order!
    loginUser(email: String!, password: String!): String
    createUser(input: CreateUserInput!): User
    updateUser(userId: ID!, updateInput: UpdateUserInput!): User!
    deleteUser(userId: ID!): User!
  }
`;

module.exports = typeDefs;
