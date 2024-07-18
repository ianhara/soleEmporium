// user(userId: ID!): User 
const typeDefs = `

  type Cart {
    _id: ID!
    user: User!
    products: [OrderProduct]
  }

  type Product {
    _id: ID!
    name: String!
    images: [String]!
    description: String!
    price: Float!
    size: [Float]!
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
    address: Address
  }

  type OrderProduct {
    _id: ID!
    quantity: Int!
    productId: ID!
    size: [Float]!
    price: Float!
  }

  type Address{
    street: String!
    city: String!
    state: String!
    zip: String!
    country: String!
  }

  input AddressInput {
    street: String
    city: String
    state: String
    zip: String
    country: String
  }

  input CreateProductInput{
    name: String!
    description: String!
    price: Float!
    size: [Float]!
    stock: Int!
    images: [String]!
  }

  input CreateOrderInput{
    userId: ID!
    products: [OrderProductInput!]!
    totalPrice: Float!
    shippingAddress: AddressInput!
  }

  input OrderProductInput {
    productId: ID!
    quantity: Int!
    size: [Float]!
    price: Float!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String! 
    email: String!
    password: String!
    address: AddressInput
  }

  input UpdateUserInput {
    userId: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    address: AddressInput
  }

  input UpdateOrderInput{
    orderId: ID!
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
    user: User
    cart: Cart!
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
    createOrder(input: CreateOrderInput!): Order
    updateOrder(updateInput: UpdateOrderInput!): Order!
    deleteOrder(orderId: ID!): Order!
    createUser(input: CreateUserInput!): User
    updateUser(updateInput: UpdateUserInput!): User!
    deleteUser(userId: ID!): User!
    loginUser(email: String!, password: String!): String
  }
`;

module.exports = typeDefs;
