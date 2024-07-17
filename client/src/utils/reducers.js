// reducers.js

import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
  SET_CART
} from './actions';

export const reducer = (state, action) => {
  const switches = () => {
    switch (action.type) {
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: [...action.products],
        };

      case ADD_TO_CART:
        let found = state.cart.find((p) => p._id === action.product._id)
        if (!found) {
          return {
            ...state,
            cart: [...state.cart, action.product]
          }
        }
        found = { ...found, quantity: found.quantity + 1 }
        return {
          ...state,
          cart: [...state.cart],
        };

      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };

      case SET_CART:
        return {
          ...state,
          cart: action.products,
        };

      case UPDATE_CART_QUANTITY:
        let updated = [...state.cart]
        return {
          ...state,
          cart: updated.map((product, i) => {
            if (action._id === product._id) {
              let updatedProduct = { ...product }
              updatedProduct.quantity = action.purchaseQuantity;
              return updatedProduct
            }
            return product;
          }),
        };

      case REMOVE_FROM_CART:
        return {
          ...state,
          cartOpen: state.cart.filter((product) => product._id !== action._id).length > 0,
          cart: state.cart.filter((product) => product._id !== action._id),
        };

      case CLEAR_CART:
        return {
          ...state,
          cartOpen: false,
          cart: [],
        };

      case TOGGLE_CART:
        return {
          ...state,
          cartOpen: !state.cartOpen,
        };

      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories],
        };

      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.currentCategory,
        };

      default:
        return state;
    }
  }
  const updatedState = switches()
  window.localStorage.setItem('cart', JSON.stringify(updatedState))
  return updatedState
};
