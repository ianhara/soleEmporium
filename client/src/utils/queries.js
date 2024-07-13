import { gql } from '@apollo/client';

// get all products
export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      _id
      name
      images
      description
      price
      size
      stock
    }
  }
`;

// get single product
export const GET_PRODUCT = gql`
  query GetProduct {
    product(productId: $productId) {
      _id
      name
      images
      description
      price
      size
      stock
    }
  }
`;

// get all orders
export const GET_ALL_ORDERS = gql`
  query GetAllOrders {
    orders {
      _id
      user{
        _id
        firstName
        lastName
      }
      products {
        _id
        quantity
        size
        price
      }
      shippingAddress {
        street
        city
        state
        zip
        country
      }
      totalPrice
      status
      createdAt
    }
  }
`;

// get order by ID
export const GET_ORDER = gql`
  query GetOrder($orderId: ID!) {
    order(orderId: $orderId) {
      _id
      user{
        _id
        firstName
        lastName
      }
      products {
        _id
        quantity
        size
        price
      }
      shippingAddress {
        street
        city
        state
        zip
        country
      }
      totalPrice
      status
      createdAt
    }
  }
`;

// get all users
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      _id
      firstName
      lastName
      email
      address {
        street
        city
        state
        zip
        country
      }
    }
  }
`;

// get user by ID
export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      address {
        street
        city
        state
        zip
        country
      }
    }
  }
`;
