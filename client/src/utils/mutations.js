import { gql } from "@apollo/client";

// // create a product
// export const CREATE_PRODUCT = gql`
//   mutation CreateProduct($input: CreateProductInput!) {
//     createProduct(input: $input) {
//       _id
//       name
//       description
//       price
//       size
//       stock
//       images
//     }
//   }
// `;

// // create an order
// export const CREATE_ORDER = gql`
//   mutation CreateOrder($input: CreateOrderInput!) {
//     createOrder(input: $input) {
//       _id
//       user {
//         _id
//         firstName
//         lastName
//       }
//       products {
//         _id
//         quantity
//         size
//         price
//       }
//       shippingAddress {
//         street
//         city
//         state
//         zip
//         country
//       }
//       totalPrice
//       status
//       createdAt
//     }
//   }
// `;

// // update an order
// export const UPDATE_ORDER = gql`
//   mutation UpdateOrder($updateInput: UpdateOrderInput!) {
//     updateOrder(updateInput: $updateInput) {
//       _id
//       user {
//         _id
//         firstName
//         lastName
//       }
//       products {
//         _id
//         quantity
//         size
//         price
//       }
//       shippingAddress {
//         street
//         city
//         state
//         zip
//         country
//       }
//       totalPrice
//       status
//       createdAt
//     }
//   }
// `;

// // delete order by ID
// export const DELETE_ORDER = gql`
//   mutation DeleteOrder($orderId: ID!) {
//     deleteOrder(orderId: $orderId {
//       _id
//     }
//   }
// `;

// create a user
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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


// // create user input
// export const CREATE_USER = gql`
//   mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
//     createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
//       _id
//       firstName
//       lastName
//       email
//       address {
//         street
//         city
//         state
//         zip
//         country
//       }
//     }
//   }
// `;

// update a user
export const UPDATE_USER = gql`
  mutation UpdateUser($updateInput: UpdateUserInput!) {
    updateUser(updateInput: $updateInput) {
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


// // delete user by ID
// export const DELETE_USER = gql`
//   mutation DeleteUser($userId: ID!) {
//     deleteUser(userId: $userId) {
//       _id
//     }
//   }
// `;

// login a user
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;