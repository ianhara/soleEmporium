import { gql } from '@apollo/client';

// GraphQL Queries
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
export const GET_USER_ORDERS = gql`
  query GetUserOrders($userId: ID!) {
    orders(userId: $userId) {
      _id
      products {
        productId {
          _id
          name
          price
          images
        }
        quantity
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
export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      _id
      name
      description
      price
      size
      stock
      images
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      _id
      products {
        productId {
          _id
          name
          price
          images
        }
        quantity
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

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;