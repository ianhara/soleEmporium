const typeDefs = `
  type Order {
    _id: ID!
    user: ID!
    orderItems: [OrderItem!]!
    shippingAddress: ShippingAddress!
    paymentMethod: String!
    paymentResult: PaymentResult
    itemsPrice: Float!
    taxPrice: Float!
    shippingPrice: Float!
    totalPrice: Float!
    isPaid: Boolean!
    paidAt: String
    isDelivered: Boolean!
    deliveredAt: String
    createdAt: String!
    updatedAt: String!
  }

  type OrderItem {
    name: String!
    qty: Int!
    shoeSize: Float!
    image: String!
    price: Float!
    product: ID!
  }

  type ShippingAddress {
    address: String!
    city: String!
    postalCode: String!
    country: String!
  }

  type PaymentResult {
    id: String!
    status: String!
    update_time: String!
    email_address: String!
  }

  input OrderInput {
    user: ID!
    orderItems: [OrderItemInput!]!
    shippingAddress: ShippingAddressInput!
    paymentMethod: String!
    paymentResult: PaymentResultInput
    itemsPrice: Float!
    taxPrice: Float!
    shippingPrice: Float!
    totalPrice: Float!
    isPaid: Boolean!
    paidAt: String
    isDelivered: Boolean!
    deliveredAt: String
  }

  input OrderItemInput {
    name: String!
    qty: Int!
    shoeSize: Float!
    image: String!
    price: Float!
    product: ID!
  }

  input ShippingAddressInput {
    address: String!
    city: String!
    postalCode: String!
    country: String!
  }

  input PaymentResultInput {
    id: String!
    status: String!
    update_time: String!
    email_address: String!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    isAdmin: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    isAdmin: Boolean
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
    isAdmin: Boolean
  }

  type Query {
    orders: [Order!]!
    order(orderId: ID!): Order
    users: [User!]!
    user(userId: ID!): User
  }

  type Mutation {
    createOrder(userInput: OrderInput!): Order!
    updateOrder(orderId: ID!, updateInput: OrderInput!): Order!
    deleteOrder(orderId: ID!): Order!
    createUser(userInput: CreateUserInput!): User!
    updateUser(userId: ID!, updateInput: UpdateUserInput!): User!
    deleteUser(userId: ID!): User!
  }
`;

module.exports = typeDefs;
