import React, { useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery, useQuery } from '@apollo/client';
import Card from 'react-bootstrap/Card';

import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import { ADD_MULTIPLE_TO_CART, SET_CART } from '../utils/actions';
import { useStoreContext } from '../utils/GlobalState';
import { GET_CART } from '../utils/queries';

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext(); // Replace with your actual cart context hook

  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session });
  //     });
  //   }
  // }, [data]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    // getCheckout({
    //   variables: { products: productIds },
    // });
  }

  return (
    <div className="cart">
      
        <h2>Shopping Cart</h2>
        {state.cart.length ?
          <div>
            {
              state.cart.map((item, i) => {
                return <CartItem key={item._id} item={item} />
              })
            }
            <div className="flex-row space-between">
              <strong>Total: ${calculateTotal()}</strong>
            </div>
          </div>
          :
          <h3>
            You haven't added anything to your cart yet!
          </h3>
        }
    </div>
  );
};

export default Cart;
